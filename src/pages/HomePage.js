import React from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../components";
import { Reviews } from "../components/Reviews";
const HomePage = () => {
  return (
    <main>
      <Reviews />
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
