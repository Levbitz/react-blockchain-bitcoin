import React from "react";
import { InfoSection } from "../../components";
import FormOne from "../../components/FormOne/FormOne";
import { homeObjOne, homeObjThree } from "./Data";

function SignUp() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <FormOne />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default SignUp;
