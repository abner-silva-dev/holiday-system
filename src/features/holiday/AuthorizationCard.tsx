import StateHoliday from './StateHoliday';
import styled from 'styled-components';

import { HiOutlineCheck } from 'react-icons/hi2';
import { HiOutlineXMark } from 'react-icons/hi2';
import { HolidayInfo } from './type';
import { formatDate, joinName } from '../../utils/helpers';
import { useUpdateHoliday } from './useUpdateHoliday';
import { useForm } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';
import { useUser } from '../users/useUser';
import html2pdf from 'html2pdf.js';

import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import { useSearchParams } from 'react-router-dom';
import { FaFilePdf } from 'react-icons/fa6';
import Print from '../../pages/Print';
import ReactDOMServer from 'react-dom/server';

const AuthorizationCardStyled = styled.div`
  background-color: var(--color-grey-0);
  padding: 3rem;
  grid-column: 1 /3;
  border-radius: 9px;
  box-shadow: var(--shadow-sm);
`;

const OptionsAuthorization = styled.div`
  display: flex;
  justify-content: start;
`;

const Form = styled.form``;

const Status = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  /* justify-content: ; */
  gap: 2rem;
`;

const AuthorizationItem = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  align-items: start;
  gap: 5rem;
`;

const EmployedItem = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  gap: 5rem;
`;

const Title = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
`;

const Authorization = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  gap: 2rem;
`;

const RowMain = styled.div`
  display: flex;
  gap: 1.8rem;
`;

const SubTitle = styled.span`
  color: var(--color-red-800);
  font-weight: bold;
`;

const ObservationField = styled.textarea`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-300);
  box-shadow: var(--shadow-sm);
  border-radius: 5px;
  padding: 1rem;
  resize: none;
  width: 100%;
`;

const AuthorizationButtons = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  margin-bottom: 1.8rem;
  gap: 4rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  text-transform: uppercase;

  & svg {
    height: 2rem;
    width: 2rem;
  }
`;

const ButtonPDF = styled.button`
  background-color: #c92a2a;
  color: #fff;
  padding: 1rem 1.2rem;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 11px;
  border: none;
  box-shadow: var(--shadow-md);
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 1rem;

  & svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

// COMPONENT DAYS

const RequestListContainer = styled.div`
  background-color: var(--color-grey-0);

  display: flex;
  /* width: 50%; */

  gap: 0.5rem;

  width: 26rem;
  padding: 0.8rem;
  border-radius: 11px;
  overflow-x: scroll;
`;

const TextTitle = styled.span`
  color: var(--color-grey-600);
  font-size: 1.8rem;
  font-weight: 700;
`;

const RequestListCard = styled.div`
  background-color: var(--color-brand-100);
  box-shadow: var(--shadow-sm);
  color: var(--color-brand-800);
  border-radius: 11px;

  display: flex;
  padding: 0.8rem;
`;

const TextCreation = styled.span`
  font-size: 1.2rem;
  text-align: center;
  display: flex;
  align-items: center;
`;

interface PropsAuthorizationCard {
  holiday: HolidayInfo;
}

const AuthorizationCard: React.FC<PropsAuthorizationCard> = ({ holiday }) => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const history = searchParams.get('history');

  const { register, handleSubmit, setValue } = useForm<HolidayInfo>({
    defaultValues: {
      authorizationAdmin: holiday.authorizationAdmin,
      authorizationManager: holiday.authorizationManager,
      observation: holiday.observation,
      observationAdmin: holiday.observationAdmin,
      observationManager: holiday.observationManager,
    },
  });

  const { user: curUser } = useUser();

  const { updateHoliday } = useUpdateHoliday();

  const onSubmit = (data: HolidayInfo) => {
    updateHoliday(
      { id: holiday._id || '', newHoliday: data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['user', curUser.id] });
        },
      }
    );
  };

  const printHandler = () => {
    const printElement = ReactDOMServer.renderToString(Print({ holiday }));

    // Configuración del PDF
    const options = {
      margin: 0, // Márgenes en mm
      filename: 'mi-documento.pdf', // Nombre del archivo
      image: { type: 'jpeg', quality: 1 }, // Tipo y calidad de la imagen
      html2canvas: { scale: 4 }, // Escala para mejorar la calidad de renderizado
      jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' }, // Formato del documento
    };

    html2pdf().set(options).from(printElement).save();
  };

  // const generatePDF = () => {
  //   // Seleccionamos el elemento que queremos convertir en PDF
  //   const element = document.getElementById('pdf-content');

  //   // Configuración del PDF
  //   const options = {
  //     margin: 0, // Márgenes en mm
  //     filename: 'mi-documento.pdf', // Nombre del archivo
  //     image: { type: 'jpeg', quality: 1 }, // Tipo y calidad de la imagen
  //     html2canvas: { scale: 4 }, // Escala para mejorar la calidad de renderizado
  //     jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' }, // Formato del documento
  //   };

  //   // Generar el PDF
  //   html2pdf().set(options).from(element).save();
  // };

  return (
    <AuthorizationCardStyled>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Heading as="h2">Solicitud: {formatDate(holiday?.createdAt || '')}</Heading>

          {/* CLAIMAND */}
          <EmployedItem>
            <div>
              <TextTitle>Días solicitados</TextTitle>
              <RequestListContainer>
                {holiday?.days?.map((day) => {
                  return (
                    <RequestListCard>
                      <TextCreation>{formatDate(day.toString())}</TextCreation>
                    </RequestListCard>
                  );
                })}
              </RequestListContainer>
            </div>
            <Authorization>
              <RowMain>
                <SubTitle>Observación</SubTitle>
                <span>Empleado</span>
              </RowMain>
              <ObservationField defaultValue={holiday?.observation} disabled={true} />
            </Authorization>
          </EmployedItem>

          {/* MANAGER */}
          <AuthorizationItem>
            <Status>
              <Title>Jefe Directo</Title>
              <StateHoliday state={holiday?.authorizationManager || 'pending'} />
            </Status>

            <Authorization>
              <RowMain>
                <SubTitle>Observación</SubTitle>
                <span>
                  {joinName({
                    name: holiday?.manager?.name || '',
                    paternSurname: holiday?.manager?.paternSurname || '',
                    motherSurname: holiday?.manager?.motherSurname || '',
                  })}
                </span>
              </RowMain>
              <ObservationField
                defaultValue={holiday?.observationManager}
                {...register('observationManager')}
                disabled={true}
              />
              {/* <AuthorizationButtons>
              <Button onClick={() => setValue('authorizationManager', 'approved')}>
                <HiOutlineCheck />
                Aceptar
              </Button>
              <Button onClick={() => setValue('authorizationManager', 'rejected')}>
                <HiOutlineXMark />
                Rechazar
              </Button>
            </AuthorizationButtons> */}
            </Authorization>
          </AuthorizationItem>

          {/* ADMIN */}
          <AuthorizationItem>
            <Status>
              <Title>Administrador</Title>
              <StateHoliday state={holiday?.authorizationAdmin || 'pending'} />
            </Status>

            <Authorization>
              <RowMain>
                <SubTitle>Observación</SubTitle>
                <span>
                  {joinName({
                    name: holiday?.admin?.name || '',
                    paternSurname: holiday?.admin?.paternSurname || '',
                    motherSurname: holiday?.admin?.motherSurname || '',
                  })}
                </span>
              </RowMain>
              <ObservationField
                defaultValue={holiday.observationAdmin}
                {...register('observationAdmin')}
              />
              <AuthorizationButtons>
                <Button onClick={() => setValue('authorizationAdmin', 'approved')}>
                  <HiOutlineCheck />
                  Aceptar
                </Button>
                <Button onClick={() => setValue('authorizationAdmin', 'rejected')}>
                  <HiOutlineXMark />
                  Rechazar
                </Button>
              </AuthorizationButtons>
            </Authorization>
          </AuthorizationItem>
        </Row>
      </Form>
      {history === 'successfull' && (
        <OptionsAuthorization>
          <ButtonPDF onClick={printHandler}>
            <FaFilePdf />
            <span>Descargar</span>
          </ButtonPDF>
        </OptionsAuthorization>
      )}
    </AuthorizationCardStyled>
  );
};

export default AuthorizationCard;
