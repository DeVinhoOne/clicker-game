import React, { Component } from 'react';

import classes from './ClickerGame.scss';
import Button from '../../components/UI/Button/Button';
import Menu from '../../components/Menu/Menu';
import Panel from '../../components/Panel/Panel';

class ClickerGame extends Component {
   state = {
      currentMoney: 0,
      moneyPerSecond: 0,
      materials: [
         {
            name: 'Iron',
            amount: 0,
            price: 25.00,
            multiplier: 1
         },
         {
            name: 'Silver',
            amount: 0,
            price: 500.00,
            multiplier: 3
         },
         {
            name: 'Platinium',
            amount: 0,
            price: 2500.00,
            multiplier: 7
         },
         {
            name: 'Gold',
            amount: 0,
            price: 10000.00,
            multiplier: 12
         },
         {
            name: 'Diamond',
            amount: 0,
            price: 95000.00,
            multiplier: 20
         },
      ]
   }

   componentDidMount() {
      setInterval(() => {
         this.setState(prevState => ({ currentMoney: prevState.currentMoney + (prevState.moneyPerSecond / 10) }))
      }, 100);
   }

   buyHandler = (name) => {
      const index = this.state.materials.findIndex(material => material.name === name);
      if (this.state.currentMoney >= this.state.materials[index].price && this.state.materials[index].amount <= 100) {
         // Making a copy of old Materials array and updating It
         const updatedMaterials = [...this.state.materials];
         const currentPrice = this.state.materials[index].price;
         console.log(updatedMaterials);
         updatedMaterials[index].amount++;
         updatedMaterials[index].price = updatedMaterials[index].price * 1.2;
         this.setState(prevState => ({
            currentMoney: prevState.currentMoney - currentPrice,
            moneyPerSecond: (prevState.moneyPerSecond + updatedMaterials[index].multiplier),
            materials: updatedMaterials
         }))
      }
   }

   onClickHandler = () => {
      this.setState(prevState => ({ currentMoney: prevState.currentMoney + 1 }))
   }

   render() {
      return (
         <>
            <Button type="save">Save</Button>
            <Menu
               materials={this.state.materials}
               buyHandler={(name) => this.buyHandler(name)}
            />
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