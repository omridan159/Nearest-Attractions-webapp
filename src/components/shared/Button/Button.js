import React from 'react';
import './Button.css'

const Button = ({ onClick, text,className }) => {
   return (
      <button className={className} onClick={onClick}>
         <span>{text}</span>
      </button>
   );
};

export default Button;
