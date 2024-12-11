import styled, { css } from 'styled-components';

interface Props {
  $type?: 'circle' | 'square';
  $size?: 'small' | 'medium' | 'large' | 'adaptative';
  $border?: boolean;
}

const sizes = {
  small: css`
    width: 4rem;
    height: 4rem;
  `,
  medium: css`
    width: 8rem;
    height: 8rem;
  `,
  large: css`
    width: 16rem;
    height: 16rem;
  `,
  adaptative: css`
    width: 100%;
    height: 100%;
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
  /* box-shadow: var(--shadow-sm); */
  ${(props) =>
    props.$border
      ? css`
          border: 9px solid var(--color-grey-0);
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
