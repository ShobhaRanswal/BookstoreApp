import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/course'
import Footer from '../components/footer'

export default function Courses() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Course/>

    </div>
    <Footer/>
    </>
  )
}
