// // import React, { useMemo, useState } from 'react'

// // const arr = new Array(10_000_000).fill(0).map(() => Math.floor(Math.random() * 100_000)).map((item, index) => {
// //   return {
// //     index,
// //     isMagical: index === 9_999_999
// //   }
// // })

// // const App = () => {
// //   const [numbers, setNumbers] = useState(arr);
// //   const [counter , setCounter] = useState(0)

// //   // const findNumberIndex = () => {
// //   //   console.log('expensive calculation');

// //   //   return numbers.find(item => item.isMagical)
// //   // }

// //   const findNumberIndex = useMemo(() => {
// //     console.log('expensive calculation');

// //     return numbers.find(item => item.isMagical)
// //   }, [])

// //   return (
// //     <>
// //     <h1>Hello world {findNumberIndex.index} counter {counter}</h1>
// //     <button onClick={()=>setCounter(counter + 1)}>add Counter</button>
// //     </>
// //   )
// // }

// // export default App


// import React, { useCallback, useState } from 'react'
// import Btn from './components/Btn'

// const App = () => {
//   const [counter, setCounter] = useState(0)

//   // function testingFunc() {
//   //   return 'hello' + counter
//   // }

//   const testingFunc = useCallback(
//     () => {
//       return 'hello' + counter
//     },
//     [],
//   )
//   return (
//     <>
//       <h1>Hello world {counter}</h1>
//       <Btn title={'hello world'} func={testingFunc} />
//       <button onClick={() => setCounter(counter + 1)}>add Counter</button>
//     </>
//   )
// }

// export default App


import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App