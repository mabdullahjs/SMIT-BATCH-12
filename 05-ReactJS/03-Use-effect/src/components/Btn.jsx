import React from 'react'

function Btn(props) {
  return (
    <button style={{
        padding: '5px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: props.bgColor ? props.bgColor : 'red',
        color: props.color ? props.color : 'white',
        margin: '5px',
        fontSize: 20
    }}>{props.title}</button>
  )
}

export default Btn