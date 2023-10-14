import { useGetCoursesQuery } from './redux/slices/courseApiSlice'

import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from './components/Navbar/Navbar'
function App() {
  // const { isLoading, isError, isSuccess, data, error } =
  //   useGetCoursesQuery('available')
  // console.log(isLoading, isError, isSuccess, data)

  return (
    <>
      <Header></Header>

      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
