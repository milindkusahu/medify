import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HospitalSearch from "./components/HospitalSearch/HospitalSearch";
import HeroServices from "./components/Hero/HeroServices";
import Offers from "./components/Sections/Offers/Offers";
import Specialization from "./components/Sections/Specialization/Specialization";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <HospitalSearch />
      <HeroServices />
      <Offers />
      <Specialization />
      <Footer />
    </div>
  );
};

export default App;
