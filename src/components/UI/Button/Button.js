import React from 'react';

import classes from './Button.scss';

const Button = props => {
   return (
      <button
         onClick={props.buyHandler}
         className={props.type === 'save' ? classes.button__save : classes.button__price}
      > {props.children}</button >
   );
}

export default Button;