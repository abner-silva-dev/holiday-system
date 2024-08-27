import styled from 'styled-components';

const StyledSpinner = styled.div`
  @keyframes rotate {
    0% {
      width: 64px;
      height: 64px;
      transform: rotate(0deg);
    }
    50% {
      width: 30px;
      height: 30px;
      transform: rotate(180deg);
    }
    100% {
      width: 64px;
      height: 64px;
      transform: rotate(360deg);
    }
  }
  margin: 4.8rem auto;
  width: 64px;
  height: 64px;
  position: relative;
  background-image: linear-gradient(var(--color-red-400) 16px, transparent 0),
    linear-gradient(var(--color-red-700) 16px, transparent 0),
    linear-gradient(var(--color-red-700) 16px, transparent 0),
    linear-gradient(var(--color-red-400) 16px, transparent 0);
  background-repeat: no-repeat;
  background-size: 16px 16px;
  background-position: left top, left bottom, right top, right bottom;
  animation: rotate 1s linear infinite;
`;

function Spinner() {
  return (
    <StyledSpinner>
      <svg>
        <use href="/icons.svg#icon-loader"></use>
      </svg>
    </StyledSpinner>
  );
}

export default Spinner;
