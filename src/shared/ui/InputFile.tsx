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
  onChange: (event: File) => void;
  file: File | null;
}

const InputFile: React.FC<PropsInputFile> = ({ onChange, file }) => {
  const fileName = file?.name || '';

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  const getShortName = (name: string) => {
    const maxLength = 20;
    if (name.length <= maxLength) return name;
    return `${name.slice(0, maxLength - 4)}...${name.slice(-4)}`;
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
