import React from 'react'
import Card from '../CourseCard/Card'
import { useAdminCoursesQuery } from '../../redux/api/adminApi'
const AdminGallery = () => {
  const { data, isLoading, isError } = useAdminCoursesQuery('allCourses')
   if (isLoading) {
    return <div>Loading....</div>
  }
  
   return (
    <div className="bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] py-4 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center w-full gap-4 p-2 xs:p-0">
      {data?.courses.map((x) => {
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
