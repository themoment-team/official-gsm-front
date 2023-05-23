"use client";

import {
  ToBackButton,
  Input,
  SignupTitle,
  SignupDescription,
} from "components";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { StepType } from "types/signup";
import { Button } from "ui";

const placeholders = {
  name: "성함을 입력해주세요.",
  id: "아이디를 입력해주세요.",
  password: "비밀번호를 입력해주세요.",
};

const nextStep = (step: StepType) => {
  switch (step) {
    case "name":
      return "id";
    case "id":
      return "password";
    case "password":
      return "password";
  }
};

const previousStep = (step: StepType) => {
  switch (step) {
    case "name":
      return "name";
    case "id":
      return "name";
    case "password":
      return "id";
  }
};

export default function SignupPage() {
  const [step, setStep] = useState<StepType>("name");
  const [isLoading, setIsLoading] = useState(false);
  const { replace } = useRouter();

  const clickToBack = () => {
    setIsLoading(true);
    setTimeout(() => {
      step === "name"
        ? replace("/auth/login")
        : setStep((value) => previousStep(value));
      setIsLoading(false);
    }, 1000);
  };

  const clickToNextButton = () => {
    setIsLoading(true);
    setTimeout(() => {
      step === "password"
        ? replace("/auth/signup/pending")
        : setStep((value) => nextStep(value));
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <ToBackButton onClick={clickToBack} />
      <SignupTitle step={step} />
      <Input placeholder={placeholders[step]} marginTop="2.5rem" />
      {step === "password" && (
        <Input placeholder="비밀번호를 재입력해주세요." marginTop="1.5rem" />
      )}
      <SignupDescription step={step} />
      <Button
        onClick={clickToNextButton}
        position="absolute"
        bottom="1.5rem"
        isLoading={isLoading}
      >
        다음
      </Button>
    </>
  );
}
