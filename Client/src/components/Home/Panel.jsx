import React from 'react'
import { useRef, useState } from 'react'
import { BiPlus, BiMinus } from 'react-icons/bi'
const Panel = ({ id, description, title }) => {
  const content = useRef()
  const [isActive, setisActive] = useState(-1)
  function handleclick(id) {
    setisActive(isActive === id ? -1 : id)
  }
  return (
    <div className="flex flex-col gap-y-10  w-1/2    ">
      <div className="bg-[#161616] text-slate-200 transition  duration-500 ease-in-out rounded-lg">
        <div
          className="flex flex-row w-full justify-between h-10 p-4 py-8 items-center"
          onClick={() => handleclick(id)}
        >
          <h1 className="text-lg font-semibold ">{title}</h1>
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
          className={`max-h-0 overflow-hidden   bg-gray-600  transition-all  duration-500 ease-out rounded-lg`}
        >
          <p className="p-3">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Panel
