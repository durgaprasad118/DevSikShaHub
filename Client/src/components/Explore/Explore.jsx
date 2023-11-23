import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRole } from '../../redux/slices/role'
import { Link } from 'react-router-dom'
const Explore = () => {
  const { role } = useSelector((state) => state.role)
  const dispatch = useDispatch()
  const [a, setA] = useState(role)
  return (
    <div className=" dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] bg-blend-multiply text-gray-800 dark:text-gray-50 h-[66vh] flex flex-col items-center justify-center">
      <h1 className=" text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl  dark:text-white md:translate-y-20 mt-8 mb-4 md:mt-0 md:mb-0">
        Choose your<span className="text-blue-600"> Role</span>
      </h1>
      <div className="flex items-center justify-center w-full px-2 md:px-0 h-full md:gap-x-2 gap-y-4 md:flex-row flex-col gap-y-2">
        <Link
          to="/register"
          onClick={() => {
            setA('user')
            dispatch(setRole('user'))
          }}
        >
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-300">
            <div>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                User
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              You can purchase courses and have access to all the materials
              provided by the instructor.
            </p>
            <div className="inline-flex items-center text-blue-600 hover:underline">
              See our guideline
              <svg
                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </div>
          </div>
        </Link>
        <Link
          to="/register"
          onClick={() => {
            setA('admin')
            dispatch(setRole('admin'))
          }}
        >
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-300">
            <div>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Admin
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              You are responsible for creating quality courses of your own niche
              and join our team and make teaching fun.
            </p>
            <div className="inline-flex items-center text-blue-600 hover:underline">
              See our guideline
              <svg
                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Explore
