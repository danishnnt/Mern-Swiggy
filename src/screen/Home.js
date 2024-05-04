import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="m-4">
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
