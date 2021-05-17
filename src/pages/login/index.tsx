import React, { FC, useState } from 'react';

import axios from 'axios';
import text from 'src/util/text';

import { WEBSITE } from 'src/config';
import { Button } from 'semantic-ui-react';
import MasterHead from 'src/components/Master/MasterHead';
import Error, { PropsError } from 'src/components/Common/Error/Error';

/* eslint-disable prefer-destructuring */ // otherwise api_key becomes undefined
const api_key = process.env.api_key;

export const dataTestid = 'btn-login';

const getRequestToken = () =>
  axios({
    url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${api_key}`,
    method: 'GET'
  });

export const dataTestidError = 'get-request-token-error';

const Movies: FC = () => {
  const [error, setError] = useState<PropsError | null>();
  const handleLogin = () => {
    console.log('api_key = ', api_key);
    getRequestToken()
      .then((res) => {
        const request_token = res && res.data && res.data.request_token;
        if (request_token) {
          /*eslint-disable no-restricted-globals */
          location.href = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=${WEBSITE}/create-session`;
        } else {
          setError({
            heading: text('Cannot create request_token'),
            text: text('Please try logging in again')
          });
        }
      })
      .catch((err) => {
        setError({
          heading: text('Cannot create request_token'),
          text: text(err.toString())
        });
      });
  };
  return (
    <>
      <MasterHead />
      <div className="container">
        <main>
          <Button primary onClick={handleLogin} data-testid={dataTestid}>
            Login to TMDB
          </Button>
          <Error {...{ dataTestid: 'get-request-token-error', ...error }} />
        </main>
      </div>
    </>
  );
};

export default Movies;
