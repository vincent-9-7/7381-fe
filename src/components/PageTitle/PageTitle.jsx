import React from 'react';
import './PageTitle.scss';

function PageTitle(props) {
  const { text, background } = props;
  return (
    <>
      {background === 'white-bg' && (
        <div className="page-title-white">
          <h5 className="page-title__details">{text}</h5>
        </div>
      )}

      {background === 'green-bg' && (
        <div className="page-title-green">
          <h5 className="page-title__details">{text}</h5>
        </div>
      )}
    </>
  );
}

export default PageTitle;
