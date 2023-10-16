import React from 'react'
import { useParams } from 'react-router-dom';
import { useParticularCourseQuery } from '../../redux/api/adminApi';
const CoursePage = () => {
    let { courseId } = useParams();
    const {data}= useParticularCourseQuery(courseId);
    console.log(data);

  return (
    <div className='mt-20'>
        this is course page
    </div>
  )
}

export default CoursePage