import React from 'react'
import { useParams } from 'react-router-dom';
import CourseEdit from './CourseEdit';
import Card from '../CourseCard/Card';
import { useParticularCourseQuery } from '../../redux/api/adminApi';
const CoursePage = () => {
    let { courseId } = useParams();
    const {data}= useParticularCourseQuery(courseId)
  return (
    <div className='mt-20 flex justify-center w-full items-center flex-col md:flex-row bg-gray-50 dark:bg-gray-900 mt-20 w-full'>
       <CourseEdit courseId={courseId}></CourseEdit>
       <Card {...data}></Card>
    </div>
  )
}

export default CoursePage