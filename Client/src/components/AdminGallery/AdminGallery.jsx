import React from 'react'
import Card from '../CourseCard/Card'
import { useAdminCoursesQuery } from '../../redux/api/adminApi'
import { useGetEnrolledCoursesQuery } from '../../redux/Cart/Usercart'
import { useSelector } from 'react-redux'
import CardSkeleton from '../../utils/CardSkeleton'
const AdminGallery = () => {
  const { role } = useSelector((state) => state.role)
  let enrolledCourses
  let cours = ['a', 'b', 'c']
  if (role === 'user') {
    const {
      data: EnrolledCourses,
      isLoading,
      isSuccess,
    } = useGetEnrolledCoursesQuery()
    if (isSuccess) {
      enrolledCourses = EnrolledCourses.courses
    }
    if (isLoading) {
      return (
        <div className="py-4 bg-gray-50 dark:bg-gray-900 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center w-full gap-4 p-2 xs:p-0">
          {cours.map((x) => {
            return <CardSkeleton key={x} />
          })}
        </div>
      )
    }
  }
  if (role === 'admin') {
    const { data, isLoading, isError } = useAdminCoursesQuery('allCourses')
    if (!isLoading) {
      enrolledCourses = data?.courses
    }
    if (isLoading) {
      return (
        <div className="py-4 bg-gray-50 dark:bg-gray-900 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center w-full gap-4 p-2 xs:p-0">
          {cours.map((x) => {
            return <CardSkeleton key={x} />
          })}
        </div>
      )
    }
  }

  return (
    <div className=" dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] bg-blend-multiply text-gray-800 dark:text-gray-50  py-4 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center w-full gap-4 p-2 xs:p-0">
      {enrolledCourses.map((x) => {
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
export default AdminGallery
