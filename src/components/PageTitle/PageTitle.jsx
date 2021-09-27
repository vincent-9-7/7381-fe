import React from 'react';
import './PageTitle.scss';


function PageTitle(props) {
  const {text} = props;
  return(
    <div className="page-title">
      <h5 className="page-title__details">{text}</h5>
    </div>
  );
}

export default PageTitle;