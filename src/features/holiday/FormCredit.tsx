import styled from 'styled-components';
import Button from '../../ui/Button';
import { HiChevronLeft } from 'react-icons/hi2';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { UserInfo } from '../users/types';
import { useUpdateUser } from '../users/useUpdateUser';

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
  gap: 1rem;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: #e03131;
`;

interface CreditEdit {
  credit: number;
  creditPast: number;
  creditFuture: number;
}

interface PropsFormCredit {
  user: UserInfo;
}

const FormCredit: React.FC<PropsFormCredit> = ({ user }) => {
  const [showEdit, setShowEdit] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreditEdit>({
    defaultValues: {
      creditPast: user.creditPast?.balance,
      credit: user.credit?.balance,
      creditFuture: user.creditFuture?.balance,
    },
  });

  const { updateUser } = useUpdateUser();

  if (!user) return null;

  const {
    daysGrantedBySeniority,
    daysGrantedBySeniorityPast,
    daysGrantedBySeniorityFuture,
    credit,
    creditFuture,
    creditPast,
  } = user;

  if (
    !daysGrantedBySeniority ||
    !daysGrantedBySeniorityPast ||
    !daysGrantedBySeniorityFuture ||
    !credit ||
    !creditFuture ||
    !creditPast
  )
    return null;

  const onClose = () => {
    setShowEdit(!showEdit);
    reset();
  };

  const onSubmit = (data: CreditEdit) => {
    updateUser({
      newUser: {
        creditPast: { ...creditPast, balance: data.creditPast || creditPast.balance },
        credit: { ...credit, balance: data.credit },
        creditFuture: { ...creditFuture, balance: data.creditFuture },
      },
      id: user?.id || '',
    });
  };

  return (
    <>
      <EditButton onClick={onClose} type="button">
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
            {daysGrantedBySeniorityPast.balance ? (
              <Group>
                <label>Crédito Pasado</label>
                <CreditInput
                  type="number"
                  id="creditPast"
                  {...register('creditPast', {
                    required: 'Este campo es obligatorio',
                    min: { value: 0, message: 'El crédito debe ser al menos 0' },
                    max: {
                      value: daysGrantedBySeniorityPast.balance,
                      message: `El crédito no debe ser mayor que ${daysGrantedBySeniorityPast.balance}`,
                    },
                  })}
                />
                {errors.creditPast && (
                  <ErrorMessage>{errors.creditPast.message}</ErrorMessage>
                )}
              </Group>
            ) : null}

            <Group>
              <label>Crédito Presente</label>
              <CreditInput
                type="number"
                id="credit"
                {...register('credit', {
                  required: 'Este campo es obligatorio',
                  min: { value: 0, message: 'El crédito debe ser al menos 0' },
                  max: {
                    value: daysGrantedBySeniority.balance,
                    message: `El crédito no debe ser mayor que ${daysGrantedBySeniority.balance}`,
                  },
                })}
              />
              {errors.credit && <ErrorMessage>{errors.credit.message}</ErrorMessage>}
            </Group>

            <Group>
              <label>Crédito Futuro</label>
              <CreditInput
                type="number"
                id="creditFuture"
                {...register('creditFuture', {
                  required: 'Este campo es obligatorio',
                  min: { value: 0, message: 'El crédito debe ser al menos 0' },
                  max: {
                    value: daysGrantedBySeniorityFuture.balance,
                    message: `El crédito no debe ser mayor que ${daysGrantedBySeniorityFuture.balance}`,
                  },
                })}
              />
              {errors.creditFuture && (
                <ErrorMessage>{errors.creditFuture.message}</ErrorMessage>
              )}
            </Group>
            <SubmitButton $variation="confirm">Aceptar</SubmitButton>
          </Form>
        </EditModal>
      )}
    </>
  );
};

export default FormCredit;
