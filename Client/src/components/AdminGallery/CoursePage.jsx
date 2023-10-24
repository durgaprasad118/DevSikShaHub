import React from 'react'
import { useParams } from 'react-router-dom';
import { useParticularCourseQuery } from '../../redux/api/adminApi';
import CourseEdit from './CourseEdit';
import DeleteModal from './DeleteModal';
const CoursePage = () => {
    let { courseId } = useParams();
  return (
    <div className='mt-20'>
       <CourseEdit courseId={courseId}></CourseEdit>
       <DeleteModal courseId={courseId}></DeleteModal>
    </div>
  )
}

export default CoursePage