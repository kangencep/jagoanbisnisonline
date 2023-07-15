import React from "react";
import { Fragment } from "react";
import NavbarComp from "../../components/NavbarComp";
import HeroComp from "../../components/HeroComp";
import GaleryComp from "../../components/GaleryComp";
import ServiceComp from "../../components/ServiceComp";
import FaqComp from "../../components/FaqComp";
import FooterComp from "../../components/FooterComp";
import JoinGroup from "../../components/JoinGroup";

function App() {
  return (
    <Fragment>
      <HeroComp />
      <NavbarComp />
      <GaleryComp />
      <ServiceComp />
      <FaqComp />
      <JoinGroup />
      <FooterComp />
    </Fragment>
  );
}

export default App;
