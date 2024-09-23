import { HiOutlineArrowUpTray } from 'react-icons/hi2';
import styled from 'styled-components';

const InputFile = styled.input`
  display: none;
`;

const CustomButtonFile = styled.label`
  display: flex;
  justify-content: center;
  gap: 1rem;

  font-weight: 700;
  padding: 1rem 1.8rem;
  background-color: #0b7285;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.6rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0c8599;
  }

  & svg {
    height: 2rem;
    width: 2rem;
  }
`;

interface PropsFileButton {
  children: string;
}

const FileButton: React.FC<PropsFileButton> = ({ children }) => {
  return (
    <>
      <InputFile
        type="file"
        id="file"
        className="file-input"
        accept="image/png, image/jpeg"
      />
      <CustomButtonFile htmlFor="file" className="custom-button">
        <HiOutlineArrowUpTray />
        {children}
      </CustomButtonFile>
    </>
  );
};

export default FileButton;
