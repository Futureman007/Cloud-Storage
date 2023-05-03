import React, { useEffect } from 'react'
import FileList from './components/FileList'
import Modal from './components/Modal'
import { useSelector } from 'react-redux'
import Header from './components/Header'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const App = () => {
  const { filesStack } = useSelector((state) => state.CloudReducer)

  useEffect(() => {}, [filesStack])

  return (
    <>
      <Header />
      <main className='container mx-auto'>
        <FileList files={filesStack} />
        <Modal />
        <ToastContainer
          position='top-right'
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
      </main>
    </>
  )
}

export default App
