import React from 'react'

const Button = ({textInside,onClick,to, customStyle}: {textInside: string, onClick?: () => void, to?: string, customStyle?: React.CSSProperties}) => {

  if(to){
        return (
            <div>
                <a style={customStyle} href={to} className="inline-block bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all duration-500 tracking-wider font-bold disabled:cursor-not-allowed text-center">{textInside}</a>
            </div>
          )}
          
  return (
    <div>
                <button style={customStyle} onClick={onClick}  className="inline-block bg-red-500 text-white sm:px-4 sm:py-2 rounded-md hover:bg-red-700 transition-all duration-500 tracking-wider font-bold disabled:cursor-not-allowed px-2 py-2">{textInside}</button>
    </div>
  )
}

export default Button
