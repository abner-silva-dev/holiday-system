import styled from 'styled-components';
import html2pdf from 'html2pdf.js';

// const PrintContainer = styled.div`
//   margin: 0 auto;
//   margin-top: 5rem;
//   border: 2px solid black;

//   /* background-image: url('membretado.png');
//   background-size: cover; */
//   & header {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//   }
// `;

// const Page = styled.div`
//   /* @media print {
//     @media page {
//       size: letter;
//       margin: 20mm;
//     }
//   } */
// `;

const Logo = styled.img`
  width: 14rem;
  align-self: center;
  justify-self: center;
`;

const HeadingContainer = styled.div`
  text-align: center;

  & h1 {
    font-size: 2.4rem;
    width: 350px;
  }
`;

const PrintContainer = styled.div`
  /* font-size: 1.5rem; */
  width: 210mm;
  padding: 2rem 10rem;
  border: 2px solid #b3b3b3;
  margin: auto;
  margin-top: 2rem;
  background-image: url('membretado.png');
  background-position: -60px center;
  background-size: cover;
  background-size: 112%;

  /* background-position: center; */

  & header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }
`;

// const Form = styled.div`
//   /* padding: 1rem 2rem; */

//   display: grid;
//   grid-template-columns: 1fr 2fr 1fr 2fr;

//   & :last-child {
//     grid-column: 2/-1;
//   }
// `;

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 1rem;

  & textarea {
    width: 100%;
    resize: none;
    border: none;
    background-color: #f3f4f6;
    padding: 0.5rem 0.8rem;
  }
`;

const GroupGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  & :first-child {
    grid-column: 1/-1;
  }

  & :last-child {
    grid-column: 1/-1;
  }

  & input {
    align-self: center;
    border: none;
    background-color: #f3f4f6;
    padding: 0 0.8rem;
  }
`;

const Section = styled.section`
  margin: 3rem 0;

  & h1 {
    font-size: 2rem;
    width: 350px;
    margin-bottom: 1.4rem;
  }
`;

// const Form = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

const Print = () => {
  // Función para generar el PDF
  const generatePDF = () => {
    // Seleccionamos el elemento que queremos convertir en PDF
    const element = document.getElementById('pdf-content');

    // Configuración del PDF
    const options = {
      margin: 0, // Márgenes en mm
      filename: 'mi-documento.pdf', // Nombre del archivo
      image: { type: 'jpeg', quality: 1 }, // Tipo y calidad de la imagen
      html2canvas: { scale: 4 }, // Escala para mejorar la calidad de renderizado
      jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' }, // Formato del documento
    };

    // Generar el PDF
    html2pdf().set(options).from(element).save();
  };

  return (
    <div>
      {/* Contenido que se convertirá en PDF */}
      <PrintContainer id="pdf-content">
        <header>
          <Logo src="logo-dai.png" />
          <HeadingContainer>
            <h1>Autorización de Vacaciones</h1>
          </HeadingContainer>
        </header>
        {/* CONTENT */}
        <Section>
          <h1>Datos del Solicitante</h1>

          <GroupGrid>
            <Group>
              <label>Nombre</label>
              <input type="text"></input>
            </Group>

            <Group>
              <label>No. de Empleado</label>
              <input type="text"></input>
            </Group>
            <Group>
              <label>Departamento</label>
              <input type="text"></input>
            </Group>

            <Group>
              <label>Fecha de Inicio</label>
              <input type="text"></input>
            </Group>

            <Group>
              <label>Fecha de Término</label>
              <input type="text"></input>
            </Group>

            <Group>
              <label>Días Pedidos</label>
              <input type="text"></input>
            </Group>

            <Group>
              <label>Observación</label>
              <textarea></textarea>
            </Group>
          </GroupGrid>
        </Section>
        {/* <img src="https://via.placeholder.com/150" alt="Imagen de ejemplo" /> */}
      </PrintContainer>
      {/* Botón para generar el PDF */}
      <button
        onClick={generatePDF}
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
      >
        Descargar como PDF
      </button>
    </div>

    // <Page>
    //   <section>
    //     <PrintContainer>
    //       <header>
    //         <Logo src="logo-dai.png" />
    //         <HeadingContainer>
    //           <h1>Autorización de Vacaciones</h1>
    //         </HeadingContainer>
    //       </header>
    //       <div>
    //         <span>Nombre</span>
    //       </div>
    //     </PrintContainer>
    //   </section>
    // </Page>
  );
};

export default Print;
