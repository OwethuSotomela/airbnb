import React from "react";

import Pic2 from "../images/star1.png";

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <div className="card--badge">SOLD OUT</div>
            <img src={props.img} className="card--image" alt="" />
            <div className="card--stats">
                <img src={Pic2} className="card--star" alt="" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) 🇿🇦</span>
                <span className="gray">{props.location}</span>
            </div>
            <p>Life lessons with {props.title}</p>
            <p><span className="bold">{props.price}</span></p>
        </div>
    )
}