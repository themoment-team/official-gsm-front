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

  return (
    <>
      <ToBackButton onClick={() => setStep((value) => previousStep(value))} />
      <SignupTitle step={step} />
      <Input placeholder={placeholders[step]} marginTop="2.5rem" />
      {step === "password" && (
        <Input placeholder="비밀번호를 재입력해주세요." marginTop="1.5rem" />
      )}
      <SignupDescription step={step} />
      <Button
        onClick={() => setStep((value) => nextStep(value))}
        position="absolute"
        bottom="1.5rem"
        isLoading={isLoading}
      >
        다음
      </Button>
    </>
  );
}
