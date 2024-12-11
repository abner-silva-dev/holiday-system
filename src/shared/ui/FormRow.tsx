import { ReactElement } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
`;

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

type Props = {
  children?: ReactElement<{ id: string }>;
  label: string;
};

function FormRow({ children, label }: Props) {
  return (
    <StyledFormRow>
      <Label htmlFor={children?.props.id}>{label}</Label>
      {children}
    </StyledFormRow>
  );
}

export default FormRow;
