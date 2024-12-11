import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from '../../../../shared/ui/Heading';
import InputFile from '../../../../shared/ui/InputFile';
import Button from '../../../../shared/ui/Button';

import { HiCheckCircle, HiXCircle } from 'react-icons/hi';
import { HiOutlineCloudArrowUp } from 'react-icons/hi2';

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

// const WatchButton = styled(Button)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.7rem;

//   & svg {
//     width: 2.4rem;
//     height: 2.4rem;
//   }

const WatchButton = styled(Button)<{ visible: boolean }>`
  display: ${({ visible }) =>
    visible ? 'inline-flex' : 'none'}; /* Mostrar/ocultar según el estado */
`;

const SaveButton = styled(Button)<{ visible: boolean }>`
  display: ${({ visible }) =>
    visible ? 'inline-flex' : 'none'}; /* Mostrar/ocultar según el estado */
  align-items: center;
  justify-content: center;
  gap: 0.7rem;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const Documents: React.FC<DocumentsProps> = () => {
  const [files, setFiles] = useState<(File | null)[]>(Array(4).fill(null)); // Array of File objects
  const [fileNames, setFileNames] = useState<string[]>(
    Array(4).fill('Seleccionar archivo')
  ); // Array of file names
  const [savedFiles, setSavedFiles] = useState<boolean[]>(Array(4).fill(false)); // Array to track which files are saved

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const newFiles = [...files];
      newFiles[index] = file;
      setFiles(newFiles);

      const newFileNames = [...fileNames];
      newFileNames[index] = file.name;
      setFileNames(newFileNames);

      // Reset saved status when new file is selected
      const newSavedFiles = [...savedFiles];
      newSavedFiles[index] = false;
      setSavedFiles(newSavedFiles);
    }
  };

  const handlePreview = (index: number) => {
    const file = files[index];
    const documentName = fileNames[index];

    if (file) {
      const url = URL.createObjectURL(file); // Obtener la URL del archivo
      const newWindow = window.open(url, '_blank'); // Abre el PDF en una nueva pestaña

      if (newWindow) {
        newWindow.document.title = documentName; // Establecer el nombre del archivo en el título de la nueva ventana
      }
    } else {
      alert('Por favor, selecciona un archivo primero.');
    }
  };

  const handleSave = (index: number) => {
    // Simular el proceso de guardado, por ejemplo, subir el archivo al servidor
    // En este caso, solo actualizamos el estado para reflejar que el archivo ha sido guardado

    const newSavedFiles = [...savedFiles];
    newSavedFiles[index] = true;
    setSavedFiles(newSavedFiles);
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
                  {savedFiles[index] ? ( // Si el archivo ha sido guardado, mostrar palomita verde
                    <HiCheckCircle color="green" />
                  ) : (
                    <HiXCircle color="red" /> // Si no ha sido guardado, mostrar tache rojo
                  )}
                </StateIcon>
                <Label>{label}</Label>
              </Group>
              <InputFile
                onChange={(event) => handleFileChange(event, index)} // Llamamos a handleFileChange
                nameFile={fileNames[index]} // Pasamos el nombre del archivo al componente InputFile
              />
              <Head>
                {/* Botón "Ver" solo será visible si hay un archivo cargado */}
                <WatchButton
                  $variation="secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePreview(index);
                  }}
                  visible={!!files[index]} // Solo se muestra si hay archivo cargado
                >
                  Ver
                </WatchButton>

                {/* Botón "Guardar" solo será visible si hay un archivo cargado */}
                <SaveButton
                  $variation="confirm"
                  $size="medium"
                  visible={!!files[index]} // Solo se muestra si hay archivo cargado
                  onClick={() => handleSave(index)} // Llamamos a handleSave cuando el usuario haga clic
                >
                  <HiOutlineCloudArrowUp />
                  Guardar
                </SaveButton>
              </Head>
            </Field>
          ))}
        </FilesContainer>
      </div>
    </DocumentMain>
  );
};

export default Documents;
