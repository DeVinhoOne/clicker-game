import React from 'react';

import classes from './Menu.scss';
import MenuItem from './MenuItem/MenuItem';

const Menu = () => {
   return (
      <div className={classes.menu}>
         <MenuItem name="Iron" />
         <MenuItem name="Silver" />
         <MenuItem name="Platinium" />
         <MenuItem name="Gold" />
         <MenuItem name="Diamond" />
      </div>
   );
}

export default Menu;