import { FC } from "react";

interface Props {
  error: string;
}
const Error: FC<Props> = ({ error }) => <strong>{error}</strong>;

export default Error;