import React from 'react';
import { Alert } from 'antd';

type MessageProps = {
  message: string;
  description: string;
  type: 'error' | 'success' | 'info' | 'warning';
  closable: boolean;
};

export const Message: React.FC<MessageProps> = (props) => {
  const { message, description, type, closable } = props;
  return <Alert message={message} description={description} type={type} closable={closable} />;
};
