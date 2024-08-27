import { ReactNode } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
`;

const StyledFormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

type Props = {
  children?: ReactNode;
  label: string;
};

function FormRow({ children, label }: Props) {
  return (
    <StyledFormRow>
      <Label htmlFor={children?.id}>{label}</Label>
      {children}
    </StyledFormRow>
  );
}

export default FormRow;
