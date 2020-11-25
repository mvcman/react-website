import React, { useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Hero from "../components/Hero";
import Info from "../components/Info";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/Info/data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Info {...homeObjThree} />
    </>
  );
};

export default Home;
