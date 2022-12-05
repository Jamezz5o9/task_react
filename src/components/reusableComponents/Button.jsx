import React from 'react'

const Button = ({name, width, height, borderTop, borderRight, borderBottom, borderLeft, color, bgColor, border, margin, padding}) => {
  return (
  <button
    style={{
      width:width,
      height: height,
      borderBottomLeftRadius: borderTop,
      borderBottomRightRadius: borderRight,
      borderTopRightRadius: borderBottom,
      borderTopLeftRadius: borderLeft,
      color: color,
      backgroundColor: bgColor,
      border:border,
      marginRight: margin,
      padding: padding
    
    }}
    >{name}</button>
  )
}

export default Button