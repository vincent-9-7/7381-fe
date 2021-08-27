import React from 'react';

function Load(props) {

  const {load, data} = props;
  const {email, password} = data;
  
  return (
    <>
      {load && <h1>loading2...</h1>}
      {!load && (
        <>
          <h2>{email}</h2>
          <h2>{password}</h2>
        </>
      )}
    </>
  );
}

export default Load;
