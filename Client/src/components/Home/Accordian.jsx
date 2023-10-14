import React, { useState, useRef } from 'react'

import Panel from './Panel'

const data = [
  {
    title: 'a',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos alias vero recusandae esse provident in aspernatur doloremque quo excepturi odit libero officia laudantium, unde, ab nam, corrupti consequuntur quaerat eligendi.',
    id: 0,
  },
  {
    title: 'b',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex totam illum a temporibus blanditiis illo fugiat recusandae aliquam, doloribus tempore.',
    id: 1,
  },
  {
    title: 'c',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex totam illum a temporibus blanditiis illo fugiat recusandae aliquam, doloribus tempore.',
    id: 2,
  },
  {
    title: 'd',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos alias vero recusandae esse provident in aspernatur doloremque quo excepturi odit libero officia laudantium, unde, ab nam, corrupti consequuntur quaerat eligendi.',
    id: 3,
  },
  {
    title: 'e',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex totam illum a temporibus blanditiis illo fugiat recusandae aliquam, doloribus tempore.',
    id: 4,
  },
  {
    title: 'f',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex totam illum a temporibus blanditiis illo fugiat recusandae aliquam, doloribus tempore.',
    id: 5,
  },
]

const Accordian = () => {
  const [isActive, setisActive] = useState(-1)
  function handleclick(id) {
    setisActive(isActive === id ? -1 : id)
  }

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center space-y-4 ">
      {data.map((x) => {
        return (
          <Panel
            key={x.id}
            title={x.title}
            id={x.id}
            description={x.description}
            // isActive={isActive}
            // handleclick={handleclick}
          ></Panel>
        )
      })}
    </div>
  )
}
export default Accordian
