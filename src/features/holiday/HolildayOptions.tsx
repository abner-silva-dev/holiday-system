import styled from 'styled-components';
import Row from '../../ui/Row';

const AreaContainer = styled.div`
  background-color: var(--color-grey-0);

  padding: 1rem;
  border-radius: 9px;
  padding: 0.6rem;
  box-shadow: var(--shadow-md);
`;

const ButtonOptionActive = styled.button`
  background-color: var(--color-green-700);
  color: #e9fdf0;
  font-weight: bold;

  border: none;
  padding: 0.5rem 0.9rem;
  border-radius: 9px;

  &:hover {
    background-color: #208848;
  }
`;

const ButtonOption = styled.button`
  background-color: transparent;
  color: var(--color-grey-600);

  border: none;
  padding: 0.5rem 0.9rem;
  font-weight: bold;
  border-radius: 9px;
`;

const ButtonSpacing = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: space-between;
`;

// const BtnIcon = styled.button`
//   padding: 1rem;
//   font-weight: 500;
//   gap: 1rem;

//   display: flex;
//   align-items: center;

//   color: #fff;
//   background-color: var(--color-green-700);
//   box-shadow: var(--shadow-sm);
//   border-radius: var(--border-radius-lg);
//   border: 1px solid var(--color-grey-200);

//   &:hover {
//     background-color: var(--color-green-600);
//   }

//   & svg {
//     width: 2.3rem;
//     height: 2.3rem;
//   }
// `;

const HolidayOptions = () => {
  return (
    <Row type="horizontal">
      <AreaContainer>
        <ButtonSpacing>
          <ButtonOptionActive>Solicitudes</ButtonOptionActive>
          {/* <ButtonOption>Gantt</ButtonOption> */}
        </ButtonSpacing>
      </AreaContainer>
    </Row>
  );
};

export default HolidayOptions;
