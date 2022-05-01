import React from "react";

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Hero from "./components/Hero";

import OS_DP from "./images/OS-Avi.jpeg"

export default function App() {
  return (
    <main>
      <Navbar />
      <Card
        img={OS_DP}
        rating={"5.0"}
        reviewCount={6}
        country={"South Africa"}
        title={"Owethu Sotomela"}
        price={"R136"}
      />
      <Hero />
    </main>
  )
}