import styled from "@emotion/styled";
import AuthDescription from "components/AuthDescription";
import React from "react";
import { StepType } from "types/signup";

interface SignupDescriptionProps {
  step: StepType;
}

const SignupDescription: React.FC<SignupDescriptionProps> = ({ step }) => {
  switch (step) {
    case "name":
      return <></>;
    case "id":
      return (
        <Description>
          영어, 숫자, 특수문자 중 2개 이상 포함해주세요.
        </Description>
      );
    case "password":
      return (
        <Description>
          대문자, 소문자, 영문자, 숫자, 특수문자를
          <br />
          포함해주세요.
        </Description>
      );
  }
};

const Description = styled(AuthDescription)`
  && {
    position: absolute;
    width: 21.4375rem;
    bottom: 6.5rem;
    margin: 0;
    line-height: 1.25rem;
  }
`;

export default SignupDescription;
