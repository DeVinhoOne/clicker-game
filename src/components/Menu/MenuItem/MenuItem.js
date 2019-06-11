import React from 'react';

import classes from './MenuItem.scss'
import Button from '../../UI/Button/Button';
import Badge from '../../UI/Badge/Badge';

const MenuItem = props => {
   return (
      <div className={classes.menuItem}>
         <Badge amount={props.amount} />
         <p className={classes.name}>{props.name}</p>
         <Button
            buyHandler={props.buyHandler}
            type="price"
         >${props.price}</Button>
      </div>
   );
}

export default MenuItem;