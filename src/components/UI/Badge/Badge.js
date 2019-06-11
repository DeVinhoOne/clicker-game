import React from 'react';

import classes from './Badge.scss';

const Badge = props => (
   <div className={classes.badge}>{props.amount}</div>
)

export default Badge;