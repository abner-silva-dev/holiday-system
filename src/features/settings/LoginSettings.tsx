import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../../ui/Button';
import Heading from '../../ui/Heading';
import FileButton from '../../ui/FileButton';

const LoginSetSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  padding: 2rem 0;
  border-radius: 9px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem 5rem;
`;

const ImageSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  border-bottom: 3px solid var(--color-grey-200);
  margin-bottom: 2rem;
  padding: 3rem 11rem;
`;

const ImagePreview = styled.img`
  height: 20rem;
  object-fit: cover;
  border: 1px solid #ccc;
  margin-top: 1rem;
`;

const UploadButton = styled.input`
  display: none; // Ocultar el input de archivo
`;

const LabelButton = styled.label`
  cursor: pointer;
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-align: center;
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

const SettingButton = styled(Button)`
  height: 50%;
  width: 70%;
  align-self: center;
  justify-self: center;
`;

const SlotsButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Option = styled.option`
  background-color: var(--color-grey-0);
  color: var(--color-grey-800);
`;

const LoginSettings = () => {
  const [images, setImages] = useState<string[]>(Array(4).fill('')); // Inicializar un array vacío

  // Cargar imágenes del local storage al iniciar
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
        const reader = new FileReader();
        reader.onloadend = () => {
          const newImages = [...images];
          newImages[index] = reader.result as string; // Actualiza la imagen en el índice correspondiente
          setImages(newImages); // Actualiza el estado con la nueva imagen
        };
        reader.readAsDataURL(file); // Lee el archivo como URL de datos
      }
    };

  const handleSaveChanges = () => {
    localStorage.setItem('images', JSON.stringify(images));
    alert('Cambios guardados en local storage');
  };

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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          {images.map((image, index) => (
            <ImageSet key={index}>
              <Heading as="h2">IMAGEN {index + 1}: </Heading>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  alignItems: 'center',
                }}
              >
                {image ? (
                  <ImagePreview src={image} alt={`Imagen ${index + 1}`} />
                ) : (
                  <p>No hay imagen seleccionada.</p>
                )}
                <UploadButton
                  type="file"
                  accept="image/*"
                  id={`file-input-${index}`}
                  onChange={handleImageChange(index)} // Cambiar imagen
                />
                <LabelButton htmlFor={`file-input-${index}`}>Subir Imagen...</LabelButton>
              </div>
            </ImageSet>
          ))}
        </div>
        <SettingButton $variation="confirm" onClick={handleSaveChanges}>
          GUARDAR CAMBIOS
        </SettingButton>
        <SlotsButtons>
          <SettingButton $variation="secondary">QUITAR ESPACIO -</SettingButton>
          <SettingButton $variation="secondary">AGREGAR ESPACIO +</SettingButton>
        </SlotsButtons>
      </LoginContainer>
    </LoginSetSection>
  );
};

export default LoginSettings;
