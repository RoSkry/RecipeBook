import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css"
import Recipe from "./components/Recipe"
import Footer from "./components/Footer"
import Header from "./components/Header"

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Footer text="user"/> 
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);