import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import { InfoSection, Pricing } from "../../components";
import { Button } from "../../globalStyles";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour}>
        <Link to="/sign-up">
          <Button>sam</Button>
        </Link>
      </InfoSection>
    </>
  );
}

export default Home;
