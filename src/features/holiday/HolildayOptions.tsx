import styled from 'styled-components';

const AreaContainer = styled.div`
  background-color: var(--color-grey-0);
  padding: 1rem;
  border-radius: 9px;
  padding: 0.6rem;
  box-shadow: var(--shadow-md);
`;

const ButtonOptionActive = styled.button`
  border: none;
  padding: 0.5rem 0.9rem;
  background-color: var(--color-green-700);
  color: #e9fdf0;
  font-weight: bold;
  border-radius: 9px;

  &:hover {
    background-color: #208848;
  }
`;

const ButtonOption = styled.button`
  border: none;
  padding: 0.5rem 0.9rem;
  background-color: transparent;
  color: var(--color-grey-600);
  font-weight: bold;
  /* border: 1px solid var(--color-green-700); */
  border-radius: 9px;
`;

const ButtonSpacing = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: space-between;
`;

const HolidayOptions = () => {
  return (
    <AreaContainer>
      <ButtonSpacing>
        <ButtonOptionActive>Solicitudes</ButtonOptionActive>
        <ButtonOption>Historial</ButtonOption>
      </ButtonSpacing>
    </AreaContainer>
  );
};

export default HolidayOptions;
