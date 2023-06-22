import { FooterGSMLogo } from 'client/assets';

import * as S from './style';

const Footer = () => (
  <S.Footer>
    <S.FooterContent>
      <FooterGSMLogo />
      <S.FooterTextWrapper>
        <S.SchoolInfo>
          우) 62423 광주광역시 광산구 상무대로 312
          <br />
          교무실 062)949-6800(08:30~16:30) 행정실 062)949-6806(08:30~16:30)
          <br />
          팩스 062)941-7545 당직실 062)949-6899(평일야간, 휴일)
        </S.SchoolInfo>
      </S.FooterTextWrapper>
    </S.FooterContent>
  </S.Footer>
);

export default Footer;
