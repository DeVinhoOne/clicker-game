import React, { Component } from 'react';

import classes from './ClickerGame.scss';
import Button from '../../components/UI/Button/Button';
import Menu from '../../components/Menu/Menu';

class ClickerGame extends Component {
   state = {}
   render() {
      return (
         <>
            <Button type="save">Save</Button>
            <Menu />
         </>
      );
   }
}

export default ClickerGame;