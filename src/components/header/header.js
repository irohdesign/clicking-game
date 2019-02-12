import React from "react";
import "./header.css";

let score = 0;

function header() {
    return (
        <div class="header">
            <h1>Clicking Game</h1>
            <h3 id="tagalong">Click a face, but don't click it twice!</h3>
            <h4>Your current score is {score}.</h4>
        </div>
    );
}

export default header;