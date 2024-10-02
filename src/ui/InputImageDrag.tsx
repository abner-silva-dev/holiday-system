import { useState } from 'react';
import { HiOutlineArrowUpTray } from 'react-icons/hi2';
import styled from 'styled-components';

const ImageDragStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const DropArea = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;

const DragOverlay = styled.div<{ $isDragging: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({ $isDragging }) =>
    $isDragging ? 'rgba(0, 0, 0, 0.3)' : 'transparent'};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ $isDragging }) => ($isDragging ? 1 : 0)};
  transition: opacity 0.3s;
  color: white;
  font-size: 1.2rem;
`;

const UserImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const FileImage = styled.label`
  display: flex;
  justify-content: center;
  gap: 1rem;

  font-weight: 500;
  padding: 1rem 1.8rem;
  background-color: #0b7285;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.4rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0c8599;
  }

  & svg {
    height: 2rem;
    width: 2rem;
  }
`;

interface PropsInputImageDrag {
  defaultImage: string;
  onChangeFile: (file: File | null) => void;
}

const InputImageDrag: React.FC<PropsInputImageDrag> = ({
  onChangeFile,
  defaultImage,
}) => {
  const [imageSrc, setImageSrc] = useState(defaultImage);
  const [isDragging, setIsDragging] = useState(false);

  // UPDATE IMAGE
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
      onChangeFile(file);
    } else {
      onChangeFile(null);
    }
  };

  //  FUNCTION DRAGG AND OVER
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
    }
  };

  return (
    <ImageDragStyled>
      <DropArea
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <UserImage src={imageSrc} alt="Imagen de perfil" />
        <DragOverlay $isDragging={isDragging}>
          {isDragging ? 'Suelta la imagen aquí' : ''}
        </DragOverlay>
      </DropArea>

      <FileImage as="label">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        <HiOutlineArrowUpTray />
        Actualizar Imagen...
      </FileImage>
    </ImageDragStyled>
  );
};

export default InputImageDrag;
