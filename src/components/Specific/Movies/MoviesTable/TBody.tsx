import React, { FC } from "react";
import { PropsMovieLight } from "src/types";
import { ContextMovies } from "../_ContextMovies";

interface PropsRenderVal {
  title: string;
  keyName: keyof PropsMovieLight;
  val: string | number;
}

const RenderVal: FC<PropsRenderVal> = ({ title, keyName, val }) =>
  keyName !== "custom_full_poster_path" ? <> {val}</> : <img src={val as string} alt={title} />;

const TBody: FC = () => {
  const { movies } = React.useContext(ContextMovies);
  return (
    <tbody>
      {movies.map((item: PropsMovieLight) => (
        <tr key={`movie-id-${item.id}`}>
          {Object.keys(item).map((key) => (
            <td key={`movie-id-${item.id}-prop-${key}`}>
              <RenderVal
                {...{
                  title: item.title,
                  keyName: key as keyof PropsMovieLight,
                  val: item[key as keyof typeof item],
                }}
              />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TBody;
