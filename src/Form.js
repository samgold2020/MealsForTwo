import React from 'react';

const Form = (props) => {


    return (
        <form onSubmit={props.getRecipes}>
            <input type="text" name="ingredient"/>
            <button>Search by Ingredient</button>
        </form>
    );
};

export default Form;