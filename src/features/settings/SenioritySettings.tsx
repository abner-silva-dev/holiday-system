import styled from 'styled-components';
import Heading from '../../ui/Heading';
import Button from '../../ui/Button';
import Row from '../../ui/Row';
// import Menus from '../../ui/Menus';
// import { Modal } from 'react-bootstrap';
// import { HiMiniPencil, HiMiniTrash } from 'react-icons/hi2';

const SenioritySection = styled.section`
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

const SeniorityContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Table = styled.div`
  margin: 4rem 0;
  border-radius: 10px; /* Esquinas redondeadas */
  overflow: hidden; /* Para evitar que los bordes de las celdas sobresalgan */
  border: 1px solid var(--color-grey-200);
`;

const TableHead = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 0.5fr;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 0.5fr;
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

  & input {
    width: 6rem;
    margin-right: 1.4rem;
    text-align: center;
    background-color: var(--color-grey-0);
    border-radius: 4px;
    border: 1px solid var(--color-grey-300);
  }
`;

const TableHeader = styled.div`
  padding: 1rem;
  background-color: var(--color-grey-50);
  color: var(--color-grey-800);
  text-align: center;
  font-weight: bold;
  padding: 1.6rem 2.4rem;
`;

const SubmitButton = styled(Button)`
  align-self: center;
`;

const SenioritySettings = () => {
  return (
    <SenioritySection>
      <SeniorityContainer>
        <Row type="vertical">
          <Heading as="h2">Derecho a Vacaciones</Heading>
          <blockquote>
            La información contenida en esta tabla debe actualizarse periódicamente
            conforme a las disposiciones vigentes de la Secretaría del Trabajo y Previsión
            Social (STPS) de México en relación con el derecho a vacaciones de los
            trabajadores.
          </blockquote>
        </Row>
        <Table>
          <TableHead>
            <TableHeader>Años Laborados (Antigüedad)</TableHeader>
            <TableHeader>Días de Vacaciones</TableHeader>
            <TableHeader></TableHeader>
          </TableHead>
          <TableRow>
            <TableCell>Año 1</TableCell>
            <TableCell>
              <input type="number"></input>
              <span> Días</span>
            </TableCell>
            <TableCell>Boton</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Año 2</TableCell>
            <TableCell>
              <input type="number"></input>
              <span> Días</span>
            </TableCell>
            <TableCell>Boton</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Año 3</TableCell>
            <TableCell>
              <input type="number"></input>
              <span> Días</span>
            </TableCell>
            <TableCell>Boton</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Año 4</TableCell>
            <TableCell>
              <input type="number"></input>
              <span> Días</span>
            </TableCell>
            <TableCell>Boton</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Año 5</TableCell>
            <TableCell>
              <input type="number"></input>
              <span> Días</span>
            </TableCell>
            <TableCell>Boton</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>De 6 a 10 años</TableCell>
            <TableCell>
              <input type="number"></input>
              <span> Días</span>
            </TableCell>
            <TableCell>Boton</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>De 11 a 15 años</TableCell>
            <TableCell>
              <input type="number"></input>
              <span> Días</span>
            </TableCell>
            <TableCell>Boton</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>De 16 a 20 años</TableCell>
            <TableCell>
              <input type="number"></input>
              <span> Días</span>
            </TableCell>
            <TableCell>Boton</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>De 21 a 25 años</TableCell>
            <TableCell>
              <input type="number"></input>
              <span> Días</span>
            </TableCell>
            <TableCell>Boton</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>De 26 a 30 años</TableCell>
            <TableCell>
              <input type="number"></input>
              <span> Días</span>
            </TableCell>
            <TableCell>Boton</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>De 31 a 35 años</TableCell>
            <TableCell>
              <input type="number"></input>
              <span> Días</span>
            </TableCell>
            <TableCell>Boton</TableCell>
          </TableRow>
        </Table>

        <SubmitButton $variation="confirm" $size="medium">
          GUARDAR CAMBIOS
        </SubmitButton>
      </SeniorityContainer>
    </SenioritySection>
  );
};

export default SenioritySettings;
