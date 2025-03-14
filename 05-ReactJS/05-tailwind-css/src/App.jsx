// import React from 'react'

// const App = () => {
//   return (
//     <>
//       {/* <h1 className='text-center bg-[#f60000] text-white text-xl font-bold cursor-pointer hover:bg-[#00bcff] delay-150'>Hello world</h1> */}
//     </>
//   )
// }

// export default App


import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(true)
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((res) => {
        console.log(res);
        setProducts(res)
      })
      .catch((err) => {
        console.log(err);
        setError(true)
      }).finally(() => {
        // setLoading(false)
      })
  }, [])
  return (
    <>
      <h1 className='text-center'>Hello world</h1>
      {loading && <div className='flex justify-center items-center h-[90vh]'>
        <span className="loading loading-spinner loading-xl text-[purple]"></span>
      </div>}
      {error && <div role="alert" className="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Error! Task failed successfully.</span>
      </div>}

    </>
  )
}

export default App