import React from 'react'
import { useState } from 'react';
import './Gallery.css';
import Menu from './ImgData';

function Gallery() {
const[images,setImages]= useState(Menu);
const categoryChange= (category)=>{
   const updatedItem= Menu.filter((el)=>{
    return el.category===category
   })
   setImages(updatedItem);
}

  return (
   <>
   <div className="container">
   <h2>Images</h2>
   <div className='row gap-40 justify-content-center mt-5'>
    <div className='col-6 col-md-2'>
    <button type="button" className="btn btn-primary" onClick={()=> setImages(Menu)}>All</button>
    </div>
    <div className='col-6 col-md-2'>
    <button type="button" className="btn btn-primary" onClick={()=> categoryChange("nature")}>Nature</button>
    </div>
    <div className='col-6 col-md-2'>
    <button type="button" className="btn btn-primary" onClick={()=> categoryChange("cityscape")}>CityScape</button>
    </div>
    <div className='col-6 col-md-2'>
    <button type="button" className="btn btn-primary" onClick={()=> categoryChange("abstract")}>Abstract</button>
    </div>
   </div>
   <div className='items'>
    <div className='container'>
        <div className='row gap-40 mt-5 mb-5'>
            {
                images.map((el)=>{
                    const {id,src,category}= el;
                    return (
                        <div className='col-12 col-md-6 col-lg-4 '>
                            <img key={id} src={src}></img>
                        </div>
                    )
                })
            }
        </div>
    </div>
   </div>
   </div>
   </>
  )
}

export default Gallery