## Imporant

### Accordion

- define useState with initial value as -1
- Map through the data and give key to each div and define what should be the header and what should be the description
- Now on the header make it div and `flex justify-between`
- import + and - icons
- Now on this div use `onClick` handler which takes the id or the index and sets the `isActive` to the respective `div`
- In the end use `&&` for the description if the `isActive== id` then show `isActive=== x.id && description`
- Also in the + and - use the same logic to show `+` if not opened and `-` if opened
```js
import React, { useState } from 'react'
import { BiPlus, BiMinus } from 'react-icons/bi'

const data = [
  {
    title: 'a',
    description: 'Its a A',
    id: 0,
  },
  {
    title: 'b',
    description: 'Its a B',
    id: 1,
  },
  {
    title: 'c',
    description: 'Its a C',
    id: 2,
  },
]
const Accordian = () => {
  const [isActive, setisActive] = useState(-1)
  function handleclick(id) {
    setisActive(isActive === id ? -1 : id)
  }

  return (
    <div>
      {data.map((x) => {
        return (
          <div
            key={x.id}
            className="flex flex-col gap-y-10 border border-red-50 w-1/2 h-10 mt-2 py-8"
          >
            <div className="bg-red-800 text-black ">
              <div
                className="flex flex-row w-full justify-between"
                onClick={() => handleclick(x.id)}
              >
                <h1>{x.title}</h1>
                {isActive === x.id ? <BiMinus /> : <BiPlus />}
              </div>

              {isActive === x.id && <p>{x.description}</p>}
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Accordian

```


## Navbar
- 