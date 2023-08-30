const InfoWindow: React.FC = () => (
  <div className='next'>
    <div className='box'>
      <div className='close'>
        <img src='/images/about/location/svg/CloseIcon.svg' />
      </div>
      <div className='contentBox'>
        <div className='title'>광주소프트웨어마이스터고등학교</div>
        <div className='address'>광주 광산구 상무대로 312 </div>
        <div> (우) 62423&nbsp;&nbsp;(지번) 송정동 710-3</div>
        <div className='number'>062-949-6800</div>
      </div>
      <div className='bottomBox'>
        <div className='iconBox'>
          <div className='icon roadView'>
            <img src='/images/about/location/svg/SmallMarkerIcon.svg' />
          </div>
          <div className='icon copyLink'>
            <img src='/images/about/location/svg/CopyLinkIcon.svg' />
          </div>
        </div>
        <div className='locationBtn'>길찾기</div>
      </div>
    </div>
    <div className='triangle' />
  </div>
);

export default InfoWindow;
