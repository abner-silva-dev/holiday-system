import styled from 'styled-components';

interface PropsTimeTag {
  $time: 'past' | 'present' | 'future';
}

const TimeTagStyled = styled.label<PropsTimeTag>`
  //COLORS
  ${(props) => {
    switch (props.$time) {
      case 'past':
        return `
          color: #b91c1c;
          border: 1px solid #ffd4d4;
          background-color: #fee2e2;
          
        `;
      case 'present':
        return `
          color: #15803d;
          border: 1px solid #cbffde;
          background-color: #dcfce7;
        `;
      case 'future':
        return `
          color: #0369a1;
          border: 1px solid #d1eeff;
          background-color: #e0f2fe;
        `;
      default:
        return null;
    }
  }}

  font-weight: 700;
  font-size: 1.4rem;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  user-select: none;
  text-transform: uppercase;
`;

const TimeTag: React.FC<PropsTimeTag> = ({ $time }) => {
  let periodName;

  switch ($time) {
    case 'past':
      periodName = 'pasado';
      break;
    case 'present':
      periodName = 'present';
      break;
    case 'future':
      periodName = 'futuro';
      break;
    default:
      periodName = 'present';
  }
  return <TimeTagStyled $time={$time}>{periodName}</TimeTagStyled>;
};

export default TimeTag;
