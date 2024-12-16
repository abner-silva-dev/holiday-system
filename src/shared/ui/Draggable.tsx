import { useState, DragEvent } from 'react';
import styled from 'styled-components';

const StyledDraggable = styled.div`
  border: 3px dashed var(--color-grey-200);
  padding: 2rem 4rem;
`;

function Draggable() {
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  function handleDrag(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();

    const fileReader = new FileReader();

    fileReader.addEventListener('load', () => {
      setFileUrl(fileReader.result as string);
    });

    const file = e.dataTransfer.files[0];
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  return (
    <StyledDraggable onDragOver={handleDrag} onDrop={handleDrop}>
      <span>Drag your file</span>
      <input type="file" hidden />
      {fileUrl && <img src={fileUrl} alt="Uploaded file" />}
    </StyledDraggable>
  );
}

export default Draggable;
