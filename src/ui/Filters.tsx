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
`;

const Button = styled.button<{ $active: boolean }>`
  background-color: var(--color-grey-0);
  border: none;
  padding: 0.4rem 0.6rem;
  border-radius: 7px;

  ${(props) =>
    props.$active &&
    css`
      background-color: var(--color-green-700);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-green-700);
    color: var(--color-brand-50);
  }
`;

function Filter({ searchField, options }: PropsFilter) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(searchField);

  function handleClick(value: string) {
    searchParams.set('accepted', value);
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
