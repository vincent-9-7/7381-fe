/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import MapboxGl from 'mapbox-gl/dist/mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import UploadImage from '../UploadImage/UploadImage';
import './PostForm.scss';
import NoticeBoard from '../NoticeBoard/NoticeBoard';
import { postItemsRequest } from "../../store/actions/actionCreator";


export default function PostForm() {
  // const history = useHistory();
  const [imageAddress, setImageAddress,] = React.useState([]);
  // const [latitude, setLatitude,] = React.useState(null);
  const [count, getCount] = React.useState(3000);
  const dispatch = useDispatch();
  const keyhandler = e => {
    getCount(3000 - e.target.value.length);
  };
  function handleChange(imgAddress) {
    if (imageAddress.size !== 0) {
      imageAddress.pop();
    }
    imageAddress.push(imgAddress);
    setImageAddress(imageAddress);
    // RenderImage();
    // imageAddress.map((item)=>{
    //     console.log(JSON.stringify(item[0]),"address2222");
    // })
    console.log(imageAddress, "address");
  }
  // function handleDelete() {
  //   imageAddress.pop();
  //   setImageAddress(imageAddress);
  //   console.log(imageAddress, "address");
  // }
  const { register, handleSubmit,setValue,formState: { errors } } = useForm({
    defaultValues:{
        imageAddress:" ",
        latitude: null,
        longitude:null,
        // 记得设置id
    }

  });


  // eslint-disable-next-line max-len



  const onSubmit = (data) => {
    console.log(data);
    MapboxGl.accessToken =
      'pk.eyJ1IjoibGluZ3hpMjExIiwiYSI6ImNrdWUycWg5cTFlM3UycG12anRlcnZ2b3QifQ.mp24OFFxrF3e93xjPwbhGg';
    // let coor = 0;
    const geocoder = new MapboxGeocoder({
      accessToken: MapboxGl.accessToken,
      // types: 'place,postcode,locality,neighborhood'
      types: 'postcode'
    });
    geocoder.addTo('#geocoder');
    function searchCoorsByName(locationName) {
      geocoder.query(locationName);
      geocoder.on('result', (e) => {
        // coor = e.result.geometry.coordinates;
        // console.log(e.result);
        // console.log(e.result.bbox[1],"tjis c");
        const x = e.result.bbox[0];
        const y = e.result.bbox[1];
        localStorage.setItem('x',x);
        localStorage.setItem('y',y);
        // console.log("1");
      }); 
    }
    const { postcode } = data;
    searchCoorsByName(`australia,${postcode}`);
    setTimeout(()=>{
      let {latitude1,longitude1} =data;
      latitude1 = localStorage.getItem('x');
      longitude1 = localStorage.getItem('y');
      const data1 = {
        ...data,
        latitude:latitude1,
        longitude:longitude1,
      };
      console.log(data1);
      dispatch(postItemsRequest(data1));
      const type = data.category === "Fruit"? "fruit" : "vegetable";
      // history.push(`/${type}`);
      document.location.href= `./${type}`;
    },1000);
    // let {latitude1,longitude1} =data;
    // latitude1 = localStorage.getItem('x');
    // longitude1 = localStorage.getItem('y');
  
    // const data1 = {
    //   ...data,
    //   latitude:latitude1,
    //   longitude:longitude1,
    // }
    // console.log(data1);
    // dispatch(postItemsRequest(data1));
    // localStorage.clear("x");
    // localStorage.clear("y");
  };

  useEffect(() => {
    setValue('imageAddress', imageAddress);
  }, [imageAddress]);


  return (
    <form className="post-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="post-form__top">
        <h1 className="post-form__top--header">Post an Ad</h1>
        <hr className="post-form__top--divider" />
      </div>
      <div className="post-form__body">
        <div className="container--left" />
        <div className="container--mid">
          <div className="container--mid--title">
            <p className="container--p1" >Title</p>
            <div className="container--mid--flex">
              <div className="container--mid--flex-left">
                <input className="container--mid--flex--input"
                  type="text" placeholder="Title" {...register("title", { required: true, maxLength: 80 })} />
                <p className="container--p2">Please include details such as <span
                  className="container--p2-bolder">quality, size, specs, etc.</span></p>
              </div>
              <div className="container--mid--flex-space" />
              <div className="container--mid--flex-space" />
              <div className="container--mid--flex-right">
                <NoticeBoard value="
                      Use words people would search for 
                      when looking for your item."/>
              </div>
            </div>
          </div>

          <p className="container--title">Item specific </p>
          <hr className="container--divider" />
          <div className="container--mid--box">
            <div className="container--mid--item_specific">
              <div className="item--label">
                <span className="container--p3">Condition</span>
                <span className="container--p4"> (Required)</span>
              </div>
              <div className="item item--space" />
              <div className="item--label">
                <span className="container--p3">Category</span>
                <span className="container--p4"> (Required)</span>
              </div>
              <select className="item item--select"{...register("condition", { required: true })}>
                <option value="B-grade">B-grade</option>
                <option value="Processed">Processed</option>
              </select>
              <div className="item item--space" />
              <select className="item item--select" {...register("category", { required: true })}>
                <option value="Fruit">Fruit</option>
                <option value="Vegetable">Vegetable</option>
              </select>
              <div className="item--label">
                <span className="container--p3">Price</span>
                <span className="container--p4"> (Required)</span>
              </div>
              <div className="item item--space" />
              <div className="item--label">
                <span className="container--p3">Quantity</span>
                <span className="container--p4"> (Required)</span>
              </div>
              <input className="item item--input__text"
                type="number" placeholder="$" {...register("price", { required: true, maxLength: 10 })} />
              <div className="item item--space" />

              <input className="item item--input__text"
                type="number" placeholder="Quantity" {...register("quantity", { required: true, maxLength: 10 })} />
              <div className="item--label">
                <span className="container--p3">Size</span>
                <span className="container--p4"> (Required)</span>
              </div>
              <div className="item item--space" />
              <div className="item--label">
                <span className="container--p3">Return accepted</span>
                <span className="container--p4"> (Required)</span>
              </div>
              <input className="item item--input__text"
                type="number" placeholder="Size" {...register("size", { required: true })} />
              <div className="item item--space" />
              {/* <input className="item item--input__text"
                type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 15})} />
                <div className="item item--space"/> */}
              <select className="item item--select" {...register("return", { required: true })}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {/* <input className="item item--input__text"
                type="text" placeholder="Address" {...register("Address", {required: true, maxLength: 20})} /> */}
            </div>
          </div>

          <p className="container--title">Add a photo </p>
          <hr className="container--divider" />
          <UploadImage value={imageAddress} onChange={handleChange} />
          <p className="container--title">Description </p>

          <hr className="container--divider" />
          {/* <input className="item item--input__text" type="text" placeholder="First name" 
                {...register("First name", {required: true, maxLength: 15})} /> */}
          <div>
            <div className="container--textarea--flex">
              <div className="container--textarea--flex-width">
                <textarea className="textarea" type="text"
                  onKeyUp={e => keyhandler(e)}
                  // style=“font-family 'Roboto', sans-serif”

                  placeholder="Describe your product in this area."

                  {...register("description", { required: true, maxLength: 3000 })} />
                <div>
                  Words left: {count}
                </div>
              </div>
              <div>
                <NoticeBoard value="
                          Give product details or description to improve your chances of selling. "/>
              </div>
            </div>
            <p className="container--title">Postage </p>
            <hr className="container--divider" />
            {/* <div className="container--mid--box"> */}
            <div className="container--mid--item_postage">

              <input className="item item--input__addrees1"
                type="text" placeholder="Address1" {...register("address1", { required: true, maxLength: 30 })} />
              {/* <div className="item item--space"/> */}
              <input className="item item--input__addrees2"
                type="text" placeholder="Address2" {...register("address2", { maxLength: 30 })} />
              <div className="item item--space" />
              <input className="item item--input__suburb"
                type="text" placeholder="Suburb" {...register("suburb", { required: true, maxLength: 30 })} />
              {/* <div className="item item--space"/> */}
              <input className="item item--input__text"
                type="text" placeholder="City" {...register("city", { required: true, maxLength: 30 })} />
              <div className="item item--space" />
              <input className="item item--input__text"
                type="text" placeholder="State" {...register("state", { required: true, maxLength: 20 })} />
              <div className="item item--space" />
              <input className="item item--input__text"
                type="text" placeholder="Postcode" {...register("postcode", { required: true, maxLength: 4 })} />
              {/* </div> */}
            </div>
            {/* <input className="item item--input-number"
                type="number" placeholder="Quantity" {...register("Quantity",{required: true, maxLength: 10 })} />
                <input className="item item--input__text"
                type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                <input className="item item--input__text"
                type="tel" placeholder="Mobile number" {...register("Mobile number", 
                {required: true, minLength: 6, maxLength: 12})} /> */}
            {/* <input type="text" placeholder="Description" 
              {...register("Description", {required: true, maxLength: 1000})} /> */}
          </div>
          {/* <p className="container--title">Contact details </p>
          <hr className="container--divider" />  */}
          {/* <input type="checkbox" /> */}
          {/* <select className="item item--select"{...register("Condition", { required: true })}>
                <option value="B-grade">Yes</option>
                <option value="Processed">No</option>
              </select> */}
          <p className="container--title">Listing preferences  </p>
          <hr className="container--divider" />
          <div className="post-form__bottom">
            <div className="post-form__bottom--bank">
              <p className="post-form__bottom--bank--title">Recipient</p>
              <input className="post-form__bottom--bank--input"
                type="text" placeholder="Recipient" {...register("recipient", { required: true, maxLength: 30 })} />
              <p className="post-form__bottom--bank--title">Bank name</p>
              <input className="post-form__bottom--bank--input"
                type="text" placeholder="Bank name" {...register("bankName", { required: true, maxLength: 30 })} />
              <p className="post-form__bottom--bank--title">BSB</p>
              <input className="post-form__bottom--bank--input"
                type="text" placeholder="BSB" {...register("BSB", { required: true, maxLength: 30 })} />
              <p className="post-form__bottom--bank--title">Account</p>
              <input className="post-form__bottom--bank--input"
                type="text" placeholder="Account" {...register("account", { required: true, maxLength: 30 })} />

              {/* <p className="post-form__bottom--header">Payment options </p>
              <hr className="post-form__bottom--divider" /> */}
            </div>
            <div>
              <NoticeBoard value="
                            Make sure your bank details are correct. 
                            This is how you get paid. "/>
            </div>
          </div>

          <hr className="container--divider" />
          <input value="Post Ad" type="submit" className="post-form--btn--post" />
          {/* <button type="button" onClick= {handleDelete}>delete</button> */}
          <p>
            Your listing is a 7-day auction.
          </p>
          <p>
            To improve your chances of selling,
            we may send you offers from buyers that you can choose to accept or decline.
          </p>
          <p>
            Auctions will be automatically relisted up to 8 times for free and do not count towards your
            monthly listings balance.
            Auctions with a 1- or 3-day duration will be relisted with a 7-day duration.
          </p>
          <p>
            *If your preferred postage option isn’t shown when you select Change
            postage service, put in a flat postage cost to
            let buyers know how much you’ll charge for posting this item.
          </p>
          <p>
            Funds from your sales may be unavailable and show as pending for a period of
            time. Learn more about pending payments - opens in a new window or tabLearn more
          </p>
          <p>
            Subject to Australian Consumer Law Standards
          </p>


        </div>

        <div className="post-form__body--right" />


        {/* <UploadImage value={imageAddress} onChange={handleChange} />
      <UploadImage value={imageAddress} onChange={handleChange} /> */}
        {/* <ul>
        {imageAddress.map((imgSrc) => {
          return (
           
              <img className="img" src={imgSrc[0]} key={imgSrc[0]} alt={imgSrc[0]} 
    width="150" height="220" {...register("imageAddress")} />
          );
        })}
      </ul> */}

        {/* <input {...register("Developer", { required: true })} type="radio" value="Yes" />
      <input {...register("Developer", { required: true })} type="radio" value="No" /> */}

        {/* <UploadImage value={imageAddress} onChange={handleChange} /> */}
        {/* <UploadImage value={imageAddress} onChange={handleChange}/>
      <UploadImage value={imageAddress} onChange={handleChange}/> */}
        {/* <p>{imageAddress}</p> */}
        {/* {watchImage && <input type="number" {...register("age", { min: 50 })} />} */}
        {/* {showImage} */}
        {/* <RenderImage props={imageAddress.length>0?imageAddress:null}/> */}
        {/*       
         {imageAddress.map((imgSrc) => (<img className="img" src={imgSrc[0]} key={imgSrc[0]} alt={imgSrc[0]} 
    width="150" height="220"/>))} */}
        {/* {imageAddress.map((imgSrc) => (<img className="img" src={imgSrc[0]} key={imgSrc[0]} alt={imgSrc[0]} 
    width="150" height="220"/>))} */}

        {/* {   
            imageAddress.map((item)=> {
                console.log(item[0],"22321312312312");
    //             <img src={item[0]?URL.createObjectURL(item[0]): null} className="img" 
    //   alt="" width="150" height="220" /> 
                <img id={item[0]} src={item[0]}
                className="img" alt="images" width="150" height="220" />;
            })
            } */}



      </div>
      <div style={{ display: "none" }} id='geocoder' />
      <pre id='result' />
      {/* {watchImage && <input type="number" {...register("age", { min: 50 })} />} */}
    </form>
    /* <div>
    {imageAddress.map((imgSrc) => (<img className="img" src={imgSrc[0]} key={imgSrc[0]} alt={imgSrc[0]} 
    width="150" height="220"/>))}
     </div> */

  );
}
