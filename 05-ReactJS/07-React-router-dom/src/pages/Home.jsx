// import React, { useEffect, useState } from 'react'
// import Counter from './components/Counter'

// const App = () => {
//   const [show , setShow] = useState(true)

//   return (
//     <>
//     <button onClick={()=>setShow(!show)}>{show ? 'hide' : 'show'} counter</button>
//     {show && <Counter/>}
//     </>
//   )
// }

// export default App


// import React from 'react'
// import useFetch from './hooks/useFetch'

// const App = () => {


//   const [loading, error, data] = useFetch('https://jsonplaceholder.typicode.com/users')



//   return (
//     <>
//       <div>App</div>
//       {loading && <h1>Loading...</h1>}
//       {error && <h1>Error occured...</h1>}
//       {data && data.map(item => {
//         return <p key={item.id}>{item.name}</p>
//       })}
//     </>
//   )
// }

// export default App


import React from 'react'

const Home = () => {
  return (
    <>
      <h1>Home</h1>
    </>
  )
}

export default Home