import styled from 'styled-components';
import Heading from '../../ui/Heading';
import Row from '../../ui/Row';

const State = styled.div`
  height: 2rem;
  width: 1rem;
  background-color: green;
`;

const Field = styled.div`
  display: flex;
  gap: 1rem;
`;

const DocumentMain = styled.div`
  margin: 0 auto;
`;

const Documents = () => {
  return (
    <>
      <Heading as="h2">Documentos de Empleado</Heading>
      <DocumentMain>
        <Row type="horizontal">
          <div>
            <State />
          </div>
          <div>Vista Previa</div>
          {/* <Field>
            <State />
            <label>Acta de Nacimiento</label>
            <input type="file" />
            <button>Ver</button>
          </Field> */}
        </Row>
      </DocumentMain>
    </>
  );
};

export default Documents;
