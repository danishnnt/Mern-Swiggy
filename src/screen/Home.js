import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <>
      <NavBar />
      <Carousel/>
      <Card/>
      <Footer />
    </>
  );
};

export default Home;
