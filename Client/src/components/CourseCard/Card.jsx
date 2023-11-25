import React, { useState } from 'react'
import { FaRupeeSign } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import altImage from '../../assets/alt_Image.jpg'
import { useGetAdminNameQuery } from '../../redux/api/adminApi'
import { useAddToCartMutation } from '../../redux/Cart/Usercart'
import { useGetEnrolledCoursesQuery } from '../../redux/Cart/Usercart'
const Card = ({
  title,
  description,
  published,
  imageLink,
  offer,
  price,
  admin,
  _id,
}) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const Specificlocation = (location.pathname = '/adminCourses')
  const { data, isSuccess } = useGetAdminNameQuery(`${admin}`)
  const [addtoCart, { isLoading }] = useAddToCartMutation()
  const { data: enrolled, isSuccess: gotIt } = useGetEnrolledCoursesQuery()
  let courseEnrolled = false
  const { role } = useSelector((state) => state.role)
  if (role === 'user') {
    if (gotIt) {
      let answer = enrolled.courses.find((x) => x._id === _id)
      answer && (courseEnrolled = true)
    }
  }
  let adminName
  if (isSuccess) {
    adminName = data.adminName
  }
  const { userInfo } = useSelector((state) => state.auth)
  let id = userInfo ? userInfo.id : 1
  return (
    <div className="w-80 h-96">
      <div className="max-w-sm h-full relative bg-gray-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 text-gray-700 dark:text-gray-400  dark:border-gray-700 hover:scale-[1.03] transition-transform duration-300 ease-in-out">
        <div>
          <div className="">
            <img
              className="rounded-t-lg object-cover w-full h-48"
              src={imageLink || altImage}
              alt="Course Image"
              loading="lazy"
            />
            {published ? (
              <span className="absolute top-[150px] right-0 bg-green-100 text-green-800 text-sm md:text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                Published
              </span>
            ) : (
              <span className="absolute  top-[150px] right-0  bg-red-100 text-red-800 text-sm md:text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
                Not Published
              </span>
            )}
          </div>

          <div className="p-2">
            <div className="flex items-center gap-x-2">
              <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h1>
            </div>

            <div className="border-b dark:border-gray-400  border-gray-300">
              <p className="mb-3 line-clamp-1 font-normal text-gray-400 dark:text-gray-400">
                {description}
              </p>
            </div>

            <p className="text-gray-600 text-sm pt-1 pl-1 text-left  dark:text-gray-300">
              {' '}
              {adminName}
            </p>
            <div className="flex items-center justify-between  py-4 ">
              <div className="flex ">
                <span className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <FaRupeeSign className="inline" /> {price}
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs  mr-2 px-2.5 py-0.5 flex items-center rounded-full dark:bg-blue-900 dark:text-blue-300">
                  {offer}% off
                </span>
              </div>
              {role == 'admin' && userInfo ? (
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <Link to={admin == id ? `/course/${_id}` : `/courses`}>
                    Go to Course
                  </Link>
                </button>
              ) : courseEnrolled ? (
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <Link to={`/usercourse/${_id}`}>Go to Course</Link>
                </button>
              ) : (
                <Link
                  onClick={async () => {
                    try {
                      const result = await addtoCart(_id)
                    } catch (error) {
                      console.log(error)
                    }
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
