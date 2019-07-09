import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";
import Header from "./components/Header";

class App extends React.Component {
  state = { recipes: [], arrLength: 0, isHidden: true };

  componentDidMount() {
    fetch("https://localhost:44314/api/recipe")
      .then(res => res.json())
      .then(res => {
        JSON.stringify(res);
        console.log(res);
        this.setState({ recipes: res });
      });
    console.log("recipe");
  }
  editRecipe = e => {};

  createRecipe = () => {
    this.setState({ isHidden: false });
  };
  addRecipe = e => {};

  deleteRecipe = e => {};
  render() {
    const recipes = this.state.recipes.map((recipe, idx) => {
      return (
        <Recipe
          recipe={recipe}
          id={idx + 1}
          deleteRecipe={this.deleteRecipe}
          editRecipe={this.editRecipe}
        />
      );
    });
    return (
      <div>
        <div className="App">
          <Header />
          <button onClick={this.createRecipe}>Add recipe</button>
          <div>{recipes}</div>
        </div>

        <div
          id="newRecipe"
          class={this.state.isHidden ? "Visible" : "InVisible"}
        >
          <h4>Add New Recipe</h4>
          <div>
            <input id="add_name" type="text" />
            <label>Name</label>
          </div>
          <div>
            <input id="add_ingredients" type="text" />
            <label htmlFor="add_ingredients"> Ingredients</label>
          </div>
          <div>
            <input id="add_steps" type="text" />
            <label> Steps </label>
          </div>

          <div>
            <button onClick={this.addRecipe}>Confirm</button>
          </div>
        </div>

        <Footer text="user" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
