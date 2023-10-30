import React, { useState } from 'react'
import { useAddCourseMutation } from '../../redux/api/adminApi'

function CourseForm() {
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
  if (isLoading) {
    return (
      <h1 className="text-7xl bg-black text-white font-bold mt-36">
        LOADING...............................
      </h1>
    )
  }
  if (isSuccess) {
    return (
      <h1 className="text-7xl bg-black text-white font-bold mt-36">Hehe!!</h1>
    )
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await addCourse(formData)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 mt-20">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
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
