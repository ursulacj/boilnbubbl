import React from 'react';
import './IngredientRowContainer.css';
import IngredientRow from '../IngredientRow/IngredientRow';


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