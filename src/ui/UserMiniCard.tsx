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
  font-size: 1.4rem;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20rem;
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
