import React from 'react'
import Accordian from './Accordian'
import Features from './Features'
import Carousel from './Carousal'
import HeroSection from './HeroSection'
import About from './About'
const Home = () => {
  return (
    <>
      <div className=" dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] bg-blend-multiply text-gray-800 dark:text-gray-50">
        <HeroSection></HeroSection>
        <About></About>
        <Accordian></Accordian>
        <Carousel></Carousel>
        <Features></Features>
      </div>
    </>
  )
}
export default Home
