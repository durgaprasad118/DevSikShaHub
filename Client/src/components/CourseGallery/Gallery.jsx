import React from 'react'
import Card from '../CourseCard/Card'
import { useGetAllCoursesQuery } from '../../redux/api/adminApi'
import CardSkeleton from '../../utils/CardSkeleton'
import { useSelector } from 'react-redux'

const Gallery = () => {
  const { isLoading, isError, isSuccess, data, error } = useGetAllCoursesQuery()
  const courses = data ?? ['a', 'b', 'c', 'd', 'e', 'f', 'g','h','i']
  const AllCourses = useSelector(state => state.allCourses);
  if (isLoading) {
    return (
      <div className="py-4 bg-gray-50 dark:bg-gray-900 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center w-full gap-4 p-2 xs:p-0">
        {courses.map((x) => {
          return <CardSkeleton key={x} />
        })}
      </div>
    )
  }

  return (
    <div className="py-4 min-h-[70dvh]  dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] bg-blend-multiply text-gray-800 dark:text-gray-50 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center w-full gap-4 p-2 xs:p-0">
      {courses.map((x) => {
        if (x?.published)
          return (
            <Card
              key={x._id}
              {...x}
            ></Card>
          )
      })}
    </div>
  )
}

export default Gallery
