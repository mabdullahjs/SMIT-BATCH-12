import React, { useState } from 'react'
import Card from './components/Card'

function App() {
  const [show , setShow] = useState(true);
  return (
    <>
      <h1>Hello world</h1>
      <button onClick={()=> setShow(!show)}>{show ? 'hide' : 'show'}</button>
      {/* <Btn title="add Todo" bgColor="purple" color="lightblue"/>
      <Btn title="Click" bgColor="green"/>
      <Btn title="delete todo"/>
      <Btn title="edit todo"/> */}

      {show ? <div>
        <Card title='Banyaan' description='stretchable banyaan with good quality cotton fabric' image='https://static-01.daraz.pk/p/c3f46e2edf998e0212d838505a90ab75.jpg' />

        <Card title='Lamp' description='good quality light with taiz roshni with long live' image='https://imagescdn.simons.ca/images/20992-24101256-11-A1_2/porous-concrete-table-lamp.jpg?__=3' />
      </div> : null}
    </>
  )
}

export default App



// component lifecycle image https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM41d6h_1DiRyfc1dkFOwKtxvgymj6-6TPnQ&s