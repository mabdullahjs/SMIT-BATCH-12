// import React, { useState } from 'react'


// function App() {
//   // let username = "abdullah";
//   const [username , setUsername] = useState('abdullah')

//   function changeUsername (){
//     // username = "usman"
//     setUsername('Usman')

//   }
//   return (
//     <>
//       <h1>Hello world {username}</h1>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti odio corrupti et beatae dignissimos amet quod libero temporibus perspiciatis ipsum nisi esse unde at in illum ad, nihil vero atque! {username}</p>
//       <div>
//         <address>{username}</address>
//       </div>
//       <button onClick={changeUsername}>change Username</button>
//     </>
//   )
// }

// export default App



// import { useState } from "react"


// function App() {

//   const [counter, setCounter] = useState(0);

//   function addCounter() {
//     console.log('counter added')
//     setCounter(counter + 1)
//   }

//   function lessCounter() {
//     // counter < 1 ? alert('kiya kr rha ha bhai') :
//     //   setCounter(counter - 1)

//     if(counter < 1){
//       alert('kiya kr rha ha bhai')
//       return 
//     }
//     setCounter(counter - 1)
//   }

//   return (
//     <>
//       <h1>Counter</h1>
//       <button onClick={addCounter}>Plus</button>
//       <h1>{counter}</h1>
//       <button onClick={lessCounter}>Minus</button>
//     </>
//   )
// }

// export default App




import React, { useState } from 'react'

function App() {
  const [title , setTitle] = useState('');
  const [description , setDescription] = useState('');

  function addTodo(event){
    event.preventDefault();
    console.log(description);
    console.log(title);
    setTitle('')
    setDescription('')
    
  }
  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input onChange={(e)=> setTitle(e.target.value)} type="text" value={title} placeholder='enter title' /> <br /><br />
        <input onChange={(e)=> setDescription(e.target.value)} value={description} type="text" placeholder='enter description' /> <br /><br />
        <button>Add Todo</button>
      </form>

      {/* <button onClick={()=> greetUser('abdullah')}>click</button> */}
    </>
  )
}

export default App

// component
// usestate (Hook)
// styling in jsx
// React Fragments
