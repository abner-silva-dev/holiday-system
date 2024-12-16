import styled from 'styled-components';
import Heading from '../../../../shared/ui/Heading';
import { useArchive } from './useArchive';
import { useEffect, useState } from 'react';
import { HiCheckCircle, HiOutlineCloudArrowUp, HiXCircle } from 'react-icons/hi2';
import InputFile from '../../../../shared/ui/InputFile';
import Button from '../../../../shared/ui/Button';
import { useCreateArchive } from './useCreateArchive';
import { API_DAI_BASE } from '../../../../config';
import { useUpdateArchive } from './useUpdateArchive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 5rem 8rem;
`;

const DocumentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`;

const DocumentForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
  align-items: end;
`;

const DocumentGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StatusIcon = styled.div`
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

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const PreviewButton = styled(Button)<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'inline-flex' : 'none')};
`;

const UploadButton = styled(Button)<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'inline-flex' : 'none')};
  align-items: center;
  justify-content: center;
  gap: 0.7rem;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const fetchFile = async (url: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const fileName = url.split('/').pop();
    return new File([blob], fileName || '', { type: blob.type });
  } catch (error) {
    console.error('Error fetching file:', error);
    return null;
  }
};

const openFilePreview = (file: File | null) => {
  if (file) {
    const url = URL.createObjectURL(file);
    const previewWindow = window.open(url, '_blank');
    if (previewWindow) previewWindow.document.title = file.name;
  } else {
    alert('Por favor, selecciona un archivo primero.');
  }
};

// Main component
const CreateArchive: React.FC = () => {
  const { archive, isPending } = useArchive();
  const { createArchive, isCreating } = useCreateArchive();
  const { updateArchive } = useUpdateArchive();

  const isEditing = Boolean(archive);

  const documentFields = [
    { name: 'curriculumVitae', label: 'Curriculum Vitae' },
    { name: 'actaNacimiento', label: 'Acta de Nacimiento' },
    { name: 'curp', label: 'CURP' },
    { name: 'comprobanteDomicilio', label: 'Comprobante de Domicilio' },
    { name: 'ine', label: 'Identificación Oficial (INE)' },
    { name: 'imssDoc', label: 'Número del IMSS (Pre-afiliación o documento del IMSS)' },
    { name: 'rfc', label: 'RFC (constancia de situación fiscal SAT)' },
    { name: 'creditoInfonavit', label: 'Crédito INFONAVIT' },
    { name: 'afore', label: 'AFORE' },
    { name: 'cartaRecomentacion', label: '2 Cartas de Recomendación Laborales' },
    {
      name: 'estadoCuenta',
      label: 'Estado de Cuenta Bancario a nombre del Empleado (BBVA o Santander)',
    },
    {
      name: 'comprobanteEstudiosCelula',
      label: 'Comprobante de Estudios y Cédula Profesional en su caso',
    },
    { name: 'licenciaConducir', label: 'Licencia Vigente (en caso de requerir)' },
  ];

  const [files, setFiles] = useState<{ [key: string]: File | null }>({});

  useEffect(() => {
    (async () => {
      if (archive) {
        const filePromises = documentFields.map(async ({ name }) => {
          if (archive[name]) {
            return {
              [name]: await fetchFile(`${API_DAI_BASE}/archive/${archive[name]}`),
            };
          }
          return { [name]: null };
        });
        const fetchedFiles = await Promise.all(filePromises);
        setFiles(Object.assign({}, ...fetchedFiles));
      }
    })();
  }, [archive]);

  const handleFileChange = (name: string, file: File | null) => {
    setFiles((prevFiles) => ({ ...prevFiles, [name]: file }));
  };

  const handleFileSubmit = (event: React.FormEvent, name: string, file: File | null) => {
    event.preventDefault();

    if (!name || !file) return;

    const formData = new FormData();
    formData.append(name, file);

    if (isEditing) {
      updateArchive({ newData: formData });
    } else {
      createArchive(formData);
    }
  };

  if (isPending || isCreating) return null;

  return (
    <Container>
      <Heading as="h2">Documentos de Empleado</Heading>
      <DocumentList>
        {documentFields.map(({ name, label }) => (
          <DocumentForm
            key={name}
            onSubmit={(e) => handleFileSubmit(e, name, files[name])}
          >
            <DocumentGroup>
              <StatusIcon>
                {archive?.[name] ? (
                  <HiCheckCircle color="green" />
                ) : (
                  <HiXCircle color="red" />
                )}
              </StatusIcon>
              <span>{label}</span>
            </DocumentGroup>
            <InputFile
              onChange={(file) => handleFileChange(name, file)}
              file={files[name]}
            />
            {files[name] && (
              <ActionButtons>
                <PreviewButton
                  $variation="secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    openFilePreview(files[name]);
                  }}
                  visible={true}
                >
                  Ver
                </PreviewButton>

                <UploadButton $variation="confirm" $size="medium" visible={true}>
                  <HiOutlineCloudArrowUp />
                  Guardar
                </UploadButton>
              </ActionButtons>
            )}
          </DocumentForm>
        ))}
      </DocumentList>
    </Container>
  );
};

export default CreateArchive;

// import styled from 'styled-components';
// import Heading from '../../../ui/Heading';
// import { useArchive } from './useArchive';
// import { useEffect, useState } from 'react';
// import { HiCheckCircle, HiOutlineCloudArrowUp, HiXCircle } from 'react-icons/hi2';
// import InputFile from '../../../ui/InputFile';
// import Button from '../../../ui/Button';
// import { useForm } from 'react-hook-form';
// import { useCreateArchive } from './useCreateArchive';
// import { API_DAI_BASE } from '../../../config';
// import { useUpdateArchive } from './useUpdateArchive';

// // Styled components
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 4rem;
//   padding: 5rem 8rem;
// `;

// const DocumentList = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2.8rem;
// `;

// const DocumentForm = styled.form`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   column-gap: 1rem;
//   align-items: end;
// `;

// const DocumentGroup = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
// `;

// const StatusIcon = styled.div`
//   height: 2rem;
//   width: 2rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #fff;
//   border-radius: 50%;

//   svg {
//     height: 3rem;
//     width: 3rem;
//   }
// `;

// const ActionButtons = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 2rem;
// `;

// const PreviewButton = styled(Button)<{ visible: boolean }>`
//   display: ${({ visible }) => (visible ? 'inline-flex' : 'none')};
// `;

// const UploadButton = styled(Button)<{ visible: boolean }>`
//   display: ${({ visible }) => (visible ? 'inline-flex' : 'none')};
//   align-items: center;
//   justify-content: center;
//   gap: 0.7rem;

//   & svg {
//     width: 2.4rem;
//     height: 2.4rem;
//   }
// `;

// // Helper functions
// const fetchFile = async (url: string) => {
//   try {
//     const response = await fetch(url);
//     const blob = await response.blob();
//     const fileName = url.split('/').pop();
//     return new File([blob], fileName || '', { type: blob.type });
//   } catch (error) {
//     console.error('Error fetching file:', error);
//     return null;
//   }
// };

// const openFilePreview = (file: File) => {
//   if (file) {
//     const url = URL.createObjectURL(file);
//     const previewWindow = window.open(url, '_blank');
//     if (previewWindow) previewWindow.document.title = file.name;
//   } else {
//     alert('Por favor, selecciona un archivo primero.');
//   }
// };

// // Main component
// const CreateArchive: React.FC = () => {
//   const { archive, isPending } = useArchive();

//   const [cvFile, setCvFile] = useState<File | null>(null);

//   const { createArchive, isCreating } = useCreateArchive();
//   const { updateArchive } = useUpdateArchive();

//   const isEditing = Boolean(archive);

//   useEffect(() => {
//     (async () => {
//       if (archive?.curriculumVitae)
//         setCvFile(await fetchFile(`${API_DAI_BASE}/archive/${archive.curriculumVitae}`));
//     })();
//   }, [archive]);

//   const handleFileSubmit = (event, { name, file }) => {
//     event.preventDefault();

//     if (!name || !file) return;

//     const formData = new FormData();
//     formData.append(name, file);

//     if (isEditing) {
//       updateArchive({ newData: formData });
//     } else {
//       createArchive(formData);
//     }
//   };

//   if (isPending || isCreating) return null;

//   return (
//     <Container>
//       <Heading as="h2">Documentos de Empleado</Heading>
//       <DocumentList>
//         <DocumentForm
//           onSubmit={(e) => handleFileSubmit(e, { name: 'curriculumVitae', file: cvFile })}
//         >
//           <DocumentGroup>
//             <StatusIcon>
//               {cvFile ? <HiCheckCircle color="green" /> : <HiXCircle color="red" />}
//             </StatusIcon>
//             <span>Curriculum Vitae</span>
//           </DocumentGroup>
//           <InputFile onChange={(file) => setCvFile(file)} file={cvFile} />
//           {cvFile && (
//             <ActionButtons>
//               <PreviewButton
//                 $variation="secondary"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   openFilePreview(cvFile);
//                 }}
//                 visible={true}
//               >
//                 Ver
//               </PreviewButton>

//               <UploadButton $variation="confirm" $size="medium" visible={true}>
//                 <HiOutlineCloudArrowUp />
//                 Guardar
//               </UploadButton>
//             </ActionButtons>
//           )}
//         </DocumentForm>
//       </DocumentList>
//     </Container>
//   );
// };

// export default CreateArchive;
