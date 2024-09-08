import React from 'react'

const Button = ({ text,href, onClick, className, style }) => {
  return (
    <button style={{
      backgroundColor:"#64506b",
      ...style}}  onClick={onClick} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full ${className}`}>
      {text}
    </button>
  )
}

export default Button
