import styled from 'styled-components';

const Float = styled.div`
  position: absolute;
  width: 30rem;
  border-radius: 9px;
  top: 6.3rem;
  right: 0px;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  z-index: 80;

  &::after {
    position: absolute;
    border-radius: 5px;
    top: -0.9rem;
    left: 75%;
    content: '';
    display: inline-block;
    width: 3rem;
    height: 3rem;
    background-color: var(--color-grey-0);
    z-index: -1;
    border: 1px solid var(--color-grey-200);
    box-shadow: var(--shadow-lg);
    transform: rotate(45deg);
  }
`;
// const Filters = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

const Option = styled.button`
  width: 100%;
  height: 5rem;
  border: none;
  border: 1px solid var(--color-grey-200);
  color: var(--color-grey-900);
  background-color: var(--color-grey-0);

  &:first-child {
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
  }

  &:last-child {
    border-bottom-left-radius: 9px;
    border-bottom-right-radius: 9px;
    /* border-bottom: none; */
  }

  &:hover {
    background-color: var(--color-blue-100);
  }
`;
interface PropsFloatDocuments {
  onClose: () => void;
}

const FloatDocuments: React.FC<PropsFloatDocuments> = ({ onClose }) => {
  return (
    <Float onClick={onClose}>
      <Option>Contrato de Trabajo</Option>
      <Option>Contrato de Confidencialidad</Option>
      <Option>Carta de Renuncia</Option>
      <Option>Finiquito</Option>
      <Option>Acta de Demanda</Option>
    </Float>
  );
};

export default FloatDocuments;
