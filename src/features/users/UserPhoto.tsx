import styled, { css } from 'styled-components';

interface Props {
  $type?: 'circle' | 'square';
  $size?: 'small' | 'medium' | 'large' | 'adaptative';
  $border?: boolean;
}

const sizes = {
  small: css`
    width: 4rem;
  `,
  medium: css`
    width: 8rem;
  `,
  large: css`
    width: 16rem;
  `,
  adaptative: css`
    width: 100%;
  `,
};

const types = {
  circle: css`
    border-radius: 50%;
  `,
  square: css`
    border-radius: 3px;
  `,
};

const UserPhoto = styled.img<Props>`
  border: none;
  box-shadow: var(--shadow-sm);
  ${(props) =>
    props.$border
      ? css`
          border: 2px solid #991b1b;
        `
      : ''}

  ${(props) => sizes[props.$size!]}
  ${(props) => types[props.$type!]}
`;

UserPhoto.defaultProps = {
  $type: 'circle',
  $size: 'small',
  $border: false,
};

export default UserPhoto;
