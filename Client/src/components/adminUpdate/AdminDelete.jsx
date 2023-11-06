import { Button, Modal } from 'flowbite-react'
import { useState } from 'react'
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import { useDeleteAdminMutation } from '../../redux/api/adminApi'
import { logOut } from '../../redux/slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDeleteUserMutation } from '../../redux/api/userProtectedApi'

function AdminDelete({ id }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { role } = useSelector((state) => state.role)
  let delteWho ;
  if(role =='admin'){
    delteWho= useDeleteAdminMutation()
  }else{
    delteWho = useDeleteUserMutation();
  }
  const [openModal, setOpenModal] = useState(false)
  const [adminDel, { isSuccess }] = delteWho
  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  const hideModal = () => {
    setOpenModal(false)
  }
  if (isSuccess) {
    navigate('/')
    dispatch(logOut(null))
  }
  return (
    <>
      <button
        onClick={toggleModal}
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-full "
        type="button"
      >
        Delete Profile
      </button>
      <Modal
        show={openModal}
        className="z-[20000]"
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete your profile?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={async () => {
                  hideModal()
                  try {
                    const result = await adminDel(id)
                  } catch (error) {
                    console.log(error)
                  }
                }}
              >
                {"Yes, I'm sure"}
              </Button>
              <Button
                color="gray"
                onClick={() => setOpenModal(false)}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
export default AdminDelete
