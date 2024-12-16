import { useState, ChangeEvent, ReactElement, cloneElement } from 'react';
import { HiOutlineMagnifyingGlass, HiAdjustmentsHorizontal } from 'react-icons/hi2';
import styled from 'styled-components';
import { useOutsideClick } from '../hooks/useOutsideClick';

const StyledSearch = styled.div<{ width: string }>`
  background-color: var(--color-grey-0);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  position: relative;
  border: 1px solid var(--color-grey-200);
  width: ${({ width }) => width};

  & svg {
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    z-index: 4;
  }
`;

const StyledSearchInput = styled.input`
  color: var(--color-grey-600);
  background-color: var(--color-grey-0);
  border: none;
  font-size: 1.5rem;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    padding-left: 2px;
    color: #a1a1a1;
    letter-spacing: 1.8px;
    text-transform: uppercase;
  }
`;

const Filter = styled.div`
  width: 100%;
  border-radius: 12px;
  padding: 1rem 4.2rem 4rem;
  border: 1px solid var(--color-grey-200);
  background-color: var(--color-grey-0);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.08);
  position: absolute;
  top: 100%;
  left: 0;
  transition: all 0.2s ease-in-out;
  z-index: 999;
`;

interface SearchProps {
  placeholder: string;
  onSetQuery: (query: string) => void;
  className?: string;
  width?: string;
  popUpFilter?: ReactElement | null; // Ajustado para aceptar solo ReactElement o null
}

const Search: React.FC<SearchProps> = ({
  placeholder,
  onSetQuery,
  width = '40%',
  popUpFilter = null,
  ...props
}) => {
  const [query, setQuery] = useState('');
  const [show, setShow] = useState(false);
  const ref = useOutsideClick<HTMLDivElement>(() => setShow(false), false);

  const handleSetQuery = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSetQuery(newQuery);
  };

  return (
    <StyledSearch width={width} {...props}>
      <HiOutlineMagnifyingGlass />

      <StyledSearchInput
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={handleSetQuery}
      />

      {popUpFilter && (
        <HiAdjustmentsHorizontal
          onClick={(e) => {
            e.stopPropagation();
            setShow(!show);
          }}
          title="Filtros de búsqueda y ordenamiento"
        />
      )}

      {popUpFilter && show && <Filter ref={ref}>{cloneElement(popUpFilter)}</Filter>}
    </StyledSearch>
  );
};

export default Search;
