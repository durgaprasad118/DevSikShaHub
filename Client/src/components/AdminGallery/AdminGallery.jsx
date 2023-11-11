import React from 'react'
import Card from '../CourseCard/Card'
import { useAdminCoursesQuery } from '../../redux/api/adminApi'
import { useGetEnrolledCoursesQuery } from '../../redux/Cart/Usercart'
import { useSelector } from 'react-redux'

const AdminGallery = () => {
  const { role } = useSelector((state) => state.role)
  let enrolledCourses = []
  if (role === 'user') {
    const { data: EnrolledCourses, isSuccess } = useGetEnrolledCoursesQuery()
    if (isSuccess) {
      enrolledCourses = EnrolledCourses.courses
    }
  }
  if (role === 'admin') {
    const { data, isLoading, isError } = useAdminCoursesQuery('allCourses')
    if (!isLoading) {
      enrolledCourses = data?.courses
    }
  }
  return (
    <div className="bg-gray-50 dark:bg-gray-900  py-4 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center w-full gap-4 p-2 xs:p-0">
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
