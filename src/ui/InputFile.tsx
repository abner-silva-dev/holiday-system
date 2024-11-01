import React, { useState } from 'react';
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
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFile: React.FC<PropsInputFile> = ({ onChange }) => {
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const name = file.name;
      setFileName(name);
      onChange(event); // Llama a la función onChange pasada como prop
    }
  };

  // Función para acortar el nombre del archivo y dejar solo la extensión
  const getShortName = (name: string) => {
    const maxLength = 20; // Longitud máxima antes de truncar
    if (name.length <= maxLength) return name;
    return `${name.slice(0, maxLength - 4)}...${name.slice(-4)}`; // Mantiene los últimos 4 caracteres (ejemplo: .pdf)
  };

  return (
    <Group>
      <span>
        {fileName ? getShortName(fileName) : 'No se ha seleccionado ningún archivo.'}
      </span>
      <Input as="label">
        <input
          type="file"
          style={{ display: 'none' }}
          accept="application/pdf" // Puedes modificarlo si deseas aceptar otros tipos de archivo
          onChange={handleFileChange}
        />
        <HiOutlineArrowUpTray />
        <span>Seleccionar Archivo...</span>
      </Input>
    </Group>
  );
};

export default InputFile;
