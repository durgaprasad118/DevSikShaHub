import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DarkThemeToggle, Flowbite } from 'flowbite-react'
import {
  createRoutesFromElements,
  Route,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import SignUp from './components/Register/Register.jsx'

import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import Gallery from './components/CourseGallery/Gallery.jsx'
import AdminGallery from './components/AdminGallery/AdminGallery.jsx'
import CoursePage from './components/AdminGallery/CoursePage.jsx'
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
      <Route path={'/course/:courseId'} element={<CoursePage/>}>
      </Route>
      <Route
        path="/courses"
        element={<Gallery />}
      ></Route>
      <Route
        path="/register"
        element={<SignUp />}
      ></Route>
    </Route>,
  ),
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
