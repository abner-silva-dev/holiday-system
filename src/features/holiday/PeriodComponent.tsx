import styled, { css } from 'styled-components';
import { HiOutlineClock } from 'react-icons/hi2';
import { HiOutlineChevronRight } from 'react-icons/hi2';
import { HiOutlineChevronLeft } from 'react-icons/hi2';
import { useState } from 'react';

// Estilos de los componentes
const Period = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 1rem;
`;

const PeriodTag = styled.div`
  background-color: var(--color-brand-50);
  color: var(--color-brand-900);
  font-size: 1.8rem;
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 1.2rem;

  grid-template-columns: 1fr 1fr;
  border: 1px solid var(--color-brand-200);
  padding: 1.6rem 3.2rem 1.6rem 1.2rem;
  border-radius: 9px;
  box-shadow: var(--shadow-md);

  & svg {
    height: 4rem;
    width: 4rem;
  }
`;

const TagTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const periodBtn = css`
  background-color: var(--color-brand-900);
  border: none;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;

  position: absolute;
  transform: translateY(-50%);
  top: 50%;

  box-shadow: var(--shadow-md);
  transform: all 0.2s;
  & svg {
    height: 2rem;
    width: 2rem;
    stroke: var(--color-grey-100);
  }
  &:hover {
    background-color: var(--color-brand-800);
  }
`;

const PeriodButtonLeft = styled.button`
  ${periodBtn}

  left: -1.3rem;
`;
const PeriodButtonRight = styled.button`
  ${periodBtn}

  right: -1.3rem;
`;

const TagTitle = styled.span`
  font-weight: bold;
`;

const ClockContainer = styled.div`
  display: flex;
  align-items: center;
`;

interface PeriodProps {
  initialPeriod: number;
}

const PeriodComponent: React.FC<PeriodProps> = ({ initialPeriod }) => {
  const [period, setPeriod] = useState(initialPeriod);

  const incrementPeriod = () => {
    if (period < initialPeriod + 1) {
      setPeriod(period + 1);
    }
  };

  const decrementPeriod = () => {
    if (period > initialPeriod - 1) {
      setPeriod(period - 1);
    }
  };

  return (
    <Period>
      <PeriodButtonLeft onClick={decrementPeriod}>
        <HiOutlineChevronLeft />
      </PeriodButtonLeft>

      <PeriodTag>
        <ClockContainer>
          <HiOutlineClock />
        </ClockContainer>
        <TagTextContainer>
          <TagTitle>Periodo</TagTitle>
          <span>{period}</span>
        </TagTextContainer>
      </PeriodTag>

      <PeriodButtonRight onClick={incrementPeriod}>
        <HiOutlineChevronRight />
      </PeriodButtonRight>
    </Period>
  );
};

export default PeriodComponent;
