import React from "react";

import NavLogo from "../images/ab1.png";

export default function Navbar() {
    return (
        <nav>
            <img src={NavLogo} className="nav--logo" />
        </nav>
    )
}