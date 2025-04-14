import React from 'react'

const Btn = ({title , func}) => {
    console.log('btn component rendered');
    
  return (
   <button>{title} {func()}</button>
  )
}

export default React.memo(Btn)