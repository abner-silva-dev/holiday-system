import { useState } from 'react';
import styled from 'styled-components';

const StyledDraggable = styled.div`
  border: 3px dashed var(--color-grey-200);
  padding: 2rem 4rem;
`;

function Draggable() {
  const [fileUrl, setFileUrl] = useState(null);

  function handleDrag(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    e.preventDefault();
    // console.log(e.dataTransfer.files);

    const fileReader = new FileReader();

    fileReader.addEventListener('load', () => {
      // console.log(fileReader.result);
      setFileUrl(fileReader.result);
    });

    fileReader.readAsDataURL(e.dataTransfer.files[0]);
  }

  return (
    <StyledDraggable onDragOver={handleDrag} onDrop={handleDrop}>
      <span>Drag your file</span>
      <input type="file" hidden />
      {fileUrl && <img src={fileUrl} />}
    </StyledDraggable>
  );
}

export default Draggable;
