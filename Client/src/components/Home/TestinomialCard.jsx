import React from 'react'

const TestinomialCard = () => {
  return (
    <div class="mb-10 flex h-full w-full flex-col items-center justify-center rounded-lg border border-content/20 bg-gradient-to-br from-content/0 to-content/10 p-4 py-8 text-center lg:flex-1">
      <img
        alt="testimonial"
        class="mb-2 inline-block h-20 w-20 rounded-full border-2 border-base-100 bg-base-100/10 object-cover object-center"
        src="https://images.pexels.com/photos/18867836/pexels-photo-18867836/free-photo-of-a-person-walking-on-the-beach-in-the-fog.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
      />
      <h2 class="text-md">Hello there</h2>
      <hr class="mx-auto my-4" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, qui</p>
    </div>
  )
}

export default TestinomialCard
