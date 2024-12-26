import { HiOutlineCheck, HiOutlineXMark } from 'react-icons/hi2';
import Button from '../../../../shared/ui/Button';
import styled from 'styled-components';

const AuthorizationButtonsStyled = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1.8rem;
  gap: 4rem;
`;

interface PropsButton {
  $color?: string;
}

const ButtonState = styled.button<PropsButton>`
  background-color: ${(props) => props.$color};
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  padding: 1rem 1.5rem;
  border-radius: var(--border-radius-sm);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  gap: 1rem;
  width: auto;

  & svg {
    height: 2rem;
    width: 2rem;
  }
`;

interface AuthorizationButtonsProps {
  authorization: string;
  handleApprove: () => void;
  handleReject: () => void;
  setValue: () => void;
}

const AuthorizationButtons: React.FC<AuthorizationButtonsProps> = ({
  authorization,
  handleApprove,
  handleReject,
  setValue,
}) => {
  return (
    <AuthorizationButtonsStyled>
      <ButtonState
        type="button"
        onClick={handleApprove}
        $color={authorization === 'approved' ? '#087f5b' : '#a0a0a0'}
      >
        <HiOutlineCheck />
        Aceptar
      </ButtonState>
      <ButtonState
        type="button"
        onClick={handleReject}
        $color={authorization === 'rejected' ? '#a61e4d' : '#a0a0a0'}
      >
        <HiOutlineXMark />
        Rechazar
      </ButtonState>

      <Button type="submit" onClick={setValue} $variation="secondary">
        GUARDAR CAMBIOS
      </Button>
    </AuthorizationButtonsStyled>
  );
};

export default AuthorizationButtons;
