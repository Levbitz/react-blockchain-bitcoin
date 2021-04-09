import React from "react";
import MainTab from "../../components/ManTab/MainTab";
//import { InfoSection, Pricing } from "../../components";
import Trades from "../../components/Trades/Trades";
//import { homeObjOne, homeObjThree } from "./Data";

function Services() {
  return (
    <>
      <MainTab />
      <Trades />

      {/*<InfoSection {...homeObjOne} />
  <InfoSection {...homeObjThree} />*/}
    </>
  );
}

export default Services;
