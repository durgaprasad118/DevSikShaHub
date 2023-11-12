import React from "react";
import Card from "../CourseCard/Card";
import { useGetAllCoursesQuery } from "../../redux/api/adminApi";
import CardSkeleton from "../../utils/CardSkeleton";
const Gallery = () => {
  const { isLoading, isError, isSuccess, data, error } =
    useGetAllCoursesQuery();
    const courses= data ??['a','b','c','d','e','f','g'];
  if (isLoading) {
    return (
      <div className="py-4 bg-gray-50 dark:bg-gray-900 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center w-full gap-4 p-2 xs:p-0">
      {courses.map((x) => {
        return <CardSkeleton key={x}/>;
      })}
    </div>
    )
  }

  return (
    <div className="py-4 bg-gray-50 dark:bg-gray-900 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center w-full gap-4 p-2 xs:p-0">
      {courses.map((x) => {
        return <Card key={x._id} {...x}></Card>;
      })}
    </div>
  );
};

export default Gallery;
