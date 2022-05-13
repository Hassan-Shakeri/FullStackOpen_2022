import React from 'react'

const Notification = ({message}) => {

    const green = {
      border: '3px solid green',
        color: 'green',
        fontStyle: 'italic',
        fontSize: 18,
        padding: 10,
        height: 20,
      }
    const red = {
      border: '3px solid red',
        color: 'red',
        fontStyle: 'italic',
        fontSize: 18,
        padding: 10,
        height: 20,
      }
    const black = {
      border: '3px solid black',
        color: 'black',
        fontStyle: 'italic',
        fontSize: 18,
        padding: 10,
        height: 20,
      }

  return (
    <div>
      <br/>
      <div style={message.status === "success" ? green : message.status === "error" ? red : black}>{message.text}</div>
    </div>
  )
}

export default Notification