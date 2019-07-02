import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css"
import Recipe from "./components/Recipe"
import Footer from "./components/Footer"
import Header from "./components/Header"

class App extends React.Component {

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
        return (
            <div className="App">
                <Header />

                <button onClick={this.addRecipe}></button>
                <Footer text="user"/> 
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);