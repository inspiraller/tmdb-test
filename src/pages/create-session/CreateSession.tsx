import { useRouter } from 'next/router';
import React, { FC, useState, useEffect } from 'react';
import cookieCutter from 'cookie-cutter';

import { Dimmer, Loader } from 'semantic-ui-react';

import axios from 'axios';
import MasterHead from 'src/components/Master/MasterHead';
import Error, { PropsError } from 'src/components/Common/Error/Error';
import text from 'src/util/text';

import getQs from 'src/util/getQs';

const { api_key } = process.env;

export const dataTestid = 'create-session-loader';
export const dataTestidError = 'create-session-error';

const getTomorrow = () => {
  const dt = new Date();
  dt.setDate(dt.getDate() + 1);
  return dt;
};
const getSession = (request_token: string) =>
  axios({
    url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${api_key}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    data: {
      request_token
    }
  });

const CreateSession: FC = () => {
  const router = useRouter();
  const [error, setError] = useState<PropsError | null>();
  useEffect(() => {
    /* eslint-disable no-restricted-globals */
    const objQs = getQs(location.search);
    const request_token = objQs && objQs.request_token;
    if (request_token) {
      getSession(request_token as string).then((res) => {
        if (res.data.success) {
          cookieCutter.set('session_id', res.data.session_id, {
            expires: getTomorrow()
          });
          router.push('/movies');
        } else {
          setError({
            heading: text('session error'),
            text: text('It has not been able to create a session for you. Try logging in again')
          });
        }
      });
    } else {
      setError({
        heading: text('Missing request token'),
        text: text('Make sure there is a querystring in the url')
      });
    }
  }, []);

  return (
    <div>
      <MasterHead />
      {error ? (
        <Error {...{ dataTestid: dataTestidError, ...error }} />
      ) : (
        <Dimmer active inverted data-testid={dataTestid}>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      )}
    </div>
  );
};

export default CreateSession;
