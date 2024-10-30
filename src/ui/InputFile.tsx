import { HiOutlineArrowUpTray } from 'react-icons/hi2';
import styled from 'styled-components';

const Input = styled.label`
  display: flex;
  justify-content: center;
  gap: 1rem;

  font-weight: 500;
  padding: 1rem;
  background-color: #339af0;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.4rem;
  transition: background-color 0.3s;

  & span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;
    font-size: 1.4rem;
  }
  & svg {
    height: 2rem;
    width: 2rem;
  }
  &:hover {
    background-color: #228be6;
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: center;
`;

interface PropsInputFile {
  nameFile: string;
}

const InputFile: React.FC<PropsInputFile> = ({ nameFile }) => {
  return (
    <>
      <Group>
        <span>{nameFile}</span>
        <Input as="label">
          <input type="file" style={{ display: 'none' }} />
          <HiOutlineArrowUpTray />
          <span>Seleccionar Archivo...</span>
        </Input>
      </Group>
    </>
  );
};

export default InputFile;
