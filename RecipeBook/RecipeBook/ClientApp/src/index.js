import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css"
import Recipe from "./components/Recipe"
import Footer from "./components/Footer"
import Header from "./components/Header"

class App extends React.Component {
    state={recipes:[]}

    editRecipe=e=>
    {
      
    }

    addRecipe=e=>
    {


    }

    deleteRecipe=e=>
    {

    }
    render() {
        const recipes= this.state.recipes()
        return (
            <div className="App">
                <Header />
                <button onClick={this.addRecipe}>Add recipe</button>
                <button onClick={this.editRecipe}>Add recipe</button>
                <Footer text="user"/> 
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);