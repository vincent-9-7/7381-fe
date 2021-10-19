/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-plusplus */
/* eslint-disable vars-on-top */
// import './image';

import './UploadImage.scss';
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import url from '../../api/api';
import NoticeBoard from '../NoticeBoard/NoticeBoard';
import upload from '../../assets/img/upload-background.png';


function UploadImage(props){
  const imageAddress = [];
  const [image, setImage] = useState(null);
  const handleFileInput = (e) => {
    if(e.target.files[0]){
      const formData = new FormData(); 
      formData.append('images', e.target.files[0], e.target.files[0].name);
      setImage(formData);
    }
  };
  

  useEffect(()=>{ 
    if(image != null) {
    axios.post(`${url}/img`, image)
    .then(res => {
      imageAddress.push(res.data.imageAddress);
      props.onChange(imageAddress);
      console.log(imageAddress);
    });
  }},[image]);
     
  return (
    <div className="upload-page">
      {/* <h1 className="upload-page__header">Image Upload Tutorial</h1> */}
      {/* <button className="upload-page__button" type="button" onClick={handleClick}>Upload!</button> */}
      <div className="upload-page--left">    
        <img src={image?URL.createObjectURL(image.get('images')): null} className="upload-page--left__image" 
        alt=""  />
      </div>
      <div className="upload-page--right">
        <NoticeBoard className="upload-page--right__board"value="
                            Make sure your bank details are correct. 
                            This is how you get paid. "/>
        <label  className="upload-page--right__label" htmlFor = "imageUpload">
          Upload file   
          {/* <input className="upload-page__input" type="file" id = "image-2" onChange={handleFileInput}/>  */}
        </label>
        <input id="imageUpload" className="upload-page--right__input" value={props.imageAddress} 
           type="file" onChange={handleFileInput}/> 
       
      </div>
     

    </div>
  //   <div className="wrap-custom-file">
  //   <label  htmlFor="image1" >
  //   <img src={image?URL.createObjectURL(image.get('images')): null} className="img" 
  // alt="" width="200" height="250" />
  //     <span>Select Image One</span>
  //     <input type="file" name="image1" value={props.imageAddress} 
  //     id="image1" onChange={handleFileInput} accept=".gif, .jpg, .png" />
  //     <i className="fa fa-plus-circle" />
  //   </label>
  // </div>
  );
}

export default UploadImage;