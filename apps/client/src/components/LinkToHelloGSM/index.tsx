import Link from 'next/link';

import * as S from './style';

const LinkToHelloGSM = () => (
  <Link href='https://www.hellogsm.kr/'>
    <S.LinkToHelloGSMWrapper>
      <S.TextWrapper>
        <S.AdmissionText>
          광주SW 마이스터고등학교에 입학🏫 하고 싶다면?
        </S.AdmissionText>
        <S.HashTagWrapper>
          <S.HashTag>#LET’S GO GSM!</S.HashTag>
          <S.HashTag>#HELLO, GSM</S.HashTag>
        </S.HashTagWrapper>
      </S.TextWrapper>
    </S.LinkToHelloGSMWrapper>
  </Link>
);

export default LinkToHelloGSM;
