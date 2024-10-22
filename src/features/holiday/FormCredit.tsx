import styled from 'styled-components';
import Button from '../../ui/Button';
import { HiChevronLeft } from 'react-icons/hi2';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

//EDIT COMPONENT
const EditButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 1rem;
  right: 10px;
  top: 10px;
  z-index: 12;
  padding: 0.7rem 1rem;
  background-color: #dc2626;
  color: #fff;
  border-radius: 9px;
  border: none;

  & svg {
    height: 2rem;
    width: 2rem;
  }

  &:hover {
    background-color: #b91c1c;
  }
`;

const EditModal = styled.div`
  position: absolute;

  top: 50px;
  right: 12px;
  z-index: 13;
  font-size: 1.4rem;
  width: 50%;

  padding: 1.8rem 0.4rem;
  border-radius: 9px;
  border: 1.5px solid var(--color-grey-200);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
`;

const SubmitButton = styled(Button)`
  padding: 0.3rem 0.6rem;
  font-size: 1.4rem;
  margin-top: 1rem;
`;

const CreditInput = styled.input`
  /* width: rem; */
  padding: 0.5rem 0.8rem;
  text-align: center;
  border: 1px solid var(--color-grey-200);
  border-radius: 9px;
  background-color: var(--color-grey-0);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem 4rem;
  gap: 0.5rem;
`;

interface CreditEdit {
  credit: number;
  pastCredit: number;
  futureCredit: number;
}

const FormCredit = () => {
  const [showEdit, setShowEdit] = useState(false);
  const { register, handleSubmit } = useForm<CreditEdit>({});

  const onSubmit = () => {};

  return (
    <>
      <EditButton onClick={() => setShowEdit(!showEdit)} type="button">
        Editar Crédito
        <HiChevronLeft
          style={{
            transform: showEdit
              ? 'translate(0px, 0px) rotate(-90deg)'
              : 'translate(0px, 0px) rotate(0deg)',
            transition: 'transform 0.3s',
          }}
        />
      </EditButton>
      {showEdit && (
        <EditModal>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <label>Crédito Pasado</label>
            <CreditInput
              type="number"
              id="pastCredit"
              {...register('pastCredit')}
            ></CreditInput>
            <label>Crédito Presente</label>
            <CreditInput type="number" id="credit" {...register('credit')}></CreditInput>
            <label>Crédito Futuro</label>
            <CreditInput
              type="number"
              id="futureCredit"
              {...register('futureCredit')}
            ></CreditInput>
            <SubmitButton $variation="confirm">Aceptar</SubmitButton>
          </Form>
        </EditModal>
      )}
    </>
  );
};

export default FormCredit;
