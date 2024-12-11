import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { API_DAI_SYSTEM } from '../../config';
import toast from 'react-hot-toast';
import { HiMiniInboxArrowDown } from 'react-icons/hi2';

const Float = styled.div`
  position: absolute;
  width: 30rem;
  border-radius: 9px;
  top: 6.3rem;
  right: 0px;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  z-index: 80;

  &::after {
    position: absolute;
    border-radius: 5px;
    top: -0.9rem;
    left: 75%;
    content: '';
    display: inline-block;
    width: 3rem;
    height: 3rem;
    background-color: var(--color-grey-0);
    z-index: -1;
    border: 1px solid var(--color-grey-200);
    box-shadow: var(--shadow-lg);
    transform: rotate(45deg);
  }
`;

const Option = styled.button`
  display: inline-block;
  width: 100%;
  height: 5rem;
  border: none;
  border: 1px solid var(--color-grey-200);
  color: var(--color-green-500);
  background-color: var(--color-grey-0);
  cursor: pointer;

  /* padding: 0 2rem; */

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  &:first-child {
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
  }

  &:last-child {
    border-bottom-left-radius: 9px;
    border-bottom-right-radius: 9px;
  }

  &:hover {
    background-color: var(--color-blue-100);
  }
`;

interface PropsFloatDocuments {
  onClose: () => void;
}

const FloatDocuments: React.FC<PropsFloatDocuments> = ({ onClose }) => {
  const { userId } = useParams();

  const handleDownload = async (doc: string) => {
    const url = `${API_DAI_SYSTEM}/users/${userId}/dowloadDoc?doc=${doc}`;

    try {
      const response = await fetch(url, { credentials: 'include' });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'No se pudo descargar el documento.');
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.click();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
      else toast.error('Ha ocurrido un error desconocido.');
    }
  };

  return (
    <Float onClick={onClose}>
      <Option onClick={() => handleDownload('individualContract')}>
        Contrato de Trabajo
      </Option>
      <Option onClick={() => handleDownload('confidentialityAgreement')}>
        Contrato de Confidencialidad
      </Option>
      <Option onClick={() => handleDownload('resignationLetter')}>
        Carta de Renuncia
      </Option>
      <Option onClick={() => handleDownload('paymentTransfer')}>
        Solicitud pago transferencia
      </Option>
    </Float>
  );
};

export default FloatDocuments;
