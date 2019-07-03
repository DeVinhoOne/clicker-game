import React from 'react';

import classes from './Menu.scss';
import MenuItem from './MenuItem/MenuItem';

const Menu = props => {
   return (
      <div className={classes.menu} >
         {props.materials.map(material => (
            <MenuItem
               key={material.name}
               name={material.name}
               price={(material.price).toFixed(2)}
               amount={material.amount}
               buyHandler={() => props.buyHandler(material.name)}
            />
         ))}
      </div >
   );
}

export default Menu;