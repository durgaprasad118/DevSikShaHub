import React from 'react'
import Card from '../CourseCard/Card'
import { useGetCoursesQuery } from '../../redux/slices/courseApiSlice'

const Gallery = () => {
  const { isLoading, isError, isSuccess, data, error } =
    useGetCoursesQuery('available')
  console.log(isLoading, isError, isSuccess, data)
  if (isLoading) {
    return <div>Loading....</div>
  }

  return (
    <div className="mt-16 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center w-full gap-4 p-2 xs:p-0">
      {data.map((x) => {
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

// import { useGetCoursesQuery } from './redux/slices/courseApiSlice'

// function App() {
//   const { isLoading, isError, isSuccess, data, error } =
//     useGetCoursesQuery('available')
//   console.log(isLoading, isError, isSuccess, data)

//   return (
//     <>
//       {error ? (
//         <> Uh no There was an errror!</>
//       ) : isLoading ? (
//         <>Loading...</>
//       ) : data ? (
//         <>{JSON.stringify(data)}</>
//       ) : null}
//     </>
//   )
// }

// export default App
