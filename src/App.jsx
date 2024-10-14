import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HospitalSearch from "./components/HospitalSearch/HospitalSearch";
import HeroServices from "./components/Hero/HeroServices";
import Offers from "./components/Sections/Offers/Offers";
import Specialization from "./components/Sections/Specialization/Specialization";
import Specialists from "./components/Sections/Specialists/Specialists";
import PatientCaring from "./components/Sections/PatientCaring/PatientCaring";
import BlogCard from "./components/Sections/Blogs/BlogCard";
import OurFamilies from "./components/Sections/OurFamilies/OurFamilies";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <HospitalSearch />
      <HeroServices />
      <Offers />
      <Specialization />
      <Specialists />
      <PatientCaring />
      <BlogCard />
      <OurFamilies />
      <Footer />
    </div>
  );
};

export default App;
