import { Board } from '@/components/Board'
import DisableButton from '@/components/DisableButton'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1>This is the demo page</h1>
      <div className='flex justify-center '>
        <div className='border-solid border-2 border-indigo-600 p-2 rounded-md ml-1'><Board /></div>
        <div className='border-solid border-2 border-pink-400 p-2 rounded-md ml-2'>
          <h3>动态显示禁用按钮</h3>
          <DisableButton />
        </div>
      </div>
      
      
    </div>
  )
}
