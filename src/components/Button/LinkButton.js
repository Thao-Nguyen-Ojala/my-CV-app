import React from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';


function LinkButton({children, type, onClick, buttonStyle, buttonSize, buttonColor, directTo}) {

  return (
    <div>
      <Link to={`/${directTo}`}>
        <Button
          buttonColor={buttonColor}
          buttonSize={buttonSize}
          buttonStyle={buttonStyle}
          onClick={onClick}
          type={type}
          children={children}
        />
      </Link>
    </div>
  )
}

export default LinkButton
