import { useState, ChangeEvent, ReactNode, cloneElement } from 'react';

import { HiOutlineMagnifyingGlass, HiAdjustmentsHorizontal } from 'react-icons/hi2';

import styled from 'styled-components';
import { useOutsideClick } from '../hooks/useOutsideClick';

const StyledSearch = styled.div`
  background-color: var(--color-grey-0);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 1rem 1rem;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  position: relative;
  border: 1px solid var(--color-grey-200);

  & svg {
    width: 2.5rem;
    height: 2.5rem;
    z-index: 4;
  }

  & svg:last-child,
  svg:nth-child(3) {
    cursor: pointer;
  }
`;

const StyledSearchInput = styled.input`
  color: var(--color-grey-600);
  background-color: var(--color-grey-0);
  border: none;
  font-size: 1.5rem;

  width: 100%;
  height: 100%;

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
  transition: all 2s ease-in-out;
  z-index: 999;
`;

interface Props {
  placeholder: string;
  onSetQuery: (e: string) => void;
  className?: string;
  props?: { [key: string]: number };
  width?: string;
  popUpFilter?: ReactNode | null;
}

function Search({
  placeholder,
  onSetQuery,
  width = '40%',
  popUpFilter = null,
  ...props
}: Props) {
  const [query, setQuery] = useState('');
  const [show, setShow] = useState(false);

  // ALLOW CLOSE MODAL WITH OUTSIDE CLICK
  const ref = useOutsideClick(() => setShow(false), false);

  function handleSetQuery(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    onSetQuery(e.target.value);
  }

  return (
    <StyledSearch style={{ width }}>
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
            setShow((show) => !show);
          }}
          title="Filtros de busqueda y ordenamiento"
        />
      )}
      {popUpFilter && show && (
        <Filter ref={ref}>{cloneElement(popUpFilter, { close })}</Filter>
      )}
    </StyledSearch>
  );
}

export default Search;
