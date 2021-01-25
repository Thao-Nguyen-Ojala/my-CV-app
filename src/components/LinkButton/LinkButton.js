import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';


function LinkButton({children, type, onClick, buttonStyle, buttonSize, buttonColor, directTo}) {

  return (
    <div>
      <Link data-testid='linkButton' to={`/${directTo}`}>
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
