import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { DarkThemeToggle, Flowbite } from 'flowbite-react'
import {
  createRoutesFromElements,
  Route,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Cart from './components/UserDashboard/Cart.jsx'
import Login from './components/Login/Login.jsx'
import SignUp from './components/Register/Register.jsx'
import UserCOursePage from './components/UserDashboard/CoursePage.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import Gallery from './components/CourseGallery/Gallery.jsx'
import AdminGallery from './components/AdminGallery/AdminGallery.jsx'
import CoursePage from './components/AdminGallery/CoursePage.jsx'
import CourseForm from './components/AdminGallery/AddCourse.jsx'
import VerticalTimeline from './components/Roadmaps/Roadmaps.jsx'
import { AdminUpdate } from './components/adminUpdate/AdminUpdate.jsx'
import Explore from './components/Explore/Explore.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
    >
      <Route
        path="/"
        element={<Home />}
      ></Route>
      <Route
        path="/login"
        element={<Login />}
      ></Route>
      <Route
        path="/adminCourses"
        element={<AdminGallery />}
      ></Route>
      <Route
        path={'/course/:courseId'}
        element={<CoursePage />}
      ></Route>
      <Route
        path="/courses"
        element={<Gallery />}
      ></Route>
      <Route
        path="/addCourse"
        element={<CourseForm />}
      ></Route>
      <Route
        path="/register"
        element={<SignUp />}
      ></Route>
      <Route
        path="/roadmap"
        element={<VerticalTimeline />}
      ></Route>
      <Route
        path="/role"
        element={<Explore />}
      ></Route>
      <Route
        path="/settings"
        element={<AdminUpdate />}
      ></Route>
      <Route
      path='/usercourse/:courseId'
      element={<UserCOursePage/>}
      >
      </Route>
      <Route path='/cart'
      element={<Cart/>}
      >

      </Route>
    </Route>,
  ),
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Flowbite>
        <RouterProvider router={router} />
        <ToastContainer></ToastContainer>
      </Flowbite>
    </Provider>
  </React.StrictMode>,
)
