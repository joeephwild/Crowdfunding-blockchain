import React from 'react'

const CustomButton = ({btnType, title, handleClick, styles}) => {
  return (
    <button 
    type={btnType}
    className={`font-epilogue font-semibold text-[12px] leading-[26px] text-white  px-2 rounded-[10px] ${styles}`} 
    onClick={handleClick}  
    >
      {title}
      </button>
  )
}

export default CustomButton