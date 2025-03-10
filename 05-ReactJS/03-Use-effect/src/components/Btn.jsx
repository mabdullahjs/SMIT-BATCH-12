// import React from 'react'

// function Btn(props) {
//   return (
//     <button style={{
//         padding: '5px 20px',
//         borderRadius: '5px',
//         border: 'none',
//         cursor: 'pointer',
//         backgroundColor: props.bgColor ? props.bgColor : 'red',
//         color: props.color ? props.color : 'white',
//         margin: '5px',
//         fontSize: 20
//     }}>{props.title}</button>
//   )
// }

// export default Btn








// import React from 'react'

// function Btn({title , bgcolor, color , width, padding, func}) {
//   return (
//     <>
//     <button style={{
//       backgroundColor: bgcolor,
//       color,
//       width,
//       padding,
//       fontSize: '30px',
//       margin: '30px'

//     }} onClick={func}>{title}</button>
//     </>
//   )
// }

// export default Btn




import React, { useEffect } from 'react'

function Btn({title}) {
  useEffect(()=>{
    console.log("btn component mount")

    return ()=>{
      console.log("unmount");
      
    }
  } , [])

  return (
    <>
    <button>{title}</button>
    </>
  )
}

export default Btn

