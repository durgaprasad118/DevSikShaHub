import React from 'react'
import { Link } from 'react-router-dom'
import {
  useGetCartQuery,
  useDeleteItemMutation,
  useEmptyCartMutation,
} from '../../redux/Cart/Usercart'
import { Table } from 'flowbite-react'
const Cart = () => {
  const { data, isLoading } = useGetCartQuery()
  const [deleteItem] = useDeleteItemMutation()
  const [emptyCart] = useEmptyCartMutation()
  let cart = []
  if (!isLoading) {
    cart = data.courses
  }
  let price = cart.reduce((ac, cur) => {
    ac += cur.price
    return ac
  }, 0)
  return (
    <div className="w-full  mx-auto  dark:bg-gray-900  text-gray-800">
      <h1 className="text-lg font-bold py-4 xl:text-xl text-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-50">
        Your Cart
      </h1>
      {cart.length > 0 ? (
        <div className="w-full dark:bg-gray-900 px-0 md:px-10 text-gray-800">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell></Table.HeadCell>
              <Table.HeadCell>Course Name</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>Offer</Table.HeadCell>
              <Table.HeadCell>Teacher</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
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
                    <Table.Cell></Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {course.title}
                    </Table.Cell>
                    <Table.Cell>{course.price}</Table.Cell>
                    <Table.Cell>{course.offer}</Table.Cell>
                    <Table.Cell>{'hola'}</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell>
                      <button
                        onClick={async () => {
                          try {
                            const result = deleteItem(course._id)
                          } catch (error) {
                            console.log(error)
                          }
                        }}
                        type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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
          <h1 className="mb-4 text-xl font-extrabold tracking-tight leading-none md:text-4xl">
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
      <div className="w-full py-4 md:px-10 px-0 flex justify-end items-center">
        <div className='bg-white border h-40  flex flex-col justify-center items-center gap-y-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-1/2'>
              <h1 className='text-left' >{`Grand Total: ${price}`}</h1>
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-3/4">Purchase</button>
        </div>
      </div>
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
    </div>
  )
}

export default Cart
