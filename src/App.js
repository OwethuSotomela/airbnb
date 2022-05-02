import React from "react";

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Hero from "./components/Hero";

import Data from "./Data";

console.log(Data)

export default function App() {

  const cards = Data.map(item => {
    return <Card
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
    />
  })

  return (
    <main>
      <Navbar />
      {cards}
      <Hero />
    </main>
  )
}