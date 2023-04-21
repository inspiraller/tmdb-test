import axios, { AxiosResponse, AxiosPromise } from 'axios';
import React, { FC, useState, LegacyRef, Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import { Button } from 'semantic-ui-react';
import { getEndpointMovieVideo } from 'src/endpoints/movie_video';

/* eslint-disable prefer-destructuring */
const api_key = process.env.api_key;

interface PropsIframe {
  children: React.ReactChild;
}

// https://blog.logrocket.com/best-practices-react-iframes/
// const CustomIframe: FC<PropsIframe> = ({ children }) => {
//   const [contentRef, setContentRef] = useState<HTMLIFrameElement | null>(null);
//   const mountNode = contentRef?.contentWindow?.document?.body;

//   return (
//     <iframe title="movie" ref={setContentRef}>
//       {mountNode && createPortal(children, mountNode)}
//     </iframe>
//   );
// };

interface PropIFrameSrc {
  src: string;
}

const IFrameSrc: FC<PropIFrameSrc> = ({ src }) => {
  return (
    <iframe
      width="1280"
      height="544"
      src={src}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  );
};

interface Props {
  id: number;
}

interface PropVideo {
  id: string;
  iso_639_1: string; // en
  iso_3166_1: string; // US
  key: string;
  name: string;
  official: boolean;
  published: string; // isostring
  site: string; // youtub
  size: number;
  type: string; // trailer, clip
}

const ButtonLoadTrailer: FC<Props> = ({ id }) => {
  const [video, setVideo] = useState<PropVideo | null>(null);
  const handleClickLoadTrailer = async () => {
    const endpointWithId = getEndpointMovieVideo(id);
    const resp = await (axios({
      url: `${endpointWithId}?api_key=${api_key}&language=en-US`,
      method: 'GET'
    }) as AxiosPromise<{ results: PropVideo[] }>);

    const foundVideo = resp?.data?.results?.find((item) => item.type === 'Trailer') || null;

    console.log({foundVideo})
    if (foundVideo) {
      setVideo(foundVideo);
    }
  };

  console.log('video', video)
  return (
    <>
      <Button primary onClick={handleClickLoadTrailer}>
        Load Trailer
      </Button>
      {video ? <IFrameSrc src={`https://www.youtube.com/embed/${video.key}`} /> : null}
    </>
  );
};

export default ButtonLoadTrailer;
