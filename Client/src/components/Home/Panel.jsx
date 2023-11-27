import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import { BiPlus, BiMinus } from 'react-icons/bi'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Panel = ({ id, description, title }) => {
  const content = useRef()
  useEffect(() => {
    Aos.init({ duration: '1000' })
  })
  const [isActive, setisActive] = useState(-1)
  function handleclick(id) {
    setisActive(isActive === id ? -1 : id)
  }
  return (
    <div
      className="flex flex-col gap-y-10  md:w-3/4 flex justify-center "
      data-aos="fade-right"
    >
      <div className="  dark:bg-gray-800 dark:border-gray-700 bg-white border border-gray-200  duration-500 ease-in-out rounded-lg text-gray-900 dark:text-white">
        <div
          className="flex flex-row w-full justify-between h-10 p-4 py-8 items-center"
          onClick={() => handleclick(id)}
        >
          <h1 className="md:text-lg text-md font-semibold ">{title}</h1>
          {isActive === id ? <BiMinus /> : <BiPlus />}
        </div>

        <div
          style={
            isActive === id
              ? {
                  maxHeight: content.current.scrollHeight + 'px',
                }
              : { maxHeight: '0px' }
          }
          ref={content}
          className={`max-h-0 overflow-hidden   dark:bg-gray-600 bg-gray-200 transition-all  duration-500 ease-out rounded-b-lg`}
        >
          <p className="p-3 text-xs md:text-lg">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Panel
