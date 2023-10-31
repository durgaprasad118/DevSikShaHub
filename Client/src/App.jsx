

import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from './components/Navbar/Navbar'
function App() {
   return (
    <>
      <Header></Header>

      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
