import React from "react";

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Hero from "./components/Hero";

export default function App() {
  return (
    <main>
      <h1>Hello Oz!</h1>
      <Navbar />
      <Card />
      <Hero />
    </main>
  )
}