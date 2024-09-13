import React from 'react'

const Button = ({ text,href, onClick, className, style, type="" }) => {
  return (
    <button
     type={type}
    style={{
      ...style}}  onClick={onClick} className={`bg-blue-500  text-white font-bold py-2 px-2 rounded-full default-background-color ${className}`}>
      {text}
    </button>
  )
}

export default Button
