/* eslint-disable no-unused-vars */
import React ,{useState,useEffect}from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";

import axios from "axios";
import Cards from './Cards';
function freebook() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try {
        const res =await axios.get("http://localhost:4001/book")
        
        const data =res.data.filter((data) => data.category==="Free")
        console.log(data)
        setBook(data)
        
      } catch (error) {
        console.log("Error:",error)
        
      }
    }
    getBook();
  },[])
  const filterData = book.filter((data) => data.category==="Free");
  console.log(filterData)
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (

    <>
    <div className='max-w-screen-2xl  container mx-auto md:px-20 px-4'>
      <div>
      <h1 className="font-semibold text-xl pb-2">Free offered courses</h1>
      <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, aspernatur repellat voluptatem voluptates eaque fuga.</p>
    </div>
    
    <div>
    <Slider {...settings}>
      {/* mapping data from cards.jsx */}
     { book.map((item) =>(
        <Cards item ={item} key={item.id}/>
        
      ))}
      {/* props are used to pass values from parent to child */}
      </Slider>

    </div>
    </div>
    
    </>
    
  )
}

export default freebook