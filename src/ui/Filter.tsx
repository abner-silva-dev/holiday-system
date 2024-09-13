import { useSearchParams } from 'react-router-dom';
import styled, { css } from 'styled-components';

type Option = {
  label: string;
  value: string;
};

type PropsFilter = {
  options: Option[];
  searchField: string;
};

/****** Styles *********/

const StyledFilter = styled.nav`
  display: flex;
  gap: 1rem;

  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  box-shadow: var(--shadow-sm);

  padding: 0.4rem;
  border-radius: 7px;
  align-items: center;
  gap: 2rem;

  align-self: center;
`;

interface PropsButton {
  $active: boolean;
}

const Button = styled.button<PropsButton>`
  background-color: var(--color-grey-0);
  border: none;
  padding: 0.4rem 0.6rem;
  border-radius: 7px;

  ${(props) =>
    props.$active &&
    css`
      background-color: var(--color-green-700);
      color: #fff;
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-green-700);
    color: #fff;
  }
`;

function Filter({ searchField, options }: PropsFilter) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(searchField);

  function handleClick(value: string) {
    searchParams.set('history', value);
    setSearchParams(searchParams);
  }

  // handleClick('request');

  return (
    <StyledFilter>
      {options.map((option) => (
        <Button
          onClick={() => handleClick(option.value)}
          key={option.value}
          $active={currentFilter === option.value}
        >
          {option.label}
        </Button>
      ))}
    </StyledFilter>
  );
}

export default Filter;
