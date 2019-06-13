import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css"
import Recipe from "./components/Recipe"
import Footer from "./components/Footer"


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Footer />
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);