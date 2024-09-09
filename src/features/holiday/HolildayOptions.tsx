import styled from 'styled-components';

const AreaContainer = styled.div`
  background-color: var(--color-grey-300);
  padding: 1rem;
  border-radius: 9px;
`;

const ButtonOption = styled.button`
  border: none;
  background-color: var(--color-green-700);
  color: var(--color-grey-200);
  padding: 0.6rem;
  border-radius: 9px;
`;

const ButtonSpacing = styled.div`
  display: flex;
  width: 18rem;
  justify-content: space-between;
`;

const HolidayOptions = () => {
  return (
    <AreaContainer>
      <ButtonSpacing>
        <ButtonOption>Solicitudes</ButtonOption>
        <ButtonOption>Historial</ButtonOption>
      </ButtonSpacing>
    </AreaContainer>
  );
};

export default HolidayOptions;
