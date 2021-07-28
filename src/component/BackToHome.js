import React from 'react';
import { useHistory } from 'react-router';

const BackToHome = () => {
  const history = useHistory();
  return (
    <div
    className=''
    >
      sorry you have been kicked
      <button
      className=''
        onClick={() => {
          history.push('/');
        }}
      >
        Back to home
      </button>
    </div>
  );
};

export default BackToHome;
