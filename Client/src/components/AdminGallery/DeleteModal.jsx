import React, { useState } from 'react'
import { useDeleteCourseMutation } from '../../redux/api/adminApi'
import { useNavigate } from 'react-router-dom'
export default function DeleteModal({ courseId }) {
  const navigate = useNavigate()
  const [deleteCourse, { isSuccess }] = useDeleteCourseMutation()

  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  const hideModal = () => {
    setIsModalVisible(false)
  }
  isSuccess && navigate('/adminCourses')
  return (
    <div className="relative z-[89345]">
      <button
        onClick={toggleModal}
        className="block text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800"
        type="button"
      >
        Delete Course
      </button>

      {isModalVisible && (
        <div
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark-bg-gray-700">
              <button
                type="button"
                onClick={hideModal}
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover-bg-gray-200 hover-text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark-hover-bg-gray-600 dark-hover-text-white"
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <svg
                  className="mx-auto mb-4 text-gray-400 w-12 h-12 dark-text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark-text-gray-400">
                  Are you sure you want to delete this Course?
                </h3>
                <button
                  onClick={async () => {
                    hideModal()
                    try {
                      const result = await deleteCourse(courseId)

                      console.log(result)
                    } catch (error) {
                      console.log(error)
                    }
                  }}
                  type="button"
                  className="text-white bg-red-600 hover-bg-red-800 focus-ring-4 focus-outline-none focus-ring-red-300 dark-focus-ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Yes, I'm sure
                </button>
                <button
                  onClick={hideModal}
                  type="button"
                  className="text-gray-500 bg-white hover-bg-gray-100 focus-ring-4 focus-outline-none focus-ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover-text-gray-900 focus-z-10 dark-bg-gray-700 dark-text-gray-300 dark-border-gray-500 dark-hover-text-white dark-hover-bg-gray-600 dark-focus-ring-gray-600"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
