import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'flowbite-react'
import { setRole } from '../../redux/slices/role'
import { Link } from 'react-router-dom'
const Explore = () => {
  const { role } = useSelector((state) => state.role)
  const dispatch = useDispatch()
  const [a, setA] = useState(role)
  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
      <Button.Group outline>
        <Button
          onClick={() => {
            setA('user')
            dispatch(setRole('user'))
          }}
          gradientMonochrome="info"
        >
          <Link to={'/register'}>
          User
          </Link>
        </Button>
        <Button
          gradientMonochrome="info"
          onClick={() => {
            setA('admin')
            dispatch(setRole('admin'))
          }}
        >
          <Link to={'/register'}>
          Admin
          </Link>
        </Button>
      </Button.Group>
    </div>
  )
}

export default Explore
