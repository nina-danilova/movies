import React from 'react';
import { Alert } from 'antd';

interface MessageProps {
  message: string;
  description: string;
  type: 'error' | 'success' | 'info' | 'warning';
  closable: boolean;
}

function Message(props: MessageProps) {
  const { message, description, type, closable } = props;
  return <Alert message={message} description={description} type={type} closable={closable} />;
}

export default Message;
