import styled from 'styled-components';
import Heading from '../../../shared/ui/Heading';
import Row from '../../../shared/ui/Row';
import { SeniorityInfo } from '../../seniority/types';
import { useSeniorities } from '../../seniority/useSeniorities';
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
  grid-template-columns: 1fr 1fr;
`;

const TableElement = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const TableCell = styled.div`
  padding: 1rem;
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  text-align: center;
  gap: 1rem;

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

const SenioritySettings = () => {
  const { seniorities } = useSeniorities();
  const sortedSeniorities = seniorities?.sort((a: SeniorityInfo, b: SeniorityInfo) => {
    if (!a.minYears || !b.minYears) return 0;
    return a.minYears - b.minYears;
  });

  return (
    <SenioritySection>
      <SeniorityContainer>
        <Row type="vertical">
          <Heading as="h2">Derecho a Vacaciones</Heading>
          <blockquote>
            La información presentada en esta tabla es de carácter referencial y está
            alineada con las disposiciones vigentes de la Secretaría del Trabajo y
            Previsión Social (STPS) de México en relación con los derechos de vacaciones
            de los trabajadores.
          </blockquote>
        </Row>
        <Table>
          <TableHead>
            <TableHeader>Años Laborados (Antigüedad)</TableHeader>
            <TableHeader>Días de Vacaciones</TableHeader>
          </TableHead>
          <div>
            {sortedSeniorities?.map((seniority: SeniorityInfo) => (
              <TableElement key={seniority._id}>
                <TableCell>
                  {seniority.minYears === seniority.maxYears
                    ? `Año ${seniority.minYears}`
                    : `De ${seniority.minYears} a ${seniority.maxYears} años`}
                </TableCell>
                <TableCell>
                  <span>{seniority.vacationDays}</span>
                  <span> Días</span>
                </TableCell>
              </TableElement>
            ))}
          </div>
        </Table>
      </SeniorityContainer>
    </SenioritySection>
  );
};

export default SenioritySettings;
