import React from 'react'

import toast, { Toaster } from 'react-hot-toast'

const notify = () => toast('Here is your toast.')

export const Login = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  )
}
