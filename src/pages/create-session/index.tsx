import { useRouter } from 'next/router'
import React, { FC, useState, useEffect } from "react";
import cookieCutter from 'cookie-cutter';

import axios from "axios";
import text from "src/util/text";
import { TJson } from "src/types";

import getQs from "src/util/getQs";

const api_key = process.env.api_key;

import Error from "src/components/Common/Error";

const getTomorrow = () => {
  const dt = new Date(); 
  dt.setDate(dt.getDate()+1);
  return dt;
}
const getSession = (request_token: string) =>
  axios({
    url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${api_key}`,
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    data: {
      request_token,
    },
  });

const CreateSession: FC = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  useEffect(() => {
    const objQs = getQs(location.search);
    const { request_token } = objQs as TJson;
    if (request_token) {
      getSession(request_token as string).then((res) => {
        if (res.data.success) {
          cookieCutter.set('session_id', res.data.session_id, { expires: getTomorrow() });
          router.push('/movies');
        } else {
          setError(text('session error'));
        }
      });
    } else {
      setError(text("missing request_token"));
    }
  }, []);

  return (
    <div className="container">
      {error && <Error error={error} />}
      <main>Hello movies</main>
    </div>
  );
};

export default CreateSession;
