import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type RowProps = {
  type?: 'horizontal' | 'vertical';
  children: ReactNode;
};

const StyledRow = styled.div<RowProps>`
  display: flex;

  ${(props) =>
    props.type === 'horizontal' &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === 'vertical' &&
    css`
      flex-direction: column;
      gap: 2.3rem;
    `}
`;

function Row({ children, type = 'vertical' }: RowProps) {
  return <StyledRow type={type}>{children}</StyledRow>;
}

export default Row;
