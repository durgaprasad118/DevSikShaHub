import React, { useState, useEffect } from 'react'
import { toast } from 'sonner'
import {
  useEditCourseMutation,
  useParticularCourseQuery,
} from '../../redux/api/adminApi'
import DeleteModal from './DeleteModal'
import Spinner from '../../utils/Spinner'
function CourseEdit({ courseId }) {
  const { data, isSuccess } = useParticularCourseQuery(courseId)
  const initialFormData = {
    title: '',
    description: '',
    imageLink: '',
    offer: 0,
    price: 0,
    published: false,
  }

  const [formData, setFormData] = useState(initialFormData)
  useEffect(() => {
    if (isSuccess) {
      setFormData({
        title: data.title,
        description: data.description,
        imageLink: data.imageLink,
        offer: data.offer,
        price: data.price,
        published: data.published,
      })
    }
  }, [data, isSuccess])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const newValue = type === 'checkbox' ? checked : value

    setFormData({
      ...formData,
      [name]: newValue,
    })
  }
  const [editCourse, { isLoading, isError, isSuccess: updatedC }] =
    useEditCourseMutation()
  useEffect(() => {
    updatedC && toast.success('Course updated Successfully')
  }, [updatedC])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await editCourse({
        formData,
        courseId,
      })
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="py-8 px-4 md:w-1/2 w-full">
      <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Update Course
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
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="block text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800"
            >
              {isLoading ? <Spinner /> : 'Update Course'}
            </button>
            <DeleteModal courseId={courseId}></DeleteModal>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CourseEdit
