import React from "react";
import Card from "../CourseCard/Card";
import { useGetAllCoursesQuery } from "../../redux/api/adminApi";

const Gallery = () => {
  const { isLoading, isError, isSuccess, data, error } =
    useGetAllCoursesQuery();
    const courses= data ??[];
  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="py-4 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center w-full gap-4 p-2 xs:p-0">
      {courses.map((x) => {
        return <Card key={x._id} {...x}></Card>;
      })}
    </div>
  );
};

export default Gallery;
