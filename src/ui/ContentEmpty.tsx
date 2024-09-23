import styled from 'styled-components';

import { HiPuzzlePiece } from 'react-icons/hi2';

const ContentEmptyStyled = styled.span`
  color: var(--color-grey-400);
  line-height: 1.2;
  font-weight: 600;
  font-size: 2.5rem;
  gap: 2.4rem;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  & svg {
    height: 10rem !important;
    width: 10rem !important;
    fill: var(--color-grey-300);
  }
`;

// interface PropsContentEmpty {
//   // children: string;
// }

const ContentEmpty: React.FC = () => {
  return (
    <ContentEmptyStyled>
      <HiPuzzlePiece />
      <span>No hay datos para mostrar</span>
    </ContentEmptyStyled>
  );
};

export default ContentEmpty;
