import React from 'react';

import classes from './MenuItem.scss'
import Button from '../../UI/Button/Button';
import Badge from '../../UI/Badge/Badge';

const MenuItem = props => {
   return (
      <div className={classes.menuItem}>
         <Badge />
         <p className={classes.name}>{props.name}</p>
         <Button type="price">$11,50</Button>
      </div>
   );
}

export default MenuItem;