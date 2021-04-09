import React from "react";
import { walletObjOne, walletObjTwo } from "./Data";
import { InfoSection, Pricing } from "../../components";
//import { Button } from "../../globalStyles";
//import { Link } from "react-router-dom";

function Wallet() {
  return (
    <>
      <InfoSection {...walletObjOne} />
      <InfoSection {...walletObjTwo} />

      <Pricing />
    </>
  );
}

export default Wallet;
