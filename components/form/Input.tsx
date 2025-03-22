"use client";
import React from 'react'
import { useState } from 'react'

export default function Input({ id="defaul-id" }) {
    const [value, setValue] = useState("")
  return (
    <div className='w-full p-0'>
        <input 
            type="text"
            id={id}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="shadow-xs shadow-blue-500 w-full ml-2 h-8 outline-none rounded-md pl-2 bg-blue-200"
        />
    </div>
  )
}
