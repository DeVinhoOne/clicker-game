import React, { Component } from 'react';

import classes from './ClickerGame.scss';
import Button from '../../components/UI/Button/Button';
import Menu from '../../components/Menu/Menu';
import Panel from '../../components/Panel/Panel';

class ClickerGame extends Component {
   state = {
      currentMoney: 0,
      moneyPerSecond: 0.5
   }

   onClickHandler = () => {
      this.setState(prevState => ({ currentMoney: prevState.currentMoney + 1 }))
   }

   render() {
      return (
         <>
            <Button type="save">Save</Button>
            <Menu />
            <Panel
               click={this.onClickHandler}
               money={this.state.currentMoney}
               moneyPerSecond={this.state.moneyPerSecond}
            />
         </>
      );
   }
}

export default ClickerGame;