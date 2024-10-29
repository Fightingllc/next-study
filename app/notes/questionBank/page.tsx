"use client"
import AlterBox from '@/components/alertBox'
import Upload from '@/components/Upload'
import React from 'react'

export default function page() {
  return (
    <div>
        <h2 className='text-3xl'>question page</h2>
        <AlterBox ></AlterBox>
        <Upload />
    </div>
  )
}
