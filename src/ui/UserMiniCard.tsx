import styled from 'styled-components';
import UserPhoto from '../features/users/UserPhoto';

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

const UserMiniCard = () => {
  return (
    <Card>
      <UserPhoto
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuHL8dmoC8QdMy4vgvrdIt0qq-9e0jEcPmg&s"
        $size="small"
        $type="circle"
      />
      <Info>
        <Name>Andrew Zaragoza</Name>
        <Position>Gerente de TI</Position>
      </Info>
    </Card>
  );
};

export default UserMiniCard;
