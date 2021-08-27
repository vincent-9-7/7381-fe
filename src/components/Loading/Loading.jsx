import React from 'react';
import './Loading.scss';

function Loading() {
  return (
    <div className="loading">
      <div className="load-wrapp">
        <div className="load">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </div>
    </div>
  );
}

export default Loading;
