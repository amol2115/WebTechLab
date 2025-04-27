import React from 'react';

function Message(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Your message: {props.message}</p>
    </div>
  );
}

export default Message;