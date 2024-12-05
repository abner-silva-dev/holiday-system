import { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import styled from 'styled-components';

// Container for the entire input field
const PasswordInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1.5rem;
  background-color: var(--color-grey-100);
  border-radius: 3px;

  & svg {
    width: 3rem;
    height: 3rem;
    color: var(--color-grey-500);
    transition: color 0.2s;
  }
`;

const StyledInput = styled.input<{ $letterSpacing: 'small' | 'medium' | 'large' }>`
  border: none;
  background-color: var(--color-grey-100);
  color: var(--color-grey-900);
  padding: 1rem 1.5rem;
  width: 100%;
  border-radius: 3px;

  letter-spacing: ${(props) =>
    props.$letterSpacing === 'small'
      ? '1px'
      : props.$letterSpacing === 'medium'
      ? '2px'
      : '3px'};

  &::placeholder {
    letter-spacing: ${(props) =>
      props.$letterSpacing === 'small'
        ? '1px'
        : props.$letterSpacing === 'medium'
        ? '2px'
        : '3px'};
    font-size: 2rem;
    color: var(--color-grey-400);
  }

  &:focus {
    outline: none;
  }
`;

// Container for the visibility toggle button
const VisibilityToggle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & svg {
    width: 3rem;
    height: 3rem;
  }

  & svg:hover {
    color: var(--color-grey-700);
  }
`;

/**
 * Reusable PasswordInput component
 * Allows toggling between text and password visibility.
 *
 * Props:
 * - placeholder (string): Text to show when the input is empty.
 * - value (string): Current input value.
 * - onChange (function): Function to handle value changes.
 */
function PasswordInput({
  placeholder = 'Ingresa tu contraseña',
  value,
  onChange,
  letterSpacing = 'small',
}: {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  letterSpacing: 'small' | 'medium' | 'large';
}) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  // Toggles password visibility
  const togglePasswordVisibility = () => setPasswordVisible((prevState) => !prevState);

  return (
    <PasswordInputContainer>
      <StyledInput
        type={isPasswordVisible ? 'text' : 'password'}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        $letterSpacing={letterSpacing}
        required
      />
      <VisibilityToggle
        title={isPasswordVisible ? 'Hide Password' : 'Show Password'}
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
      </VisibilityToggle>
    </PasswordInputContainer>
  );
}

export default PasswordInput;
