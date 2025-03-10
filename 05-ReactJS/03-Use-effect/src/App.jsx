// // import React, { useState } from 'react'
// // import Card from './components/Card'



// // function App() {
// //   const [show , setShow] = useState(true);
// //   return (
// //     <>
// //       <h1>Hello world</h1>
// //       <button onClick={()=> setShow(!show)}>{show ? 'hide' : 'show'}</button>
// //       {/* <Btn title="add Todo" bgColor="purple" color="lightblue"/>
// //       <Btn title="Click" bgColor="green"/>
// //       <Btn title="delete todo"/>
// //       <Btn title="edit todo"/> */}

// //       {show ? <div>
// //         <Card title='Banyaan' description='stretchable banyaan with good quality cotton fabric' image='https://static-01.daraz.pk/p/c3f46e2edf998e0212d838505a90ab75.jpg' />

// //         <Card title='Lamp' description='good quality light with taiz roshni with long live' image='https://imagescdn.simons.ca/images/20992-24101256-11-A1_2/porous-concrete-table-lamp.jpg?__=3' />
// //       </div> : null}
// //     </>
// //   )
// // }

// // export default App



// // // component lifecycle image https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM41d6h_1DiRyfc1dkFOwKtxvgymj6-6TPnQ&s













// import React, { useState } from 'react'
// import Card from './components/Card'
// import Btn from './components/Btn'

// function App() {
//   const [show , setShow] = useState(false);

//   function hideContainer (){
//     setShow(!show)
//   }
//   return (
//     <>
//       <div>App</div>
//       <Btn func={hideContainer} title={!show ? 'show' : 'hide'}  bgcolor="red" color='white'  width="20%" padding="20px"/>

//     {show && <Card title='Lamp' description='good quality light with taiz roshni with long live' image='https://imagescdn.simons.ca/images/20992-24101256-11-A1_2/porous-concrete-table-lamp.jpg?__=3' /> }



//     </>
//   )
// }

// export default App



// // title , bgcolor, color , width, padding

// import { useState } from "react"
// import Btn from "./components/Btn"

// function App() {
//   const [btn , setBtn] = useState(true);
//   return (
//     <>
//       <h1>Hello world</h1>
//       <button onClick={()=> setBtn(!btn)}>click for mount and unmount</button>
//       {btn && <Btn title="click me"/>}
//     </>

//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'

// function App() {
//   const [counter , setCounter] = useState(0);
//   const [secondCounter , setSecondCounter] = useState(0);
//   useEffect(() => {
//     console.log("component mounted");
//   } , [counter])
//   return (
//     <>
//       <h1>First counter {counter}</h1>
//       <h1>Second counter {secondCounter}</h1>
//       <button onClick={()=> setCounter(counter + 1)}>First counter +</button>
//       <button onClick={()=> setSecondCounter(secondCounter + 5)}>second counter +</button>
//     </>
//   )
// }

// export default App

// without dependency array
// empty dependency array




import React, { useEffect, useState } from 'react'

function App() {
  const [counter , setCounter] = useState(0)
  const [secondCounter , setsecondCounter] = useState(0)
  useEffect(()=>{
    console.log("app comp mounted");
    
  } , [counter])
  return (
    <>
      <h1>First counter  {counter}</h1>
      <h1>second counter  {secondCounter}</h1>
      <button onClick={()=> setCounter(counter + 1)}>first counter +</button>
      <button onClick={()=> setsecondCounter(secondCounter + 5)}>second counter +</button>
    </>
  )
}

export default App