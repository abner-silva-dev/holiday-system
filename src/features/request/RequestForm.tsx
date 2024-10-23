import { useState } from 'react';
import styled from 'styled-components';

const FormSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

const FormContainer = styled.div`
  width: 13in; /* Ancho de una hoja tamaño oficio */
  border: 1px solid #b20000;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CompanyName = styled.h2`
  font-size: 18px;
  color: #b20000;
`;

const PhotoUpload = styled.div`
  width: 100px;
  height: 120px;
  border: 1px solid #b20000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    position: absolute;
  }
  input {
    display: none;
  }
`;

const PhotoLabel = styled.label`
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  padding: 5px;
  z-index: 1;
`;

const FormTitle = styled.h1`
  font-size: 20px;
  color: #000;
  margin-bottom: 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 14px;
  color: white;
  background-color: #b20000;
  padding: 5px;
  margin-bottom: 10px;
  text-align: center;
`;

const FormGroupRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const FormGroup = styled.div`
  flex: 1;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
`;

const Input = styled.input`
  width: 90%; /* Cambiar a 90% para hacer los cuadros más delgados */
  padding: 3px; /* Reducir el padding */
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #b20000;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
`;

const SmallInput = styled.input`
  width: 30px; /* Tamaño pequeño para Sí/No */
  text-align: center;
`;

const YesNoGroup = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const CheckboxLabel = styled.label`
  margin-right: 10px; /* Espacio entre los checkboxes */
`;

const DateInput = styled(Input)`
  width: 100px; /* Tamaño más grande para el campo de fecha */
`;

const RequestForm = () => {
  const [photo, setPhoto] = useState<string | null>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => setPhoto(reader.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <FormSection>
      <FormContainer>
        {/* Cabecera: Nombre de la empresa y espacio para la foto */}
        <Header>
          <CompanyName>DISTRIBUIDORA DE AUTO INDUSTRIAS, S.A. DE C.V.</CompanyName>
          <PhotoUpload>
            {photo ? (
              <img src={photo} alt="Foto" />
            ) : (
              <PhotoLabel htmlFor="upload-photo">Subir Foto</PhotoLabel>
            )}
            <input type="file" id="upload-photo" onChange={handlePhotoChange} />
          </PhotoUpload>
        </Header>

        <FormTitle>Solicitud de Empleo</FormTitle>

        {/* Primera fila: Puesto Solicitado, Departamento, Sueldo, Fecha */}
        <FormGroupRow>
          <FormGroup>
            <Label>Puesto Solicitado</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>Departamento</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>Sueldo</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>Fecha</Label>
            <Input type="date" />
          </FormGroup>
        </FormGroupRow>

        {/* Título de la sección de Datos Personales */}
        <SectionTitle>DATOS PERSONALES</SectionTitle>

        {/* Fila 1: Nombre(s), Apellido Paterno, Apellido Materno, Edad, Sexo */}
        <FormGroupRow>
          <FormGroup>
            <Label>Nombre(s)</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>Apellido Paterno</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>Apellido Materno</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>Edad</Label>
            <Input type="number" />
          </FormGroup>
          <FormGroup>
            <Label>Sexo</Label>
            <Input type="text" />
          </FormGroup>
        </FormGroupRow>

        {/* Fila 2: Domicilio y C.P. */}
        <FormGroupRow>
          <FormGroup>
            <Label>Domicilio: Calle, Número, Colonia, Delegación</Label>
            <Input type="text" style={{ width: '100%', marginRight: '10px' }} />{' '}
            {/* Hacer Domicilio más largo */}
          </FormGroup>
          <FormGroup style={{ width: '100px' }}>
            {' '}
            {/* Ajustar tamaño de C.P. */}
            <Label>C.P.</Label>
            <Input type="text" maxLength={5} /> {/* Limitar a 5 caracteres */}
          </FormGroup>
        </FormGroupRow>

        {/* Fila 3: E-Mail, Estado Civil, Tel. Particular, Celular */}
        <FormGroupRow>
          <FormGroup>
            <Label>E-Mail</Label>
            <Input type="email" />
          </FormGroup>
          <FormGroup>
            <Label>Estado Civil</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>Tel. Particular</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>Celular</Label>
            <Input type="text" />
          </FormGroup>
        </FormGroupRow>

        {/* Título de la sección de Datos Complementarios */}
        <SectionTitle>DATOS COMPLEMENTARIOS</SectionTitle>

        {/* Fila 1: RFC, No. Afil. IMSS */}
        <FormGroupRow>
          <FormGroup>
            <Label>RFC</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>No. Afil. IMSS</Label>
            <Input type="text" />
          </FormGroup>
        </FormGroupRow>

        {/* Fila 2: CURP, No. Crédito Infonavit, Afore */}
        <FormGroupRow>
          <FormGroup>
            <Label>CURP</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>No. Crédito Infonavit</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>Afore</Label>
            <Input type="text" />
          </FormGroup>
        </FormGroupRow>

        {/* Fila 3: Disponibilidad para Viajar, ¿Podría cambiar de residencia? y Licencia */}
        <FormGroupRow>
          <FormGroup style={{ display: 'flex', alignItems: 'center' }}>
            <Label style={{ marginRight: '10px' }}>Disponibilidad para Viajar</Label>
            <YesNoGroup>
              <CheckboxLabel>
                <SmallInput type="checkbox" />
                Sí
              </CheckboxLabel>
              <CheckboxLabel>
                <SmallInput type="checkbox" />
                No
              </CheckboxLabel>
            </YesNoGroup>
          </FormGroup>
          <FormGroup style={{ display: 'flex', alignItems: 'center' }}>
            <Label style={{ marginRight: '10px' }}>¿Cambiar de Residencia?</Label>
            <YesNoGroup>
              <CheckboxLabel>
                <SmallInput type="checkbox" />
                Sí
              </CheckboxLabel>
              <CheckboxLabel>
                <SmallInput type="checkbox" />
                No
              </CheckboxLabel>
            </YesNoGroup>
          </FormGroup>
          <FormGroup>
            <Label>Licencia</Label>
            <Input type="text" />
          </FormGroup>
        </FormGroupRow>

        {/* Fila: ¿Por qué medio se enteró del puesto?, ¿Ha trabajado en Dai?, ¿En qué fecha? */}
        <FormGroupRow>
          <FormGroup>
            <Label>¿Por qué medio se enteró del puesto?</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup style={{ display: 'flex', alignItems: 'center' }}>
            <Label style={{ marginRight: '10px' }}>¿Ha trabajado en Dai?</Label>
            <YesNoGroup>
              <CheckboxLabel>
                <SmallInput type="checkbox" />
                Sí
              </CheckboxLabel>
              <CheckboxLabel>
                <SmallInput type="checkbox" />
                No
              </CheckboxLabel>
            </YesNoGroup>
          </FormGroup>
          <FormGroup>
            <Label>¿En qué fecha?</Label>
            <DateInput type="date" /> {/* Ajustar tamaño del campo de fecha */}
          </FormGroup>
        </FormGroupRow>

        {/* Fila: ¿En qué departamento?, ¿Con quién vive?, ¿Dependen personas económicamente de usted? */}
        <FormGroupRow>
          <FormGroup>
            <Label>¿En qué departamento?</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>¿Con quién vive?</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup style={{ display: 'flex', alignItems: 'center' }}>
            <Label style={{ marginRight: '10px' }}>
              ¿Dependen personas económicamente de usted?
            </Label>
            <YesNoGroup>
              <CheckboxLabel>
                <SmallInput type="checkbox" />
                Sí
              </CheckboxLabel>
              <CheckboxLabel>
                <SmallInput type="checkbox" />
                No
              </CheckboxLabel>
            </YesNoGroup>
          </FormGroup>
        </FormGroupRow>

        {/* Fila: ¿Contribuye con el gasto familiar?, ¿Posee automóvil propio?, Marca y modelo */}
        <FormGroupRow>
          <FormGroup style={{ display: 'flex', alignItems: 'center' }}>
            <Label style={{ marginRight: '10px' }}>
              ¿Contribuye con el gasto familiar?
            </Label>
            <YesNoGroup>
              <CheckboxLabel>
                <SmallInput type="checkbox" />
                Sí
              </CheckboxLabel>
              <CheckboxLabel>
                <SmallInput type="checkbox" />
                No
              </CheckboxLabel>
            </YesNoGroup>
          </FormGroup>
          <FormGroup style={{ display: 'flex', alignItems: 'center' }}>
            <Label style={{ marginRight: '10px' }}>¿Posee automóvil propio?</Label>
            <YesNoGroup>
              <CheckboxLabel>
                <SmallInput type="checkbox" />
                Sí
              </CheckboxLabel>
              <CheckboxLabel>
                <SmallInput type="checkbox" />
                No
              </CheckboxLabel>
            </YesNoGroup>
          </FormGroup>
          <FormGroup>
            <Label>Marca y modelo</Label>
            <Input type="text" />
          </FormGroup>
        </FormGroupRow>

        <SectionTitle>DATOS DE EMPLEOS</SectionTitle>

        <FormGroupRow>
          <FormGroup>
            <Label>Nombre de la compañia</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>Giro</Label>
            <Input type="text" />
          </FormGroup>
        </FormGroupRow>
        <FormGroupRow>
          <FormGroup>
            <Label>Domicilio</Label>
            <Input type="email" />
          </FormGroup>
          <FormGroup>
            <Label>Telefono</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>Fecha de Ingreso</Label>
            <Input type="text" />
          </FormGroup>
        </FormGroupRow>

        <FormGroupRow>
          <FormGroup>
            <Label>Fecha de salida</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>Puesto desempeño</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>Sueldo final</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>Fecha de salida</Label>
            <Input type="text" />
          </FormGroup>
        </FormGroupRow>
        <FormGroupRow></FormGroupRow>

        <FormGroupRow>
          <FormGroup>
            <Label>Nombre de su jefe Inmediato</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>Motivo de separacion</Label>
            <Input type="text" />
          </FormGroup>
        </FormGroupRow>

        {/* Botón de Enviar Solicitud */}
        <SubmitButton type="submit">Enviar Solicitud</SubmitButton>
      </FormContainer>
    </FormSection>
  );
};

export default RequestForm;
