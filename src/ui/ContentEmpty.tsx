import styled, { css } from 'styled-components';

import { HiPuzzlePiece } from 'react-icons/hi2';

const sizes = {
  small: css`
    font-size: 2rem;

    & svg {
      height: 8rem !important;
      width: 8rem !important;
    }
  `,
  medium: css`
    font-size: 2.5rem;

    & svg {
      height: 10rem !important;
      width: 10rem !important;
    }
  `,
  large: css`
    font-size: 4rem;

    & svg {
      height: 12rem !important;
      width: 12rem !important;
    }
  `,
};

interface PropsContentEmpty {
  $size?: 'small' | 'medium' | 'large';
}

const ContentEmptyStyled = styled.span<PropsContentEmpty>`
  color: var(--color-grey-400);
  line-height: 1.2;
  font-weight: 600;
  font-size: 2.5rem;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  gap: 2.4rem;
  & svg {
    height: 10rem !important;
    width: 10rem !important;
    fill: var(--color-grey-300);
  }

  ${(props) => sizes[props.$size!]}
`;

const ContentEmpty: React.FC<PropsContentEmpty> = ({ $size = 'medium' }) => {
  return (
    <ContentEmptyStyled $size={$size}>
      <HiPuzzlePiece />
      <span>No hay datos para mostrar</span>
    </ContentEmptyStyled>
  );
};

export default ContentEmpty;
