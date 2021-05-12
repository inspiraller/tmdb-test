import React, { FC, useState } from "react";

import axios from "axios";
import text from "src/util/text";

import { WEBSITE } from "src/config";
import { Button } from "semantic-ui-react";
import MasterHead from "src/components/Master/MasterHead";

const api_key = process.env.api_key;

const getRequestToken = () =>
  axios({
    url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${api_key}`,
    method: "GET",
  });

const Movies: FC = () => {
  const [error, setError] = useState("");
  const handleLogin = () =>
    getRequestToken()
      .then((res) => {
        const { request_token } = res.data;
        if (request_token) {
          location.href = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=${WEBSITE}/create-session`;
        } else {
          setError(text("cannot create token"));
        }
      })
      .catch((err) => {
        console.log("err = ", err.toString());
      });

  return (
    <>
      <MasterHead />
      <div className="container">
        <main>
          <Button primary onClick={handleLogin}>
            Login to TMDB
          </Button>
          {error && <span className="error">{error}</span>}
        </main>
      </div>
    </>
  );
};

export default Movies;
