import * as S from './style';

const MajorCard = () => (
  <S.CardLayout>
    <S.ImageSection />
    <S.ContentSection>
      <S.Title>소프트웨어 개발과</S.Title>
      <S.Content>
        SW개발의 계획에서부터 분석, 설계, 코딩, 테스팅, 유지보수까지 전반적인
        학습 / 맞춤형 실무교육을 통해 정보 시스템 개발과 웹/모바일, 콘텐츠
        제작이 가능하도록 전문 인재 양성
      </S.Content>
      <S.TagSection>
        <S.Tag>#운영체제</S.Tag>
      </S.TagSection>
      <S.Line />
      <S.KeywordSection>
        <S.Keyword>
          소프트웨어
          <br />
          개발 회사
        </S.Keyword>
        <S.Keyword>
          소프트웨어
          <br />
          개발 회사
        </S.Keyword>
        <S.Keyword>
          소프트웨어
          <br />
          개발 회사
        </S.Keyword>
      </S.KeywordSection>
    </S.ContentSection>
  </S.CardLayout>
);

export default MajorCard;
