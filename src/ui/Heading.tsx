import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type HeadingProps = {
  as: 'h1' | 'h2' | 'h3';
  children: ReactNode;
};

const StyledHeading = styled.h1<HeadingProps>`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
`;

function Heading({ as, children }: HeadingProps) {
  return <StyledHeading as={as}>{children}</StyledHeading>;
}

export default Heading;
