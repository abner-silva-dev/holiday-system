import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from '../../ui/Heading';
import InputFile from '../../ui/InputFile';
import Button from '../../ui/Button';
import { HiCheckCircle, HiXCircle } from 'react-icons/hi';

const StateIcon = styled.div`
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;

  svg {
    height: 3rem;
    width: 3rem;
  }
`;

const Field = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
  align-items: end;
`;

const DocumentMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 3rem 8rem;
`;

const FilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Label = styled.label`
  font-size: 1.6rem;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  align-self: center;
`;

const Content = styled.div``;

const WatchButton = styled(Button)`
  width: 50%;
  justify-self: center;
`;

const SaveButton = styled(Button)`
  justify-self: center;
  margin: 5rem auto;
`;

interface DocumentsProps {}

const Documents: React.FC<DocumentsProps> = () => {
  const [files, setFiles] = useState<(File | null)[]>(Array(4).fill(null));  // Array of File objects
  const [fileNames, setFileNames] = useState<string[]>(Array(4).fill('Seleccionar archivo'));  // Array of file names

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = event.target.files?.[0];
    if (file) {
      const newFiles = [...files];
      newFiles[index] = file;
      setFiles(newFiles);

      const newFileNames = [...fileNames];
      newFileNames[index] = file.name;
      setFileNames(newFileNames);
    }
  };

  const handlePreview = (index: number) => {
    const file = files[index];
    const documentName = fileNames[index];

    if (file) {
      const url = URL.createObjectURL(file); // Obtenemos la URL del archivo

      // Abre el PDF en una nueva pestaña
      const newWindow = window.open(url, '_blank');

      // Esperamos a que el archivo se haya cargado para establecer el nombre
      if (newWindow) {
        newWindow.document.title = documentName; // Establecemos el nombre del archivo en el título de la nueva ventana
      }
    } else {
      alert('Por favor, selecciona un archivo primero.');
    }
  };

  return (
    <DocumentMain>
      <Heading as="h2">Documentos de Empleado</Heading>
      <Content>
        <FilesContainer>
          {[
            'Curriculum Vitae',
            'Acta de Nacimiento',
            'CURP',
            'Comprobante de Domicilio',
            'Identificación Oficial (INE)',
            'Número del IMSS (Pre-afiliación o documento del IMSS)',
            'RFC (constancia de situación fiscal SAT)',
            'Crédito INFONAVIT',
            'AFORE',
            '2 Cartas de Recomendación Laborales',
            'Estado de Cuenta Bancario a nombre del Empleado (BBVA o Santander)',
            'Comprobante de Estudios y Cédula Profesional en su caso',
            'Licencia Vigente (en caso de requerir)',
          ].map((label, index) => (
            <Field key={index}>
              <Group>
                <StateIcon>
                  {files[index] ? (
                    <HiCheckCircle color="green" />
                  ) : (
                    <HiXCircle color="red" />
                  )}
                </StateIcon>
                <Label>{label}</Label>
              </Group>
              <InputFile
                onChange={(event) => handleFileChange(event, index)}
                nameFile={fileNames[index]}
              />
              <WatchButton $variation="secondary" onClick={() => handlePreview(index)}>
             Ver
              </WatchButton>
            </Field>
          ))}
          <SaveButton $variation="confirm" $size="medium">
            Guardar
          </SaveButton>
        </FilesContainer>
      </Content>
    </DocumentMain>
  );
};

export default Documents;
