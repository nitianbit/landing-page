
import React from 'react'

const Button = ({ text,href, onClick, className }) => {
  return (
    <button  onClick={onClick} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full ${className}`}>
      {text}
    </button>
  )
}

export default Button
