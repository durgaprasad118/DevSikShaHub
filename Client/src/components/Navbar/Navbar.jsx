import React, { useState } from 'react'
// import { DarkThemeToggle } from 'flowbite-react'
import { NavLink, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../../assets/Logo.png'
import { useNavigate } from 'react-router-dom'
import Dropdown from './Dropdown'
function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { userInfo } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <nav className="bg-gray-800 sticky top-0 w-full z-[10000]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src={Logo}
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    ` text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                      isActive && ` border-b-2 border-blue-600 rounded-t-lg`
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to={'/courses'}
                  className={({ isActive }) =>
                    ` text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                      isActive && ` border-b-2 border-blue-600 rounded-t-lg`
                    }`
                  }
                >
                  Courses
                </NavLink>
                <NavLink
                  to={'/e'}
                  className={({ isActive }) =>
                    ` text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                      isActive && ` border-b-2 border-blue-600 rounded-t-lg`
                    }`
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to={'/roadmap'}
                  className={({ isActive }) =>
                    ` text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                      isActive && ` border-b-2 border-blue-600 rounded-t-lg`
                    }`
                  }
                >
                  Roadmaps
                </NavLink>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus-ring-2 focus-ring-white focus-ring-offset-2 focus-ring-offset-gray-800"
            ></button>
            <div className="relative ml-3">
              {userInfo ? (
                <div className="flex items-center gap-x-2">
            <Link to={"/addCourse"} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Course</Link>
 
                  <Dropdown></Dropdown>
                </div>
              ) : (
                <>
                  <Link
                    to={'/login'}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Login
                  </Link>
                  <Link
                    to={'/register'}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <NavLink
            to={'/'}
            onClick={() => toggleMobileMenu()}
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => toggleMobileMenu()}
            to={'/courses'}
            className="text-gray-300 hover-bg-gray-700 hover-text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Courses
          </NavLink>
          <NavLink
            onClick={() => toggleMobileMenu()}
            className="text-gray-300 hover-bg-gray-700 hover-text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => toggleMobileMenu()}
            className="text-gray-300 hover-bg-gray-700 hover-text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Roadmaps
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Header
