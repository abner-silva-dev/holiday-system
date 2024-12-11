import styled from 'styled-components';

const styledEmpty = styled.p`
  text-align: center;
`;

function Empty({ resourceName }) {
  return <styledEmpty>No se pudieron encontrar los {resourceName}</styledEmpty>;
}

export default Empty;
