// import React, { useState } from 'react'
// import Input from './components/Input'

// const App = () => {
//   const [input , setInput] = useState('') 

//   const submitVal = ()=>{
//     console.log('func called' , input);
//     setInput('')
//   }

//   const getValueFromChildrenComponent = (val)=>{
//     setInput(val)
//   }
//   return (
//     <>
//       <h1 className="text-center">hello world</h1>
//       <Input placeholder={'enter your name'} func={getValueFromChildrenComponent} state={input}/> <br /><br />
//       <button onClick={submitVal} className='btn btn-primary'>Submit</button>
//     </>

//   )
// }

// export default App


// // parent to children data bhejna ka liya props ka istemaal krta hain
// // children to parent data kaisa bhejo?



import React from 'react'

const Home = () => {
  return (
    <div className='flex h-[90vh] justify-center items-center'>
      <h1 className='text-3xl font-bold'>Home</h1>
    </div>
  )
}

export default Home