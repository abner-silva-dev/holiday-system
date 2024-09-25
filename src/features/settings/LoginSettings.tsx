import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DraggableProvided,
} from 'react-beautiful-dnd';
import Heading from '../../ui/Heading';

const LoginSetSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-0);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 5rem 4rem;
  border-radius: 9px;
  width: 100%;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Table = styled.div`
  margin: 4rem 0;
  border-radius: 10px; /* Esquinas redondeadas */
  overflow: hidden; /* Para evitar que los bordes de las celdas sobresalgan */
  border: 1px solid var(--color-grey-200);
  /* width: 50%; */
`;

const TableHeader = styled.div`
  padding: 1rem;
  background-color: var(--color-grey-50);
  color: var(--color-grey-800);
  text-align: left;
  font-weight: bold;
  padding: 1.6rem 2.4rem;
`;

const TableCell = styled.div`
  padding: 1rem;
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  text-align: center;
  position: relative; // Para el mensaje de arrastre
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImagePreview = styled.img`
  height: 12rem;
  object-fit: cover;
  border: 2px solid var(--color-brand-700);
  border-radius: 10px;
  margin-top: 1rem;
`;

const UploadButton = styled.input`
  display: none;
`;

const LabelButton = styled.label`
  cursor: pointer;
  background-color: #007bff;
  color: var(--color-grey-0);
  padding: 10px 15px;
  border-radius: 5px;
  text-align: center;
  margin-top: 0.5rem;
`;

const ActionButton = styled.button`
  background-color: #28a745;
  color: var(--color-grey-0);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

const RemoveLastEmptySpaceButton = styled(ActionButton)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;

const DragOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 123, 255, 0.2);
  color: #007bff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  border-radius: 5px;
`;

const WarningMessage = styled.div`
  color: red;
  font-size: 1rem;
  margin-top: 1rem;
`;

const TimeContainer = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  display: flex;
  gap: 2rem;
`;

const SelectBox = styled.select`
  border: none;
  border-radius: 9px;
  padding: 0.5rem 1rem;
  color: var(--color-grey-0);
  background: linear-gradient(
    to bottom,
    var(--color-grey-600) 0%,
    var(--color-grey-700) 50%,
    var(--color-grey-800) 51%,
    var(--color-grey-900) 100%
  );
  width: 14rem;
`;

const Option = styled.option`
  background-color: var(--color-grey-0);
  color: var(--color-grey-800);
`;
const LoginSettings = () => {
  const [images, setImages] = useState<string[]>([]);
  const [draggingOverIndex, setDraggingOverIndex] = useState<number | null>(null);
  const [warning, setWarning] = useState<string | null>(null);

  useEffect(() => {
    const savedImages = localStorage.getItem('images');
    if (savedImages) {
      setImages(JSON.parse(savedImages));
    }
  }, []);

  const handleImageChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        if (!file.type.startsWith('image/')) {
          setWarning('Por favor, sube solo archivos de imagen.');
          return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
          const newImages = [...images];
          newImages[index] = reader.result as string;
          setImages(newImages);
          setWarning(null);
        };
        reader.readAsDataURL(file);
      }
    };

  const handleDrop = (index: number) => (event: React.DragEvent<HTMLTableRowElement>) => {
    event.preventDefault();
    setDraggingOverIndex(null); // Resetear el índice cuando se suelta
    const files = Array.from(event.dataTransfer.files);
    let isValid = true;

    files.forEach((file) => {
      if (!file.type.startsWith('image/')) {
        isValid = false;
      }
    });

    if (!isValid) {
      setWarning('Por favor, arrastra solo archivos de imagen.');
      return;
    }

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...images];
        newImages[index] = reader.result as string;
        setImages(newImages);
        setWarning(null);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDragOver =
    (index: number) => (event: React.DragEvent<HTMLTableRowElement>) => {
      event.preventDefault();
      setDraggingOverIndex(index); // Establecer el índice que se está arrastrando
    };

  const handleAddImage = () => {
    setImages([...images, '']);
  };

  const handleDeleteImage = (index: number) => () => {
    const newImages = [...images];
    newImages[index] = ''; // Marcamos la imagen como vacía
    setImages(newImages);
  };

  const handleRemoveLastEmptySpace = () => {
    const lastIndex = images.length - 1;
    if (lastIndex >= 0 && images[lastIndex] === '') {
      const newImages = [...images];
      newImages.pop(); // Eliminar solo el último espacio vacío
      setImages(newImages);
    }
  };

  const handleSaveChanges = () => {
    localStorage.setItem('images', JSON.stringify(images));
    alert('Cambios guardados en local storage');
  };

  const handleDragEnd = (result: DropResult) => {
    setDraggingOverIndex(null); // Resetear el índice al finalizar el drag
    if (!result.destination) return;
    const reorderedImages = Array.from(images);
    const [removed] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, removed);
    setImages(reorderedImages);
  };

  const TableHead = styled.div`
    display: grid;

    grid-template-columns: 0.5fr 1fr 2fr;
  `;

  const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  `;

  return (
    <LoginSetSection>
      <LoginContainer>
        <Heading as="h2">Pantalla de Inicio de Sesión</Heading>
        <TimeContainer>
          <label>Tiempo de Transición: </label>
          <SelectBox>
            <Option>3 segundos</Option>
            <Option>4 segundos</Option>
            <Option>5 segundos</Option>
            <Option>6 segundos</Option>
          </SelectBox>
        </TimeContainer>

        {/* TABLE */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="images">
            {(provided) => (
              <Table {...provided.droppableProps} ref={provided.innerRef}>
                <TableHead>
                  <TableHeader>Índice</TableHeader>
                  <TableHeader>Imagen</TableHeader>
                  <TableHeader>Acciones</TableHeader>
                </TableHead>
                {images.map((image, index) => (
                  <Draggable key={index} draggableId={`image-${index}`} index={index}>
                    {(provided: DraggableProvided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        onDrop={handleDrop(index)}
                        onDragOver={handleDragOver(index)}
                      >
                        <TableHead>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>
                            {draggingOverIndex === index && (
                              <DragOverlay>Arrastre y Suelte aquí</DragOverlay>
                            )}
                            {image ? (
                              <ImagePreview src={image} alt={`Imagen ${index + 1}`} />
                            ) : (
                              <p>No hay imagen seleccionada.</p>
                            )}
                          </TableCell>
                          <TableCell>
                            <ButtonsContainer>
                              <UploadButton
                                type="file"
                                accept="image/*"
                                id={`file-input-${index}`}
                                onChange={handleImageChange(index)}
                              />
                              <LabelButton htmlFor={`file-input-${index}`}>
                                Subir Imagen...
                              </LabelButton>
                              {image && (
                                <ActionButton
                                  onClick={handleDeleteImage(index)}
                                  style={{ background: 'red' }}
                                >
                                  Eliminar Imagen
                                </ActionButton>
                              )}
                            </ButtonsContainer>
                          </TableCell>
                        </TableHead>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Table>
            )}
          </Droppable>
        </DragDropContext>
        {warning && <WarningMessage>{warning}</WarningMessage>}
        <ActionButton onClick={handleAddImage}>Agregar Otra Imagen</ActionButton>
        <RemoveLastEmptySpaceButton onClick={handleRemoveLastEmptySpace}>
          Quitar Último Espacio Vacío
        </RemoveLastEmptySpaceButton>
        <ActionButton onClick={handleSaveChanges}>GUARDAR CAMBIOS</ActionButton>
      </LoginContainer>
    </LoginSetSection>
  );
};

export default LoginSettings;
