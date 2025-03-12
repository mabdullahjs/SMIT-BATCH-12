// import React, { useEffect, useState } from 'react'

// function App() {
//   const [users , setUsers] = useState(null);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(res => {
//         console.log(res)
//         setUsers(res)
//       })
//       .catch(err => {
//         console.log(err);

//       })
//   }, [])
//   return (
//     <>
//       <h1>Hello world</h1>
//       {/* {users && users.map(item => {
//         return <p key={item.id}>{item.name}</p>
//       })} */}

//       {users ? users.map(item => {
//         return <p key={item.id}>{item.name}</p>
//       }) : <h1>Loading...</h1>}
//     </>
//   )
// }

// export default App


import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState(null)
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    try {
      const response = await axios('https://jsonplaceholder.typicode.com/users')
      console.log(response.data);
      setUsers(response.data)
    } catch (error) {
      console.log('error ===> ', error);
      setError(true)

    } finally {
      console.log("finally chal rha ha");
      setLoading(false)

    }
  }
  return (
    <>
      <h1>Hello world</h1>
      {loading && <h1>Loading...</h1>}
      {users && users.map(item => {
        return <p key={item.id}>{item.name}</p>
      })}

      {error && <h1>Error occured</h1>}

    </>
  )
}

export default App