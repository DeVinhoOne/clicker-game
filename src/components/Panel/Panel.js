import React from 'react';

import classes from './Panel.scss';
import moneybag from '../../assets/svg/money-bag.svg';

const Panel = props => {
   return (
      <div className={classes.wrapper}>
         <h1>${(props.money).toFixed(2)}</h1>
         <img onClick={props.click} src={moneybag} alt="" />
         <p>${(props.moneyPerSecond).toFixed(2)} per second</p>
      </div>
   );
}

export default Panel;