import React, { useState } from 'react'
import Profile from '../../assets/Profile.png'
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../../redux/slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'
const Dropdown = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { userInfo } = useSelector((state) => state.auth)

  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const closeDropdown = () => {
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block text-left">
      <img
        src={Profile}
        alt="Dropdown button"
        onClick={toggleDropdown}
        className={`cursor-pointer h-14 w-14`}
      />

      {isOpen && (
        <div className="z-10 absolute right-0 mt-2 py-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
          <ul
            className="text-sm text-gray-700 dark:text-gray-200 text-center"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                {userInfo.name}
              </a>
            </li>
            <li></li>
            <li>
              <Link
                to={'/adminCourses'}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={closeDropdown}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to={'/settings'}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={closeDropdown}
              >
                Settings
              </Link>
            </li>

            <li>
              <a
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover-text-white"
                onClick={() => {
                  dispatch(logOut(null))
                  closeDropdown()
                  navigate('/')
                }}
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown
