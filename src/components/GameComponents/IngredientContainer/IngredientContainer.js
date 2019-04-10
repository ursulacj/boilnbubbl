import React, { Component } from 'react';
import './IngredientContainer.css';
import IngredientRow from '../../components/IngredientRow/IngredientRow';


const IngredientContainer = () => {
    return (
        <div>
            <IngredientRow />
            <IngredientRow />
            <IngredientRow />
        </div>
    )
}

export default IngredientContainer;