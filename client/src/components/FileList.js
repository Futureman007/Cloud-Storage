import React from 'react'
import FileListItem from './FileListItem'

const FileList = ({ files }) => (
  <ul className='border-t border-b divide-y divide-gray-300 bg-gray-200 rounded-lg p-4 h-[80vh] mt-6'>
    {files.map((file) => (
      <FileListItem key={file.id} file={file} />
    ))}
  </ul>
)

export default FileList
