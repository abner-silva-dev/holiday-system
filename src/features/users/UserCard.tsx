import React from 'react';

import styled from 'styled-components';
import { joinName } from './../../utils/helpers';

const UserInfo = styled.aside`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 9px;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  grid-row: 1/-1;
`;

const UserImage = styled.div`
  &image {
    border-radius: 50%;
    border: 2px solid #991b1b;
    width: 4rem;
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;

  & span:first-child {
    color: red;
  }
`;

const UserData = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  row-gap: 1rem;
`;

const TextTitle = styled.main`
  color: var(--color-red-800);
  font-weight: bold;
`;

const UserCard = ({ user }) => {
  const {
    employNumber,
    name,
    paternSurname,
    motherSurname,
    seniority,
    // dateHiring,
    // Seniority,
    // email,
    // phoneNumber,
    // enterprise,
    department,
  } = user;

  return (
    <UserInfo>
      <UserImage>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrDpzWSWvT8WQKdSxpdEaoev3e0uixuPvdw&s"
          alt=""
        />
      </UserImage>
      <UserData>
        <Group>
          <TextTitle>No. Empleado</TextTitle>
          <span>{employNumber}</span>
        </Group>
        <Group>
          <TextTitle>Departamento</TextTitle>
          <span>{department}</span>
        </Group>
        <Group>
          <TextTitle>Nombre</TextTitle>
          <span>{joinName({ motherSurname, name, paternSurname })}</span>
        </Group>
        <Group>
          <TextTitle>Jefe directo</TextTitle>
          <span>Ricardo Anaya Obrador</span>
        </Group>
        <Group>
          <TextTitle>Antiguedad</TextTitle>
          <span>{seniority}</span>
        </Group>
        <Group>
          <TextTitle>Puesto</TextTitle>
          <span>Hombre de negocios</span>
        </Group>
      </UserData>
    </UserInfo>
  );
};

export default UserCard;
