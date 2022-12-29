import React from "react";
// import './index.css';
function Cards(props){
    return(
    <div className="cards">
        <div className="card">
            <img src={props.Image} alt="peaky pic" className="card_img"/>
            <div className="card_info">
                <span className="card_title">{props.Title}</span>
                <h3 className="card_name">{props.Name}</h3>
                <a href={props.Link} target= "_blank" rel="noreferrer">
                <button>Watch Now</button>
                </a>    
            </div>
        </div>
    </div>
    )
}

export default Cards;