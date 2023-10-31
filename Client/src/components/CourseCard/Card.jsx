import React from 'react'
import altImage from '../../assets/alt_Image.jpg'
import { FaRupeeSign } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
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
  const { userInfo } = useSelector((state) => state.auth)
  let id;
  
  userInfo? id=userInfo.id:id=1;
  
  return (
    <div className="max-w-sm relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-[1.03] transition-transform duration-300 ease-in-out">
      <Link to={admin==id?  `/course/${_id}`:`/courses`  }>
        <div className="">
          <img
            className="rounded-t-lg w-full h-48"
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
              {title }
            </h1>

            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
              {offer }% off
            </span>
          </div>

          <div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {description || 'loremipsum xyz....'}
            </p>
          </div>

          <div className="flex items-center justify-between border-t py-5">
            <span className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <FaRupeeSign className="inline" /> {price }
            </span>

            {userInfo ? (
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Go to Course
              </button>
            ) : (
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add to cart
              </button>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card
