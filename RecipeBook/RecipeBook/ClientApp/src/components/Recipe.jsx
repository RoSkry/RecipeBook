import React from "react"
import ReactDOM from "react-dom";

class Recipe extends React.Component {
    state = { name: "", steps: [], ingredients: [] };
    onNameChange(e) {
        this.setState({
            name: e.target.value
        });

    }

    onStepsChange(e) {
        this.setState({
            steps: e.target.value
        });
    }
    onIngredientsChange(e) {
        this.setState({
            ingredients: e.target.value
        });
    }


    render() {
        const {name} = this.props.recipe;
       
        const steps = this.props.recipe.steps.map(step => <li>{step}</li>)
        const ingredients = this.props.recipe.ingredients.map(ingredient => <li>{ingredient}</li>)
        return (
            <div>
                <div>{name}</div>
                <ul>{steps}</ul>
                <ul>{ingredients}</ul>
                <div>
                    <button onClick={this.props.editRecipe}></button>
                    <button onClick={this.props.deleteRecipe}></button>
                </div>
                <div>
                    <ul>

                    </ul>

                </div>
            </div>

        );
    }

}

export default Recipe;