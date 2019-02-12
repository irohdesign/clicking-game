import React, {Component} from "react";
import Header from "./components/header/header.js";
import Card from "./components/cards/cards.js";
import Cast from "./sunny.json";

class App extends Component {
    render() {
        return (
            <main>
                <Header />
    
                <Card />
            </main>
        );
    }
}
export default App;