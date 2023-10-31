import React from 'react'
import { useParams } from 'react-router-dom';
import CourseEdit from './CourseEdit';
import Card from '../CourseCard/Card';
import { useParticularCourseQuery } from '../../redux/api/adminApi';
const CoursePage = () => {
    let { courseId } = useParams();
    const {data}= useParticularCourseQuery(courseId)
  return (
    <div className=' flex justify-between md:px-24 w-full items-center  flex-col md:flex-row bg-gray-50 dark:bg-gray-900 py-4 md:py-0 w-full'>
       <Card {...data}></Card>
       <CourseEdit courseId={courseId}></CourseEdit>
    </div>
  )
}

export default CoursePage