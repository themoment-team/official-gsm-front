'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import {
  ToBackButton,
  Input,
  SignupTitle,
  SignupDescription,
} from 'components';
import { Button } from 'ui';

import type { StepType } from 'types/signup';

const placeholders = {
  name: '성함을 입력해주세요.',
  id: '아이디를 입력해주세요.',
  password: '비밀번호를 입력해주세요.',
} as const;

const stepArray: StepType[] = ['name', 'id', 'password'];

const nextStep = (step: StepType) => {
  const currentValueIndex = stepArray.indexOf(step);
  return stepArray[currentValueIndex + 1];
};

const previousStep = (step: StepType) => {
  const currentValueIndex = stepArray.indexOf(step);
  return stepArray[currentValueIndex - 1];
};

export default function SignupPage() {
  const [step, setStep] = useState<StepType>('name');
  const [isLoading, setIsLoading] = useState(false);
  const { replace } = useRouter();

  const clickToBack = () => {
    setIsLoading(true);
    setTimeout(() => {
      step === 'name'
        ? replace('/auth/signin')
        : setStep((value) => previousStep(value));
      setIsLoading(false);
    }, 1000);
  };

  const clickToNextButton = () => {
    setIsLoading(true);
    setTimeout(() => {
      step === 'password'
        ? replace('/auth/signup/pending')
        : setStep((value) => nextStep(value));
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <ToBackButton onClick={clickToBack} />
      <SignupTitle step={step} />
      <Input
        placeholder={placeholders[step]}
        height='2.75rem'
        marginTop='2.5rem'
      />
      {step === 'password' && (
        <Input placeholder='비밀번호를 재입력해주세요.' marginTop='1.5rem' />
      )}
      <SignupDescription step={step} />
      <Button
        onClick={clickToNextButton}
        position='absolute'
        bottom='1.5rem'
        isLoading={isLoading}
      >
        다음
      </Button>
    </>
  );
}
