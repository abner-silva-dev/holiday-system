import styled from 'styled-components';
import UserPhoto from '../features/users/UserPhoto';
import { API_DAI_BASE } from '../config';
import { UserInfo } from '../features/users/types'; // Importa UserInfo desde donde esté definido

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: 600;
`;

const Position = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-grey-600);
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  border-top: 1.5px solid var(--color-grey-200);
  border-bottom: 1.5px solid var(--color-grey-200);
  padding: 1.4rem 0;
`;

interface UserMiniCardProps {
  user: UserInfo;
}

const UserMiniCard: React.FC<UserMiniCardProps> = ({ user }) => {
  return (
    <Card>
      <UserPhoto
        src={`${API_DAI_BASE}/img/user/${user.photo}`}
        $size="small"
        $type="circle"
      />
      <Info>
        <Name>{`${user.name} ${user.paternSurname}`}</Name>
        <Position>{user.department?.name}</Position>
      </Info>
    </Card>
  );
};

export default UserMiniCard;
