import styled from 'styled-components';

const FormSection = styled.section`
  width: 90rem;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.4rem;
  color: #d32f2f;
`;

// const InputGroup = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   margin-bottom: 15px;
// `;

const InputGroupColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const InputGroupRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1.4rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 0.5rem;
`;

const Label = styled.label`
  font-size: 1.4rem;
  margin-bottom: 5px;
  color: #333;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1.5rem;
  background-color: #d32f2f;
  color: white;
  font-size: 1.6rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #b71c1c;
  }
`;

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
`;

const Section = styled.section`
  /* display: flex;
flex-direction: column;
gap: 2rem; */
`;

const GroupPersonal = styled(Group)``;

const GroupHead = styled(Group)``;

const GroupComplement = styled(Group)``;

const RequestForm = () => {
  return (
    <FormSection>
      <Title>Distribuidora de Auto Industrias, S.A. de C.V.</Title>

      {/* Sección de Puesto Solicitado */}
      <Section>
        <GroupHead>
          <InputGroupColumn>
            <Label>Puesto Solicitado</Label>
            <Input type="text" />
          </InputGroupColumn>
          <InputGroupColumn>
            <Label>Departamento</Label>
            <Input type="text" />
          </InputGroupColumn>
          <InputGroupColumn>
            <Label>Sueldo</Label>
            <Input type="text" />
          </InputGroupColumn>
          <InputGroupColumn>
            <Label>Fecha</Label>
            <Input type="date" />
          </InputGroupColumn>
        </GroupHead>
      </Section>
      {/* Datos Personales */}
      <h4>Datos Personales</h4>
      <GroupPersonal>
        <InputGroupColumn>
          <Label>Nombre(s)</Label>
          <Input type="text" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>Apellido Paterno</Label>
          <Input type="text" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>Apellido Materno</Label>
          <Input type="text" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>Edad</Label>
          <Input type="number" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>Sexo</Label>
          <select></select>
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>Domicilio</Label>
          <Input type="text" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>C.P.</Label>
          <Input type="text" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>E-Mail</Label>
          <Input type="email" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>Estado Civil</Label>
          <Input type="text" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>Tel. Particular</Label>
          <Input type="tel" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>Celular</Label>
          <Input type="tel" />
        </InputGroupColumn>
      </GroupPersonal>

      {/* Datos Complementarios */}
      <h4>Datos Complementarios</h4>
      <GroupComplement>
        <InputGroupColumn>
          <Label>R.F.C.</Label>
          <Input type="text" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>No. Afil. IMSS</Label>
          <Input type="text" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>CURP</Label>
          <Input type="text" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>Afore</Label>
          <Input type="text" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>No. Crédito Infonavit</Label>
          <Input type="text" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>¿Disponibilidad para Viajar?</Label>
          <Input type="checkbox" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>¿Podría cambiar de residencia?</Label>
          <Input type="checkbox" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>¿Tiene familiares en DAI?</Label>
          <Input type="checkbox" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>¿Por qué medio se enteró del puesto?</Label>
          <Input type="text" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>¿Ha trabajado en DAI?</Label>
          <Input type="text" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>¿En qué fecha?</Label>
          <Input type="date" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>¿En qué Departamento?</Label>
          <Input type="text" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>¿Con quién vive actualmente?</Label>
          <Input type="text" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>¿Dependen personas económicamente de Ud.?</Label>
          <Input type="checkbox" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>¿Contribuye con el gasto familiar?</Label>
          <Input type="checkbox" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>¿Posee Automóvil propio?</Label>
          <Input type="checkbox" />
        </InputGroupColumn>
        <InputGroupColumn>
          <Label>Marca y Modelo</Label>
          <Input type="text" />
        </InputGroupColumn>
      </GroupComplement>

      <InputGroupRow></InputGroupRow>

      <InputGroupRow></InputGroupRow>

      <InputGroupRow></InputGroupRow>

      {/* Botón de envío */}
      <SubmitButton>Enviar Solicitud</SubmitButton>
    </FormSection>
  );
};

export default RequestForm;
