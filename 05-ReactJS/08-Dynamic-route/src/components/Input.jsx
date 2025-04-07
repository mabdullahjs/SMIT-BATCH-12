import React, { useState } from 'react'

const Input = ({placeholder , func , state}) => {
    
    const onChangeFunc = (e)=>{
        func(e.target.value)
    }
        
  return (
    <input type="text" onChange={onChangeFunc} placeholder={placeholder} className="input" value={state} />
  )
}

export default Input