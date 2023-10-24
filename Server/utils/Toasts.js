import { toast } from 'react-toastify'

export const Sucesstoast = (message) =>
  toast.success(message, {
    position: 'top-right',
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'light',
  })

export const ErrorToast = (message) =>
  toast.error(message, {
    position: 'bottom-right',
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'light',
  })

export const WarnToast = (message) =>
  toast.warn(message, {
    position: 'bottom-right',
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'light',
  })
