
import './UploadImage.scss';
import axios from 'axios';
import React, { useState } from 'react';

function UploadImage() {
  const [image, setImage] = useState(null);
  const handleClick = () => {
    axios.post('http://localhost:8000/img', image)
    .then(res => {
      console.log('Axios response: ', res);
      console.log(res.data.imageAddress);
      localStorage.setItem("imageArress",res.data.imageAddress);  
      window.location.reload();
    });
  };
  const handleFileInput = (e) => {
    console.log('handleFileInput working!');
    console.log(e.target.files[0]);
    const formData = new FormData(); 
    formData.append('images', e.target.files[0], e.target.files[0].name);
    setImage(formData);
  };
  const imageAddress = localStorage.getItem("imageArress");
  return (
    <div className="upload-page">
      <h1 className="upload-page__header">Image Upload Tutorial</h1>
      <button className="upload-page__button" type="button" onClick={handleClick}>Upload!</button>
      <label className="upload-page__label" htmlFor = "imageUpload">
        Upload file
        <input className="upload-page__input" type="file" onChange={handleFileInput}/>    
      </label>
      <img src={imageAddress} className="img" alt="" />
    </div>
  );
}

export default UploadImage;