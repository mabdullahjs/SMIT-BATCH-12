// import { useState } from "react"

// function App() {
//   const [username, setUsername] = useState('Abdullah')
//   return (
//     <>
//       <h1>Hello {username}</h1>
//       <button onClick={() => setUsername('Usman')}>change Name</button>
//     </>
//   )
// }

// export default App



// import React, { useState } from 'react'

// function App() {
//   const [title, setTitle] = useState('')
//   const [description, setDescription] = useState('')

//   function addTodo (event){
//     event.preventDefault()
//     console.log(title);
//     console.log(description);


//     setTitle('')
//     setDescription('')

//   }
//   return (
//     <>
//       <h1>Hello Todo</h1>

//       <form>
//         <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='title' /> 
//         <br /><br />
//         <input onChange={e => setDescription(e.target.value)} value={description} type="text" placeholder='description' />
//         <br /><br />
//         <button onClick={addTodo}>add Todo</button>
//         <p>title: {title}</p>
//         <p>description: {description}</p>
//       </form>
//     </>
//   )
// }

// export default App







// usestate
// useref