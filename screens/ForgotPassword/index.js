import React, { useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";

export default function ForgotPassword({ navigation}) {
  const [formStep, setFormStep] = useState(0);
  const [token, setToken] = useState(0);

  switch (formStep) {
    case 0:
      return <Step1 setFormStep={setFormStep} setToken={setToken}/>;
    case 1:
      return <Step2 setFormStep={setFormStep} token={token}/>;
    case 2:
      return <Step3 navigation={navigation} token={token}/>;

    default:
      return null;
  }
}
