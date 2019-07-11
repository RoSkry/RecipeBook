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

    getIngredients() {
    return this.props.recipe.ingredients.map(ingredient =>{ 
        
        return <li>{ingredient.name}</li>
    });
    }

    getSteps() {
        return this.props.recipe.steps.map(step => {
            console.log(step.name);
            return <li>{step.name}</li>
        });
    }

    render() {
        console.log(this.props.recipe);
        const { name } = this.props.recipe;
        console.log(name);
        const steps = this.getSteps();
        console.log(steps);

        const ingredients = this.getIngredients();
        console.log(ingredients);
        return (
            <div>
                <div>{name}</div>
                <ul>{this.getSteps()}</ul>
                <ul>{this.getIngredients()}</ul>
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