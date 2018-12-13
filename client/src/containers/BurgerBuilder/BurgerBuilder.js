import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.4,
    bacon: 1.1,
    cheese: 1.5,
    meat: 2.1
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 5
    }

    addIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount;

        const ingredientPrice = INGREDIENT_PRICES[type];
        const totalPrice = this.state.totalPrice + ingredientPrice;

        this.setState({
            totalPrice: totalPrice, ingredients: updatedIngredients
        });

    }

    removeIngredientHandler = (type) => {
        if(this.state.ingredients[type] <= 0){
            return;
        }
        const updatedCount = this.state.ingredients[type] - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount;

        const ingredientPrice = INGREDIENT_PRICES[type];
        const totalPrice = this.state.totalPrice - ingredientPrice;

        this.setState({
            totalPrice: totalPrice, ingredients: updatedIngredients
        });
    }
    
    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls 
                    ingredientRemoved={this.removeIngredientHandler}
                    ingredientAdded={this.addIngredientHandler} 
                    disabled={disabledInfo} />
            </Aux>
        );
    }
}

export default BurgerBuilder;