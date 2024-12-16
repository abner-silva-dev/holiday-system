import styled from 'styled-components';
import { FC } from 'react';

const StyledEmpty = styled.p`
  text-align: center;
`;

type EmptyProps = {
  resourceName: string;
};

const Empty: FC<EmptyProps> = ({ resourceName }) => {
  return <StyledEmpty>No se pudieron encontrar los {resourceName}</StyledEmpty>;
};

export default Empty;
