import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from '../../redux/api/userApi'
import { useUserloginMutation } from '../../redux/api/userFirst'
import { setCredentials } from '../../redux/slices/authSlice'
import Logo from '../../assets/Logo.png'
import { useAddToCartMutation } from '../../redux/Cart/Usercart'
import Spinner from '../../utils/Spinner'
import { toast } from 'sonner'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.auth)
  const { role } = useSelector((state) => state.role)
  let loginMutation
  if (role == 'admin') {
    loginMutation = useLoginMutation()
  } else {
    loginMutation = useUserloginMutation()
  }
  const location = useLocation()

  const [login, { isLoading }] = loginMutation
  const [cart] = useAddToCartMutation()
  useEffect(() => {
    if (role === 'user' && location.pathname == '/') {
      cart()
    }
  }, [navigate, userInfo])
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const result = await login({ email, password })
      if (result.error) {
        toast.error(`${result.error.data.message}`)
      }
      localStorage.setItem('token', result.data.token)
      let details = role == 'admin' ? result.data.Admin : result.data.User
      dispatch(setCredentials(details))
      navigate('/')
      toast.success('Succssfully loggedin')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className=" dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] bg-blend-multiply text-gray-800 dark:text-gray-50">
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
              Login to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={submitHandler}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gamil.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
                  required
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
                  <label className="font-light text-gray-500 dark:text-gray-300">
                    i accept the{' '}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      terms and conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none text-center dark:focus:ring-blue-800 w-full"
              >
                {isLoading ? <Spinner /> : 'Sign in'}
              </button>
              <p className="text-sm font-light text-center text-gray-500 dark:text-gray-400">
                New?
                <Link
                  to={'/register'}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
