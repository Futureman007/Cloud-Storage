import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  filesStack: [],
  currentDir: null,
  isOpenModal: false,
}

export const CloudSlice = createSlice({
  name: 'CloudSlice',
  initialState,
  reducers: {
    setCurrentDir(state, action) {
      state.currentDir = action.payload
    },
    pushToStack(state, action) {
      const date = new Date()
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      const formattedDate = `${year}-${month}-${day}`

      action.payload.date = formattedDate

      if (action.payload.file) {
        action.payload.name = action.payload.file.name
      }

      state.filesStack.push(action.payload)

      toast.success('Объект успешно добавлен!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    },
    popStack(state) {
      state.filesStack.pop()
    },

    setIsOpenModal(state, action) {
      state.isOpenModal = action.payload
    },

    removeFromStack(state, action) {
      state.filesStack = state.filesStack.filter(
        (item) => item.id !== action.payload
      )

      toast.success('Объект успешно удален!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    },
  },
  extraReducers: {},
})

const { actions, reducer } = CloudSlice
export const {
  popStack,
  pushToStack,
  setCurrentDir,
  setIsOpenModal,
  removeFromStack,
} = actions
export default reducer
