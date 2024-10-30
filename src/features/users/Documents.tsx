import styled from 'styled-components';
import Heading from '../../ui/Heading';
import InputFile from '../../ui/InputFile';
import Button from '../../ui/Button';

const State = styled.div`
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 50%;
  background-color: green;
`;

const Field = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem; */

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
  align-items: end;
`;

const DocumentMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 3rem 4rem;
`;

const FilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Label = styled.label`
  font-size: 1.6rem;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  align-self: center;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`;

const Documents = () => {
  return (
    <>
      <DocumentMain>
        <Heading as="h2">Documentos de Empleado</Heading>
        <Content>
          <FilesContainer>
            <Field>
              <Group>
                <State />
                <Label>Curriculum Vitae</Label>
              </Group>
              <InputFile nameFile="namefile.pdf" />
              <Button $variation="secondary">Ver</Button>
            </Field>

            <Field>
              <Group>
                <State />
                <Label>Acta de Nacimiento</Label>
              </Group>
              <InputFile nameFile="namefile.pdf" />
              <Button $variation="secondary">Ver</Button>
            </Field>

            <Field>
              <Group>
                <State />
                <Label>CURP</Label>
              </Group>
              <InputFile nameFile="namefile.pdf" />
              <Button $variation="secondary">Ver</Button>
            </Field>

            <Field>
              <Group>
                <State />
                <Label>Comprobante de Domicilio</Label>
              </Group>
              <InputFile nameFile="namefile.pdf" />
              <Button $variation="secondary">Ver</Button>
            </Field>
          </FilesContainer>
          <div>
            <embed
              src="/public/holiday-671c2c1e2f3b328827f793bd.pdf"
              type="application/pdf"
              width="500px"
              height="750px"
            />
          </div>
        </Content>
      </DocumentMain>
    </>
  );
};

export default Documents;
