import React from "react";

import Pic2 from "../images/star1.png";

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img src={props.img} className="card--image" alt="" />
            <div className="card--stats">
                <img src={Pic2} className="card--star" alt="" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) πΏπ¦</span>
                <span className="gray">{props.location}</span>
            </div>
            <p>Life lessons with {props.title}</p>
            <p><span className="bold">From R{props.price}</span> / person</p>
        </div>
    )
}