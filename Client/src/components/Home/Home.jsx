import React from 'react'
import Accordian from './Accordian'
import Features from './Features'
import Carousel from './Carousal'
const Home = () => {
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900">
        <Accordian></Accordian>
        <Carousel></Carousel>
        <Features></Features>
      </div>
    </>
  )
}

export default Home
