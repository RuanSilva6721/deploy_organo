import React from './Button.css'

const Button = (props) => {
  return (
    <div>
      <button className="botao">
        {props.children}
      </button>
    </div>
  )
}

export default Button
