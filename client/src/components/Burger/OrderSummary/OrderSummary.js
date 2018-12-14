import React from 'react';

import Aux from '../../../hoc/Aux';

const name = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span>{igKey}</span> : {props.ingredients[igKey]}
                </li>
            )
        })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    )
};

export default name;