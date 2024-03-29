import React from 'react'
import { useDispatch } from 'react-redux'
import { setIsOpenModal } from '../redux/reducers/CloudSlice'

const Header = () => {
  const dispatch = useDispatch()

  return (
    <header>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <a href='https://flowbite.com' className='flex items-center'>
            <img
              src='https://flowbite.com/docs/images/logo.svg'
              className='mr-3 h-6 sm:h-9'
              alt='Flowbite Logo'
            />
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
              Cloud
            </span>
          </a>
          <div className='flex items-center lg:order-2'>
            {/* Кнопка для открытия модального окна */}
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={() => dispatch(setIsOpenModal(true))}
            >
              Загрузить объект
            </button>
          </div>
          <div
            className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'
            id='mobile-menu-2'
          >
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
              <li>
                <a
                  href='#'
                  className='block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white'
                  aria-current='page'
                >
                  Диск
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Профиль
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
