import React, { useEffect, useState } from 'react'
import { DarkThemeToggle } from 'flowbite-react'
import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logo from '../../assets/Logo.png'
import Dropdown from './Dropdown'
import { FcPlus } from 'react-icons/fc'
import { BsCartPlus } from 'react-icons/bs'
import { useGetCartQuery } from '../../redux/Cart/Usercart'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { userInfo } = useSelector((state) => state.auth)
  const { role } = useSelector((state) => state.role)
  const { data, isLoading, isSuccess } = useGetCartQuery()
  useEffect(()=>{
    Aos.init({duration:'1000'})
  })
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }
  let length = 0
  if (isSuccess && role == 'user' && userInfo) {
    length = data.courses.length
  }
  return (
    <nav className="bg-opacity-40 backdrop-blur-lg bg-gray-100  dark:bg-gray-800 sticky top-0 w-full z-[10000]" data-aos="zoom-in">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center gap-x-1 sm:hidden">
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
              <Link to={'/'}>
                <img
                  className="h-8 w-auto md:block hidden"
                  src={Logo}
                  alt="Your Company"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 ">
                <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    `dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-300 hover:dark:text-white rounded-md px-3 py-2 text-sm font-medium ${
                      isActive && ` border-b-2 border-blue-600 rounded-t-lg`
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to={'/courses'}
                  className={({ isActive }) =>
                    ` dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-300 hover:dark:text-white rounded-md px-3 py-2 text-sm font-medium ${
                      isActive && ` border-b-2 border-blue-600 rounded-t-lg`
                    }`
                  }
                >
                  Courses
                </NavLink>
                <NavLink
                  to={'/about'}
                  className={({ isActive }) =>
                    ` dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-300 hover:dark:text-white rounded-md px-3 py-2 text-sm font-medium ${
                      isActive && ` border-b-2 border-blue-600 rounded-t-lg`
                    }`
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to={'/roadmap'}
                  className={({ isActive }) =>
                    ` dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-300 hover:dark:text-white rounded-md px-3 py-2 text-sm font-medium ${
                      isActive && ` border-b-2 border-blue-600 rounded-t-lg`
                    }`
                  }
                >
                  Roadmaps
                </NavLink>{' '}
                <>
                  <DarkThemeToggle></DarkThemeToggle>
                </>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              {userInfo ? (
                <div className="flex items-center gap-x-3">
                  {role == 'admin' && (
                    <Link
                      to={'/addCourse'}
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md md:text-sm md:px-5 md:py-2.5 px-2 py-1.5 text-xs text-center mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hidden md:block "
                    >
                      Add Course
                    </Link>
                  )}

                  <DarkThemeToggle className="block md:hidden"></DarkThemeToggle>
                  <Link to={'/addCourse'}>
                    {role == 'admin' && (
                      <FcPlus className="text-2xl block md:hidden"></FcPlus>
                    )}
                  </Link>
                  {role === 'user' && (
                    <Link
                      to={'/cart'}
                      className="flex gap-x-1"
                    >
                      {
                        <BsCartPlus className="dark:text-gray-50 text-gray-900 md:text-2xl text-xl font-bold " />
                      }
                      <p className="dark:text-gray-50 text-gray-900 text-lg">{`(${length})`}</p>
                    </Link>
                  )}
                  <Dropdown></Dropdown>
                </div>
              ) : (
                <div className="flex items-center">
                  <DarkThemeToggle className="md:hidden block"></DarkThemeToggle>
                  <Link
                    to={'/role'}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  md:font-medium  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Explore
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2 bg-gray-50 dark:text-gray-200 text-gray-600   dark:bg-gray-800 ">
          <div className="flex items-center justify-center gap-x-1">
            <img
              className="h-8 w-auto"
              src={Logo}
              alt="Your Company"
            />
            <h1
              className="text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold
            "
            >
              DevSikShaHub
            </h1>
          </div>
          <NavLink
            to={'/'}
            onClick={() => toggleMobileMenu()}
            className="bg-gray-900  block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => toggleMobileMenu()}
            to={'/courses'}
            className="hover-bg-gray-700 hover-text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Courses
          </NavLink>
          <NavLink
            to={'/about'}
            onClick={() => toggleMobileMenu()}
            className=" hover-bg-gray-700 hover-text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            About
          </NavLink>
          <NavLink
            to={'/roadmap'}
            onClick={() => toggleMobileMenu()}
            className=" hover-bg-gray-700 hover-text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Roadmaps
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Header
