import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from '../../ui/Heading';
import InputFile from '../../ui/InputFile';
import Button from '../../ui/Button';
import { HiCheckCircle, HiXCircle } from 'react-icons/hi';
import { HiOutlineCloudArrowUp } from 'react-icons/hi2';
import { LiaSave } from 'react-icons/lia';

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
  padding: 5rem 8rem;
`;

const FilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
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

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const WatchButton = styled(Button)``;

const SaveButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const Documents = () => {
  const [files, setFiles] = useState(Array(4).fill(null)); // Almacenamos los archivos cargados
  const [fileNames, setFileNames] = useState(Array(4).fill('Seleccionar archivo')); // Almacenamos los nombres de los archivos

  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const newFiles = [...files];
      newFiles[index] = file; // Guardamos el archivo cargado en el índice correspondiente
      setFiles(newFiles);

      const newFileNames = [...fileNames];
      newFileNames[index] = file.name; // Guardamos el nombre del archivo
      setFileNames(newFileNames);
    }
  };

  const handlePreview = (index) => {
    const file = files[index];
    if (file) {
      const url = URL.createObjectURL(file); // Obtenemos la URL del archivo para poder mostrarlo

      const documentName = fileNames[index]; // Usamos el nombre del archivo cargado

      // Abrimos el PDF en una nueva ventana a pantalla completa
      const newWindow = window.open(url, '_blank');
      newWindow.document.write(`
        <html>
          <head><title>${documentName}</title></head> <!-- Usamos el nombre del archivo como título -->
          <body style="margin: 0; padding: 0; overflow: hidden;">
            <embed src="${url}" type="application/pdf" width="100%" height="100%" />
          </body>
        </html>
      `);
      newWindow.document.close(); // Cerramos el documento para finalizar el proceso de carga
    }
  };

  return (
    <DocumentMain>
      <Heading as="h2">Documentos de Empleado</Heading>

      <div>
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
                onChange={(event) => handleFileChange(event, index)} // Llamamos a handleFileChange
                nameFile={fileNames[index]} // Pasamos el nombre del archivo al componente InputFile
              />
              <Head>
                <WatchButton $variation="secondary" onClick={() => handlePreview(index)}>
                  Ver
                </WatchButton>
                <SaveButton $variation="confirm" $size="medium">
                  <HiOutlineCloudArrowUp />
                  {/* <LiaSave /> */}
                  Guardar
                </SaveButton>
              </Head>
            </Field>
          ))}
        </FilesContainer>

        {/* <Preview>
          {previewUrl && (
            <embed src={previewUrl} type="application/pdf" width="500px" height="750px" />
          )}
        </Preview> */}
      </div>
    </DocumentMain>
  );
};

export default Documents;
