import React from "react";

import Pic1 from "../images/i1.jpeg";
import Pic2 from "../images/star1.png";

export default function Card() {
    return (
        <div className="card">
            <img src={Pic1} className="card--image" />
            <div className="card--stats">
                <img src={Pic2} className="card--star" />
                <span>5.0</span>
                <span className="gray">(6) .</span>
                <span className="gray">SA</span>
            </div>
            <p>Life lessons with Owethu Sotomela</p>
            <p><span className="bold">From Uitenhage</span></p>
        </div>
    )
}