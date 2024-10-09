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

const StyledFilter = styled.nav`
  border: 1px solid var(--color-grey-200);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  gap: 0.4rem;
  display: flex;
`;

interface PropsButton {
  $active: boolean;
}

const Button = styled.button<PropsButton>`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.$active &&
    css`
      background-color: var(--color-green-700);
      color: #fff;
    `}

  /* padding: 0.4rem 0.6rem; */
  /* border-radius: 7px; */



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
