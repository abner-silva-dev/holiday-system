import styled from 'styled-components';
import html2pdf from 'html2pdf.js';
import { HiOutlineCheck } from 'react-icons/hi2';

import logo from './../../public/logo-dai.png';
import membretado from './../../public/membretado.png';
import { HolidayInfo } from '../features/holiday/type';
import { formatDate, joinName } from '../utils/helpers';

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
  background-image: url(/membretado.png);
  background-position: center -25px;
  background-size: cover;
  background-size: 119%;

  & header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.6rem;

  & textarea {
    width: 100%;
    padding: 1rem;
    resize: none;
    border: none;
    background-color: #f3f4f6;
  }
`;

const GroupGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 3rem;
  align-items: center;
  row-gap: 0.8rem;

  & :first-child {
    grid-column: 1/-1;
  }

  & :nth-child(5) {
    grid-column: 1/-1;
  }

  & :nth-child(6) {
    grid-column: 1/-1;
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

const Input = styled.input`
  align-self: center;
  border: none;
  background-color: #f3f4f6;
  padding: 1rem;
  width: 100%;
`;

const Label = styled.label`
  font-weight: 700;
`;

const ApprovalsContainer = styled.div`
  text-align: center;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
  }

  & svg {
    color: green;
    height: 2rem;
    width: 2rem;
  }
`;

const EmployeerFirmContainer = styled.div`
  text-align: center;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & div {
    height: 6rem;
    border-bottom: 1.7px solid black;
  }
`;

const Print: React.FC<{ holiday: HolidayInfo }> = ({ holiday }) => {
  console.log(holiday);

  return (
    <PrintContainer id="pdf-content">
      <header>
        <Logo src={logo} />
        <HeadingContainer>
          <h1>Autorización de Vacaciones</h1>
        </HeadingContainer>
      </header>

      {/* CONTENT */}
      <Subtitle>Datos del Solicitante</Subtitle>
      <Section>
        <GroupGrid>
          <Group>
            <Label>Nombre</Label>
            <Input
              type="text"
              defaultValue={joinName({
                name: holiday.user?.name || '',
                motherSurname: holiday.user?.motherSurname || '',
                paternSurname: holiday.user?.paternSurname || '',
              })}
            />
          </Group>

          {/* <GroupTwo> */}
          <Group>
            <Label>No. de Empleado</Label>
            <Input type="text" defaultValue={holiday?.user?.employNumber} />
          </Group>
          <Group>
            <Label>Departamento</Label>
            <Input type="text" defaultValue={holiday?.user?.department?.name} />
          </Group>

          <Group>
            <Label>No. de días pedidos</Label>
            <Input type="text" defaultValue={holiday?.days?.length} />
          </Group>
          {/* </GroupTwo> */}

          <Group>
            <Label>Días pedidos</Label>
            <Input
              type="text"
              defaultValue={holiday?.days?.map((day) => formatDate(day + '')).join(', ')}
            />
          </Group>

          <Group>
            <Label>Observación</Label>
            <textarea defaultValue={holiday?.observation}></textarea>
          </Group>

          <ApprovalsContainer>
            <label>
              {joinName({
                name: holiday.manager?.name || '',
                motherSurname: holiday.manager?.motherSurname || '',
                paternSurname: holiday.manager?.paternSurname || '',
              })}
            </label>
            <label>Jefe Directo</label>
            <span>
              <HiOutlineCheck />
              Aprobado
            </span>
          </ApprovalsContainer>

          <ApprovalsContainer>
            <label>
              {joinName({
                name: holiday.admin?.name || '',
                motherSurname: holiday.admin?.motherSurname || '',
                paternSurname: holiday.admin?.paternSurname || '',
              })}
            </label>
            <label>Administrador - R.H</label>
            <span>
              <HiOutlineCheck />
              Aprobado
            </span>
          </ApprovalsContainer>

          <EmployeerFirmContainer>
            <div></div>
            <label>Firma del Empleado</label>
          </EmployeerFirmContainer>
        </GroupGrid>
      </Section>
    </PrintContainer>
  );
};

export default Print;

// import styled from 'styled-components';
// import html2pdf from 'html2pdf.js';
// import { HiOutlineCheck } from 'react-icons/hi2';

// const Logo = styled.img`
//   width: 14rem;
//   align-self: center;
//   justify-self: center;
// `;

// const HeadingContainer = styled.div`
//   text-align: center;
//   & h1 {
//     font-size: 2.4rem;
//     width: 350px;
//   }
// `;

// const PrintContainer = styled.div`
//   /* position: absolute;
//   transform: translateX(120%); */
//   width: 210mm;
//   padding: 1rem 5rem;
//   border: 2px solid #b3b3b3;
//   margin: auto;
//   margin-top: 2rem;
//   background-image: url('membretado.png');
//   background-position: center -25px;
//   background-size: cover;
//   background-size: 119%;

//   & header {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     align-items: center;
//   }
// `;

// const Group = styled.div`
//   display: flex;
//   flex-direction: column;

//   gap: 0.6rem;

//   & textarea {
//     width: 100%;
//     padding: 1rem;
//     resize: none;
//     border: none;
//     background-color: #f3f4f6;
//   }
// `;

// const GroupGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   column-gap: 3rem;
//   align-items: center;
//   row-gap: 0.8rem;

//   & :first-child {
//     grid-column: 1/-1;
//   }

//   & :nth-child(5) {
//     grid-column: 1/-1;
//   }

//   & :nth-child(6) {
//     grid-column: 1/-1;
//   }
// `;
// const Subtitle = styled.h1`
//   text-align: center;
//   font-size: 2rem;
//   font-weight: 600;
//   color: #6d6d6d;
// `;

// const Section = styled.section`
//   margin: 2rem 0;

//   & h1 {
//     font-size: 2rem;
//     width: 350px;
//   }
// `;

// const Input = styled.input`
//   align-self: center;
//   border: none;
//   background-color: #f3f4f6;
//   padding: 1rem;
//   width: 100%;
// `;

// const Label = styled.label`
//   font-weight: 700;
// `;

// const ApprovalsContainer = styled.div`
//   text-align: center;
//   font-size: 1.4rem;
//   display: flex;
//   flex-direction: column;
//   gap: 0.8rem;

//   & span {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-weight: 700;
//   }

//   & svg {
//     color: green;
//     height: 2rem;
//     width: 2rem;
//   }
// `;

// const EmployeerFirmContainer = styled.div`
//   text-align: center;
//   font-size: 1.4rem;
//   display: flex;
//   flex-direction: column;
//   gap: 0.8rem;

//   & div {
//     height: 6rem;
//     border-bottom: 1.7px solid black;
//   }
// `;

// const Print = () => {
//   // Función para generar el PDF
//   const generatePDF = () => {
//     // Seleccionamos el elemento que queremos convertir en PDF
//     const element = document.getElementById('pdf-content');

//     // Configuración del PDF
//     const options = {
//       margin: 0, // Márgenes en mm
//       filename: 'mi-documento.pdf', // Nombre del archivo
//       image: { type: 'jpeg', quality: 1 }, // Tipo y calidad de la imagen
//       html2canvas: { scale: 4 }, // Escala para mejorar la calidad de renderizado
//       jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' }, // Formato del documento
//     };

//     // Generar el PDF
//     html2pdf().set(options).from(element).save();
//   };

//   return (
//     <div>
//       {/* Contenido que se convertirá en PDF */}
//       <PrintContainer id="pdf-content">
//         <header>
//           <Logo src="logo-dai.png" />
//           <HeadingContainer>
//             <h1>Autorización de Vacaciones</h1>
//           </HeadingContainer>
//         </header>

//         {/* CONTENT */}
//         <Subtitle>Datos del Solicitante</Subtitle>
//         <Section>
//           <GroupGrid>
//             <Group>
//               <Label>Nombre</Label>
//               <Input type="text" />
//             </Group>

//             {/* <GroupTwo> */}
//             <Group>
//               <Label>No. de Empleado</Label>
//               <Input type="text" />
//             </Group>
//             <Group>
//               <Label>Departamento</Label>
//               <Input type="text" />
//             </Group>

//             <Group>
//               <Label>No. de días pedidos</Label>
//               <Input type="text" />
//             </Group>
//             {/* </GroupTwo> */}

//             <Group>
//               <Label>Días pedidos</Label>
//               <Input type="text" />
//             </Group>

//             <Group>
//               <Label>Observación</Label>
//               <textarea></textarea>
//             </Group>

//             <ApprovalsContainer>
//               <label>Cristobal Gonzalez Bocanegra</label>
//               <label>Jefe Directo</label>
//               <span>
//                 <HiOutlineCheck />
//                 Aprobado
//               </span>
//             </ApprovalsContainer>

//             <ApprovalsContainer>
//               <label>Jose Luis Crisóstomo Cortés</label>
//               <label>Administrador - R.H</label>
//               <span>
//                 <HiOutlineCheck />
//                 Aprobado
//               </span>
//             </ApprovalsContainer>

//             <EmployeerFirmContainer>
//               <div></div>
//               <label>Firma del Empleado</label>
//             </EmployeerFirmContainer>
//           </GroupGrid>
//         </Section>
//       </PrintContainer>
//       {/* Botón para generar el PDF */}
//       <button
//         onClick={generatePDF}
//         style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
//       >
//         Descargar como PDF
//       </button>
//     </div>
//   );
// };

// export default Print;
