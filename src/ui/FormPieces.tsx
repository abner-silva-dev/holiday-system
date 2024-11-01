import styled from 'styled-components';
import Heading from './Heading';

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 3rem;
  row-gap: 4rem;

  margin-bottom: 4rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid var(--color-grey-200);
  width: 100%;
`;

export const InitialContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form``;

export const Label = styled.label``;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  border-radius: 9px;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
`;

export const Title = styled(Heading)`
  margin-bottom: 3rem;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Section = styled.div`
  /* margin: 0 auto; */
  /* width: 120rem; */
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.6rem;
  border-radius: 9px;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
`;

export const FieldRadio = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  & input {
    width: 20%;
  }
`;

export const FieldCheck = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  & input {
    width: 30%;
    height: 1.6rem;
  }
`;

export const Page = styled.div`
  padding: 4rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* overflow-y: scroll; */
`;

export const EmployControllers = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const PageChange = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Percentage = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  & span {
    font-size: 2rem;
  }
`;
