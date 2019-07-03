import React from "react"
import ReactDOM from "react-dom";

class Recipe extends React.Component {
    state = { name: "", author: "", steps: [], ingredients: [] };
    onNameChange(e) {
		this.setState({
			name: e.target.value
		});

    }
    onAuthorChange(e) {
		this.setState({
			author: e.target.value
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

    
  render()
  {
      const[name,author]=this.state;
      const steps=this.state.steps.map(step=><li>{step}</li>)
      const ingredients=this.state.ingredients.map(ingredient=><li>{ingredient}</li>)
      return(
<div>   
    <div>{name}</div>
    <div>{author}</div>
    <ul>{steps}</ul>
    <ul>{ingredients}</ul>
    <div>
        <button onClick={this.props.deleteRecipe}></button>
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