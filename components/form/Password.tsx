import React from 'react'

export default function Password({id="defaul-id"}) {
    const [value, setValue] = React.useState('')
  return (
    <div>
        <input 
            type="password"
            value={value}
            id={id}
            onChange={(e) => setValue(e.target.value)}
            className="shadow-xs shadow-blue-500 w-full ml-2 h-8 outline-none rounded-md pl-2 bg-blue-200"
        />
    </div>
  )
}
