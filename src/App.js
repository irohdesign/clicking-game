import React, {Component} from "react";
import Header from "./components/header/header.js";
import Card from "./components/cards/cards.js";
import Cast from "./sunny.json";
import "./style.css";

class App extends Component {

    state = {
        Cast
    };

    render() {
        return (
            <main>
                <Header />
                <div class="container">
                    {this.state.Cast.map(member => (
                        <Card id={member.id}
                        name = {member.name}
                        url = {member.url}
                        />
                    ))}
                </div>
            </main>
        );
    }
}
export default App;