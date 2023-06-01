import * as I from 'admin/assets';

import * as S from './style';

interface ApproveItemProps {
  name: string;
  date: string;
}

const ApproveItem: React.FC<ApproveItemProps> = ({ name, date }) => (
    <S.ApproveItem>
      <p className='teacher'>{name} 선생님</p>
      <p className='date'>{date}</p>
      <S.Approve>
        <button className='approve'>승인</button>
        <I.VerticalBarIcon />
        <button className='refuse'>거절</button>
      </S.Approve>
    </S.ApproveItem>
  );

export default ApproveItem;
