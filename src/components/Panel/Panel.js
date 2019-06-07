import React from 'react';

import classes from './Panel.scss';
import moneybag from '../../assets/svg/money-bag.svg';

const Panel = props => {
   return (
      <div className={classes.wrapper}>
         <h1>${props.money}</h1>
         <img onClick={props.click} src={moneybag} alt="moneybag" />
         <p>${props.moneyPerSecond} per second</p>
      </div>
   );
}

export default Panel;