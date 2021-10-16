import React from 'react';
import './PageTitle.scss';

function PageTitle(props) {
  const { text, background } = props;
  return (
    <>
      {background === 'white-bg' && (
        // <div className="page-title-white">
        //   <h5 className="page-title__details">{text}</h5>
        // </div>
        <div className="page-title-white">
          <h1 className="page-title--header">{text}</h1>
          <hr className="page-title--divider" />
        </div>
      )}

      {background === 'green-bg' && (
        // <div className="page-title-green">
        //   <h5 className="page-title__details">{text}</h5>
        // </div>
        <div className="page-title-green">
          <h1 className="page-title--header">{text}</h1>
          <hr className="page-title--divider" />
        </div>
      )}

      {background === 'no-bg' && (
        // <div className="page-title-green">
        //   <h5 className="page-title__details">{text}</h5>
        // </div>
        <div className="page-title-no">
          <h1 className="page-title--header">{text}</h1>
          <hr className="page-title--divider" />
        </div>
      )}
    </>
  );
}

export default PageTitle;
