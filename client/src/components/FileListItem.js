import React from 'react'
import trashIcon from '../assets/img/trash-bin.png'
import { useDispatch } from 'react-redux'
import { removeFromStack } from '../redux/reducers/CloudSlice'

const FolderIcon = () => (
  <svg
    className='w-6 h-6'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path d='M20 6H10l-2-2H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2z' />
  </svg>
)

const FileIcon = () => (
  <svg
    className='w-6 h-6'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path d='M4 19.5A2.5 2.5 0 016.5 17H19' />
    <path d='M4 4h16v16H4V4z' />
  </svg>
)

const FileListItem = ({ file }) => {
  const dispatch = useDispatch()

  return (
    <li className='flex items-center py-2 w-[90%] mx-auto'>
      {file.isFolder ? <FolderIcon /> : <FileIcon />}
      <div className='flex items-center justify-between w-full'>
        <span className='ml-3'>{file.name}</span>

        <div className='flex items-center'>
          <span className='mr-4'>{file.date}</span>
          <div
            className='cursor-pointer'
            onClick={() => dispatch(removeFromStack(file.id))}
          >
            <img
              className='w-[30px] h-[30px]'
              src={trashIcon}
              alt='delete obj'
            />
          </div>
        </div>
      </div>
    </li>
  )
}

export default FileListItem
