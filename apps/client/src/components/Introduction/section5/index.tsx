import { useState } from 'react';

import { css } from '@emotion/react';

import { SectionTitle, IntroductionTitle, SubTitle } from 'client/components';

import * as S from './style';

type DepartmentType = 'SW' | 'IOT' | 'AI';

interface DepartmentArrayType {
  department: DepartmentType;
  name: string;
}

const Section5 = () => {
  const departmentArray: DepartmentArrayType[] = [
    { department: 'SW', name: '소프트웨어 개발과' },
    { department: 'IOT', name: '스마트 IOT(Internet of Things)' },
    { department: 'AI', name: '인공 지능(AI)과' },
  ];
  const [selectedDepartment, setSelectedDepartment] =
    useState<DepartmentType>('SW');
  return (
    <S.Layout>
      <SectionTitle textAlign='left'>
        <IntroductionTitle pointColor='sky'>
          창의 융합력을 갖춘 <br />
          글로벌 소프트웨어 학과 소개
        </IntroductionTitle>
        <SubTitle>체계적인 교육과정을 제공하는 소프트웨어 학과</SubTitle>
      </SectionTitle>
      <S.DepartmentSelect>
        <S.DotContainer>
          {departmentArray.map(({ department }) => (
            <S.SelectDot
              onClick={() => setSelectedDepartment(department)}
              key={department}
              css={css`
                border: ${selectedDepartment === department
                  ? '8px solid #003365'
                  : '4px solid #cdd5e2'};
              `}
            />
          ))}
          <S.Line />
        </S.DotContainer>

        <S.Department>
          {departmentArray.map(({ department, name }) => (
            <p
              onClick={() => setSelectedDepartment(department)}
              key={department}
              css={css`
                color: ${selectedDepartment === department
                  ? '#003365 '
                  : '#cdd5e2'};
              `}
            >
              {name}
            </p>
          ))}
        </S.Department>
      </S.DepartmentSelect>
    </S.Layout>
  );
};

export default Section5;
