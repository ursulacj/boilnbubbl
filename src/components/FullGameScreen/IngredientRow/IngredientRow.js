import React, { Component } from 'react';
import './IngredientRow.css';
import Ingredient from '../Ingredient/Ingredient';

const IngredientRow = () => {
    return (
        <div className="ingredientRow">
            <Ingredient />
            <Ingredient />
            <Ingredient />
        </div>
    )

}

export default IngredientRow;