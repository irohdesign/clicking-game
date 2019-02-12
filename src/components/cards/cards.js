import React from "react";
import "./cards.css";

function Card(props) {

    var sectionStyle = {
        backgroundImage: `url(${props.url})`,
        height: '240px',
        width: '100%',
        backgroundSize: 'cover'
    }

    return(
        <div> 
        {/* add onClick event */}
           <div className = "tile col-sm-4">
                <div style = {sectionStyle} className="background-img"></div>
                <div className = "cast-name">
                    <p>{props.name}</p>
           </div>
            </div>
        </div>
    )
}

export default Card;