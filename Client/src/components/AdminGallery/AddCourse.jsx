import React, { useEffect, useState } from 'react'
import { useAddCourseMutation } from '../../redux/api/adminApi'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
function CourseForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageLink: '',
    offer: 0,
    price: 0,
    published: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const newValue = type === 'checkbox' ? checked : value

    setFormData({
      ...formData,
      [name]: newValue,
    })
  }
  const [addCourse, { isLoading, isSuccess, isError }] = useAddCourseMutation()
  useEffect(() => {
    isSuccess && toast.success('Course created Successfully')
  }, [isSuccess])
  if (isLoading) {
    return (
      <div className="py-8 px-4 mx-auto max-w-screen-xl   lg:py-16 grid lg:grid-cols-1 place-items-center gap-8 lg:gap-16  dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] bg-blend-multiply text-gray-800 dark:text-gray-50">
        <div className="max-w-sm animate-pulse h-full">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }

  if (isSuccess) {
    setTimeout(() => {
      navigate('/adminCourses')
    }, 100)
    return (
      <div className="flex items-center bg-gray-50 dark:bg-gray-900 justify-center h-[60vh]">
        <h1 className="md:text-7xl text-xl bg-black text-white font-bold p-4 rounded-lg shadow-lg text-center">
          Course Created Successfully
        </h1>
      </div>
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await addCourse(formData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className=" dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] bg-blend-multiply text-gray-800 dark:text-gray-50  ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-1 place-items-center gap-8 lg:gap-16">
        <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Create a New Course
          </h2>
          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Course Title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Course Description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="imageLink"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Image Link
              </label>
              <input
                type="text"
                name="imageLink"
                id="imageLink"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Image Link"
                value={formData.imageLink}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="offer"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Offer (Number)
              </label>
              <input
                type="number"
                name="offer"
                id="offer"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="0"
                value={formData.offer}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="0"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-start">
              <input
                id="published"
                name="published"
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                checked={formData.published}
                onChange={handleChange}
              />
              <label
                htmlFor="published"
                className="ml-3 font-medium text-gray-500 dark:text-gray-400"
              >
                Published
              </label>
            </div>
            <button
              type="submit"
              className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create Course
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CourseForm
