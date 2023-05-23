import AuthTitle from "components/AuthTitle";
import React from "react";
import { StepType } from "types/signup";

interface SignupTitleProps {
  step: StepType;
}

const SignupTitle: React.FC<SignupTitleProps> = ({ step }) => {
  switch (step) {
    case "name":
      return (
        <AuthTitle>
          저희 학교 선생님인지
          <br />
          확인하기 위해 성함을 입력해주세요.
        </AuthTitle>
      );
    case "id":
      return (
        <AuthTitle>
          사용하실
          <br />
          아이디를 입력해주세요.
        </AuthTitle>
      );
    case "password":
      return (
        <AuthTitle>
          사용하실
          <br />
          비밀번호를 입력해주세요.
        </AuthTitle>
      );
  }
};

export default SignupTitle;
