import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetParticularCourseQuery } from '../../redux/Cart/Usercart'
const CoursePage = () => {
  let { courseId } = useParams()
  const { data, isLoading, isSuccess } = useGetParticularCourseQuery(courseId)

  if (isLoading) {
    return (
      <section className="bg-gray-200 dark:bg-gray-900 text-gray-200 dark:text-gray-50">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 h-10 w-3/4 mx-auto bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></h1>
        <p className="mb-8 h-8 w-1/2 mx-auto bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-200 bg-gray-300 dark:text-gray-900 dark:bg-gray-700 hover:bg-gray-400 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-900 rounded animate-pulse">
            
            <div className="w-5 h-5 bg-gray-300 rounded-full ml-2 animate-pulse"></div>
          </button>
        </div>
      </div>
    </section>
    
    )
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] bg-blend-multiply text-gray-800 dark:text-gray-50">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-nonemd:text-5xl lg:text-6xl">
          {data?.title}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-600 dark:text-gray-400 lg:text-xl sm:px-16 lg:px-48">
          {data?.description}
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Start the course
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CoursePage
