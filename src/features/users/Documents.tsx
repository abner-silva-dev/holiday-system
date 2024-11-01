import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from '../../ui/Heading';
import InputFile from '../../ui/InputFile';
import Button from '../../ui/Button';
import { HiCheckCircle, HiXCircle } from 'react-icons/hi';

const StateIcon = styled.div`
  height: 2rem; /* Aumenta el tamaño */
  width: 2rem; /* Aumenta el tamaño */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;

  svg {
    height: 3rem; /* Ajusta el tamaño del icono */
    width: 3rem; /* Ajusta el tamaño del icono */
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
  padding: 3rem 4rem;
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

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`;

const WatchButton = styled(Button)`
  width: 50%;
  justify-self: center;
`;

const SaveButton = styled(Button)`
  width: 40%;
  justify-self: center;
  margin: 5rem auto;
`;

const Preview = styled.div`
  height: 75rem;
  width: 50rem;
`;

const Documents = () => {
  const [files, setFiles] = useState(Array(4).fill(null));
  const [fileNames, setFileNames] = useState(Array(4).fill('Seleccionar archivo'));
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const newFiles = [...files];
      newFiles[index] = file;
      setFiles(newFiles);

      const newFileNames = [...fileNames];
      newFileNames[index] = file.name;
      setFileNames(newFileNames);
    }
  };

  const handlePreview = (index) => {
    const file = files[index];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
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
                nameFile={fileNames[index]}
                onChange={(event) => handleFileChange(event, index)}
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
        <Preview>
          {previewUrl && (
            <embed src={previewUrl} type="application/pdf" width="500px" height="750px" />
          )}
        </Preview>
      </Content>
    </DocumentMain>
  );
};

export default Documents;
