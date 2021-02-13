import React from 'react'

const errorStyle={
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"60vh"
}
const ErrorMessage = ({message}) => {
  return (
    <div style={errorStyle}>
      <h1><i class="fas fa-exclamation-triangle"></i> {message} <i class="fas fa-exclamation-triangle"></i></h1>
    </div>
  )
}

export default ErrorMessage
