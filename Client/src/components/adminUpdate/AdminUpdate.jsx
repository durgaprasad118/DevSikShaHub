import Logo from '../../assets/Logo.png'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useUpdateAdminDetailsMutation } from '../../redux/api/adminApi'
import { useUpdateUserDetailsMutation } from '../../redux/api/userProtectedApi'
import {toast} from "sonner"
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../redux/slices/authSlice'
import AdminDelete from './AdminDelete'
import { Button, Tooltip } from 'flowbite-react'
import '../../index.css'
export const AdminUpdate = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const { role } = useSelector((state) => state.role)
  const navigate = useNavigate()
  const { name: Admin } = userInfo
  const { id } = userInfo
  const dispatch = useDispatch()
  const [name, setName] = useState(Admin)
  const [password, setPassword] = useState('')

  let UPdateMuatation
  if (role == 'admin') {
    UPdateMuatation = useUpdateAdminDetailsMutation()
  } else {
    UPdateMuatation = useUpdateUserDetailsMutation()
  }
  const [detailsUpdate] = UPdateMuatation
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const result = await detailsUpdate({ name, password })
      if (result.error) {
        toast.error(`${result.error.data.message}`)
      } else {
        navigate('/')
        setTimeout(() => {
          toast.success('Please login Again')
        }, 500)
        dispatch(logOut(null))
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className="dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] bg-blend-multiply text-gray-800 dark:text-gray-50">
      <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src={Logo}
            alt="logo"
          />
          DevSikShaHub
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Update your Details
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={submitHandler}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{' '}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <div>
                <Tooltip content="Clicking this makes you logOut">
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
                  >
                    Update Detials
                  </button>
                </Tooltip>
              </div>
            </form>
            <hr />
            <AdminDelete id={id}></AdminDelete>
          </div>
        </div>
      </div>
    </section>
  )
}
