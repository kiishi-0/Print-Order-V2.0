import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../Slide/Slide.css';
import cal1 from '../../images/cal1.jpg'
import cal2 from '../../images/cal2.jpg'
import bro2 from '../../images/bro2.jpg'
// import cal1 from '../../images/p-calendar.jpeg'

const images = [
    // {
    //   original: 'https://images.unsplash.com/photo-1633526543814-9718c8922b7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    //   thumbnail: 'https://images.unsplash.com/photo-1633526543814-9718c8922b7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    // },
    // {
    //   original: 'https://images.unsplash.com/photo-1516179257071-71a54dbb4853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    //   thumbnail: 'https://images.unsplash.com/photo-1516179257071-71a54dbb4853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    // },
    {
      original: 'https://github.com/kiishi-0/Print-Order-V2.0/blob/main/src/images/cal1.jpg?raw=true',
      thumbnail: {cal1},
    },
    {
      original: 'https://images.pexels.com/photos/5417675/pexels-photo-5417675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      thumbnail: {cal2},
    },
    {
      original: 'https://raw.githubusercontent.com/kiishi-0/Print-Order-V2.0/main/src/images/bro2.jpg',
      thumbnail: {bro2},
    },
  ];
const Slide = () =>{
    return(
        <div className="slide-container">
            <ImageGallery items={images} autoPlay={true} showBullets={true} additionalClass={'image'} showThumbnails={false}/>
        </div>
    )
}

export default Slide;