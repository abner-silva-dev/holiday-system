import styled, { css } from 'styled-components';
import { HiOutlineClock } from 'react-icons/hi2';
import { HiOutlineChevronRight } from 'react-icons/hi2';
import { HiOutlineChevronLeft } from 'react-icons/hi2';
import { useState } from 'react';
import { UserInfo } from '../users/types';
import { formatDate } from '../../utils/helpers';

// Estilos de los componentes
const Period = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  position: relative;
  align-items: center;
  background-color: var(--color-brand-50);
  color: var(--color-brand-900);
  font-size: 1.8rem;
  display: flex;

  border: 1px solid var(--color-brand-200);
  padding: 0rem 4rem;
  border-radius: 9px;
  box-shadow: var(--shadow-md);
`;

const PeriodTag = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  & svg {
    height: 3rem;
    width: 3rem;
  }
`;

const TagTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  & span {
    margin-top: -0.5rem;
    /* font-size: 1.6rem; */
  }
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
    height: 3rem;
    width: 3rem;
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
  font-size: 2rem;
  font-weight: 700;
`;

const TextDates = styled.p`
  font-size: 1.2rem;
  color: var(--color-grey-600);
`;

interface PeriodProps {
  user: UserInfo;
}

const PeriodComponent: React.FC<PeriodProps> = ({ user }) => {
  const [periodNum, setPeriodNum] = useState(0);

  const incrementPeriod = () => {
    if (periodNum >= 1) return;
    setPeriodNum((periodNum) => periodNum + 1);
  };

  const decrementPeriod = () => {
    if (periodNum <= -1) return;
    setPeriodNum((periodNum) => periodNum - 1);
  };

  const getPeriodDate = (num: number) => {
    switch (num) {
      case -1:
        return `${formatDate(user.daysGrantedBySeniorityPast?.startDate + '', {
          spaces: false,
        })} - ${formatDate(user.daysGrantedBySeniorityPast?.endDate + '', {
          spaces: false,
        })}`;

      case 0:
        return `${formatDate(user.daysGrantedBySeniority?.startDate + '', {
          spaces: false,
        })} - ${formatDate(user.daysGrantedBySeniority?.endDate + '', {
          spaces: false,
        })}`;

      case 1:
        return `${formatDate(user.daysGrantedBySeniorityFuture?.startDate + '', {
          spaces: false,
        })} - ${formatDate(user.daysGrantedBySeniorityFuture?.endDate + '', {
          spaces: false,
        })}`;
    }
  };

  return (
    <Period>
      <PeriodButtonLeft onClick={decrementPeriod}>
        <HiOutlineChevronLeft />
      </PeriodButtonLeft>

      <PeriodTag>
        <HiOutlineClock />
        <TagTextContainer>
          <TagTitle>Periodo</TagTitle>
        </TagTextContainer>
      </PeriodTag>

      <TextDates>{getPeriodDate(periodNum)}</TextDates>

      <PeriodButtonRight onClick={incrementPeriod}>
        <HiOutlineChevronRight />
      </PeriodButtonRight>
    </Period>
  );
};

export default PeriodComponent;
