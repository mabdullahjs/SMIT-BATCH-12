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




import React, { useRef, useState } from 'react'

function App() {
  const title = useRef()
  const description = useRef()
  const [todo, setTodo] = useState([]);


  function addTodo(event) {
    event.preventDefault()
    console.log(title.current.value);
    console.log(description.current.value);

    todo.push({
      title: title.current.value,
      description: description.current.value,
      id: Date.now()
    })
    setTodo([...todo])
  }

  const deleteTodo = (index)=>{
    console.log(index);
    todo.splice(index , 1);
    setTodo([...todo])
    
  }
  const editTodo = (index)=>{
    console.log(index);
    const updatedVal = prompt('enter updated value')
    todo[index].title = updatedVal
    setTodo([...todo])
    
  }
  return (
    <>
      <h1>Hello Todo</h1>

      <form onSubmit={addTodo}>
        <input type="text" placeholder='title' ref={title} />
        <br /><br />
        <input type="text" placeholder='description' ref={description} />
        <br /><br />
        <button >add Todo</button>
      </form>
      <div>
        {todo.length > 0 ? todo.map((item , index) => {
          return <div key={item.id} style={{
            border: '1px solid black',
            borderRadius: '20px',
            padding: '20px',
            margin: '20px'
          }}>
            <h3>title: {item.title}</h3>
            <h3>desc: {item.description}</h3><br />
            <button onClick={()=>deleteTodo(index)}>delete</button>
            <button onClick={()=>editTodo(index)}>edit</button>
          </div>
        }) : <h1>No todo found...</h1>}
      </div>
    </>
  )
}

export default App



// usestate
// useref