import { Fragment, useState } from 'react'
import { pushToStack, setIsOpenModal } from '../redux/reducers/CloudSlice'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

const Modal = () => {
  const [name, setName] = useState('')
  const [isFolder, setIsFolder] = useState(false)
  const [file, setFile] = useState('')
  const dispatch = useDispatch()
  const { isOpenModal } = useSelector((state) => state.CloudReducer)

  const handleSubmit = (event) => {
    event.preventDefault()
    // Добавьте код обработки отправки формы
    const newObject = {}

    newObject.id = uuidv4()
    newObject.name = name
    newObject.isFolder = isFolder
    newObject.file = file

    dispatch(pushToStack(newObject))

    dispatch(setIsOpenModal(false))
    setName('')
    setIsFolder(false)
    setFile('')
  }

  return (
    <Fragment>
      {/* Модальное окно */}
      {isOpenModal && (
        <div className='fixed z-10 inset-0 overflow-y-auto bg-gray-200'>
          <div className='flex items-center justify-center min-h-screen'>
            <div className='bg-white rounded-lg overflow-hidden min-w-[370px]'>
              {/* Заголовок модального окна */}
              <div className='bg-gray-100 px-6 py-4'>
                <div className='text-xl font-bold'>Загрузить объект</div>
              </div>

              {/* Форма */}
              <form className='p-6' onSubmit={handleSubmit}>
                <div className='mb-4'>
                  <label
                    className='block text-gray-700 font-bold mb-2'
                    htmlFor='name'
                  >
                    Название
                  </label>
                  <input
                    className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='name'
                    type='text'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className='mb-4'>
                  <label
                    className='block text-gray-700 font-bold mb-2'
                    htmlFor='isFolder'
                  >
                    Это папка?
                  </label>
                  <input
                    className='mr-2 leading-tight'
                    id='isFolder'
                    type='checkbox'
                    checked={isFolder}
                    onChange={(event) => setIsFolder(event.target.checked)}
                  />
                </div>
                {!isFolder && (
                  <div className='mb-4'>
                    <label
                      className='block text-gray-700 font-bold mb-2'
                      htmlFor='file'
                    >
                      Файл
                    </label>
                    <input
                      className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      id='file'
                      type='file'
                      onChange={(event) => setFile(event.target.files[0])}
                    />
                  </div>
                )}

                <div className='flex items-center justify-end'>
                  {/* Кнопка для закрытия модального окна */}
                  <button
                    className='bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded mr-2 transition-all'
                    onClick={() => dispatch(setIsOpenModal(false))}
                  >
                    Отмена
                  </button>

                  {/* Кнопка для отправки формы */}
                  <button
                    disabled={!name}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-600 transition-all'
                    type='submit'
                  >
                    Сохранить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default Modal
