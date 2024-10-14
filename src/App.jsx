import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HospitalSearch from "./components/HospitalSearch/HospitalSearch";
import HeroServices from "./components/Hero/HeroServices";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <HospitalSearch />
      <HeroServices />
      <Footer />
    </div>
  );
};

export default App;
