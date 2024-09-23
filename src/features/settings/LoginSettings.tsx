import styled from 'styled-components';
import Button from '../../ui/Button';
import Heading from '../../ui/Heading';
import FileButton from '../../ui/FileButton';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 3rem 5rem;
`;

const ImageSet = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2.4rem;
  border-bottom: 3px solid var(--color-grey-200);
  margin-bottom: 2rem;
  padding: 3rem 11rem;
`;

const ImagePreview = styled.img`
  height: 20rem;
`;

const LoginSetSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  padding: 2rem 0;

  border-radius: 9px;
`;

const TimeContainer = styled.div`
  font-size: 1.6rem;
  font-weight: 700;

  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  display: flex;
  gap: 2rem;
`;

const SelectBox = styled.select`
  border: none;
  border-radius: 9px;
  padding: 0.5rem 1rem;

  color: var(--color-grey-0);
  background: linear-gradient(
    to bottom,
    var(--color-grey-600) 0%,
    var(--color-grey-700) 50%,
    var(--color-grey-800) 51%,
    var(--color-grey-900) 100%
  );

  width: 14rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const SettingButton = styled(Button)`
  height: 50%;
  width: 70%;
  align-self: center;
  justify-self: center;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const Option = styled.option`
  background-color: var(--color-grey-0);
  color: var(--color-grey-800);
`;

const SlotsButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LoginSettings = () => {
  return (
    <>
      <LoginSetSection>
        <LoginContainer>
          <Heading as="h2">Pantalla de Inicio de Sesión</Heading>
          <TimeContainer>
            <label>Tiempo de Transición: </label>
            <SelectBox>
              <Option>3 segundos</Option>
              <Option>4 segundos</Option>
              <Option>5 segundos</Option>
              <Option>6 segundos</Option>
            </SelectBox>
          </TimeContainer>
          <Grid>
            <ImageSet>
              <Heading as="h2">IMAGEN 1: </Heading>
              <Group>
                <ImagePreview src="https://c4.wallpaperflare.com/wallpaper/322/755/765/mega-man-mega-man-11-wallpaper-preview.jpg" />
                <FileButton>Subir Imagen...</FileButton>
              </Group>
            </ImageSet>
            <ImageSet>
              <Heading as="h2">IMAGEN 2: </Heading>
              <Group>
                <ImagePreview src="https://c4.wallpaperflare.com/wallpaper/322/755/765/mega-man-mega-man-11-wallpaper-preview.jpg" />
                <FileButton>Subir Imagen...</FileButton>
              </Group>
            </ImageSet>
            <ImageSet>
              <Heading as="h2">IMAGEN 3: </Heading>
              <Group>
                <ImagePreview src="https://c4.wallpaperflare.com/wallpaper/322/755/765/mega-man-mega-man-11-wallpaper-preview.jpg" />
                <FileButton>Subir Imagen...</FileButton>
              </Group>
            </ImageSet>
            <ImageSet>
              <Heading as="h2">IMAGEN 4: </Heading>
              <Group>
                <ImagePreview src="https://c4.wallpaperflare.com/wallpaper/322/755/765/mega-man-mega-man-11-wallpaper-preview.jpg" />
                <FileButton>Subir Imagen...</FileButton>
              </Group>
            </ImageSet>
            <SettingButton $variation="confirm">GUARDAR CAMBIOS</SettingButton>
            <SlotsButtons>
              <SettingButton $variation="secondary">QUITAR ESPACIO -</SettingButton>
              <SettingButton $variation="secondary">AGREGAR ESPACIO +</SettingButton>
            </SlotsButtons>
          </Grid>
        </LoginContainer>
      </LoginSetSection>
    </>
  );
};

export default LoginSettings;
