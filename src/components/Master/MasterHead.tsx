import React from 'react';
import Head from 'next/head';

const MasterHead = () => (
  <Head>
    <title>TMDB test</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css" />
    <style>{`
      html,
      body {
        padding: 0;
        margin: 0;
      }
      * {
        box-sizing: border-box;
      }
    `}</style>
  </Head>
);

export default MasterHead;
