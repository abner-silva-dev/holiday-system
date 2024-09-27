import styled from 'styled-components';
import html2pdf from 'html2pdf.js';

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
  width: 210mm;
  padding: 1rem 5rem;
  border: 2px solid #b3b3b3;
  margin: auto;
  margin-top: 2rem;
  background-image: url('membretado.png');
  background-position: -60px center;
  background-size: cover;
  background-size: 115%;

  & header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }
`;

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  & textarea {
    width: 100%;
    resize: none;
    border: none;
    background-color: #f3f4f6;
    /* padding: 0.5rem 0.8rem; */
  }
`;

const GroupSpanAll = styled.div`
  grid-column: 1/-1;
`;

const GroupGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  align-items: center;

  & :first-child {
    grid-column: 1/-1;
  }

  & :last-child {
    grid-column: 1/-1;
  }

  & :nth-child(3) {
    grid-column: 1/-1;
  }

  & input {
    align-self: center;
    border: none;
    background-color: #f3f4f6;
    padding: 1rem;
  }
`;
const Subtitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: #6d6d6d;
`;

const Section = styled.section`
  margin: 2rem 0;

  & h1 {
    font-size: 2rem;
    width: 350px;
  }
`;

const GroupTwo = styled.div`
  display: flex;
  gap: 2rem;
  grid-column: 1/-1;
`;

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
        <Subtitle>Datos del Solicitante</Subtitle>
        <Section>
          <GroupGrid>
            <Group>
              <label>Nombre</label>
              <input type="text" />
            </Group>

            <GroupTwo>
              <Group>
                <label>No. de Empleado</label>
                <input type="text" />
              </Group>
              <Group>
                <label>Departamento</label>
                <input type="text" />
              </Group>

              <Group>
                <label>Numero de días pedidos</label>
                <input type="text" />
              </Group>
            </GroupTwo>

            <Group>
              <label>Días pedidos</label>
              <input type="text" />
            </Group>

            <Group>
              <label>Observación</label>
              <textarea></textarea>
            </Group>
          </GroupGrid>
        </Section>
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
