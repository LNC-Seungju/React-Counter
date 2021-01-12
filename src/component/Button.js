import React from 'react';

const Button = (props) => 
  <div>
    <button onClick={props.clickHandler}>{props.children}</button>
  </div>
  
export default Button;