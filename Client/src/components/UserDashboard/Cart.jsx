import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  useGetCartQuery,
  useDeleteItemMutation,
  useEmptyCartMutation,
  useEnrollCourseMutation,
} from '../../redux/Cart/Usercart'
import { Table } from 'flowbite-react'
import { toast } from 'sonner'
const Cart = () => {
  const { data, isLoading,isSuccess } = useGetCartQuery()
  const [deleteItem] = useDeleteItemMutation()
  const [emptyCart] = useEmptyCartMutation()
  const [enrollCourse, { isSuccess: successfullyEnrolled }] =
    useEnrollCourseMutation()
  useEffect(() => {
    if (successfullyEnrolled) {
      toast.success('Successfully enrolled')
      ;(async () => {
        await emptyCart()
      })()
    }
  }, [successfullyEnrolled])
  let cart = []
  if (isSuccess) {
    cart = data.courses
  }
  let price = cart.reduce((ac, cur) => {
    ac += cur.price
    return ac
  }, 0)
  return (
    <div className="w-full  mx-auto dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] bg-blend-multiply text-gray-800 dark:text-gray-50">
      <h1 className="text-lg font-bold py-4 xl:text-xl text-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-50 border-b-2 border-gray-100 dark:border-gray-800">
        Your Cart
      </h1>
      {cart.length > 0 ? (
        <div className="w-full overflow-x-auto px-2 py-2 dark:bg-gray-900 sm:px-10 text-gray-800">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell className="md:text-lg text-md">
                Course Name
              </Table.HeadCell>
              <Table.HeadCell className="md:text-lg text-md">
                Price
              </Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y py-2">
              {cart.map((course) => {
                return (
                  <Table.Row
                    key={course._id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-lg">
                      {course.title}
                    </Table.Cell>
                    <Table.Cell className="text-lg">{course.price}</Table.Cell>
                    <Table.Cell>
                      <button
                        onClick={async () => {
                          try {
                            const result = deleteItem(course._id)
                            // dispatch(setcartLength(-1))
                          } catch (error) {
                            console.log(error)
                          }
                        }}
                        type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 
                         dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        Delete
                      </button>
                    </Table.Cell>
                  </Table.Row>
                )
              })}
            </Table.Body>
          </Table>
        </div>
      ) : (
        <>
          <h1 className="py-4 text-xl text-gray-800 dark:text-gray-50 font-extrabold tracking-tight leading-none md:text-4xl">
            Your cart is empty purchase your desired course{' '}
            {
              <Link
                to={'/courses'}
                className="text-blue-500 underline"
              >
                here
              </Link>
            }
          </h1>
        </>
      )}
      {cart.length > 0 && (
        <div className="w-full py-4 md:px-10 px-2 flex justify-end items-center">
          <div className="bg-white border md:h-40 h-32  flex flex-col justify-center items-center gap-y-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/2 w-full">
            <h1 className="text-left dark:text-gray-50 text-gray-800">{`Grand Total: ${price}`}</h1>
            <button
              onClick={async () => {
                try {
                  const result = enrollCourse()
                } catch (error) {
                  console.log(error)
                }
              }}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-3/4"
            >
              Purchase
            </button>
          </div>
        </div>
      )}
      {cart.length > 0 && (
        <div className="py-4 text-center ">
          <button
            type="button"
            onClick={async () => {
              try {
                const result = emptyCart()
              } catch (error) {
                console.log(error)
              }
            }}
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Empty the Cart
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart
