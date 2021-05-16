import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// export const getEndPointQs = (url: string, qs: string) => `${url}?${qs}`;
export const getEndPointQs = (url: string) => RegExp(`${url}(\\?[\\w\\W]*)?`);

export const mockAxios = new MockAdapter(axios);

export const msTimeout = 100;
export const hackWaitSagaAjaxReturn = () =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve(); // hack to wait for saga to finish
    }, msTimeout);
  });

export const getMockSuccess = <T>(url: string, mock: T) => {
  mockAxios.reset();
  // mockAxios.onGet(getEndPointQs(url, qs)).reply(200, mock);
  mockAxios.onGet(getEndPointQs(url)).reply((config) => {
    // console.log('on success return mock............................................................');
    return [200, mock];
  });
};

export const getMockNetworkError = (url: string) => {
  mockAxios.reset();
  mockAxios.onGet(getEndPointQs(url)).networkError();
};

export const getMockTimeout = async (url: string) => {
  mockAxios.reset();
  mockAxios.onGet(getEndPointQs(url)).timeout();
};

export const getMock404 = async (url: string) => {
  mockAxios.reset();
  mockAxios.onGet(getEndPointQs(url)).reply(404, {
    message: 'There was an error'
  });
};
