import React, { FC } from 'react';

import { Message } from 'semantic-ui-react';

export interface PropsError {
  heading?: string;
  text?: string;
}

interface Props extends PropsError {
  dataTestid: string;
}

const Error: FC<Props> = ({ dataTestid, heading, text }) => {
  return heading && text ? (
    <Message negative style={{ textAlign: 'center' }} data-testid={dataTestid}>
      <Message.Header style={{ marginBottom: '5px' }}>{heading}</Message.Header>
      {text}
    </Message>
  ) : null;
};

export default Error;
