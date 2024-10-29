import styled from 'styled-components';
import { media } from '../style/media';

const Logo = styled.img`
  width: 15rem;
  align-self: center;
  /* filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3)); */

  @media ${media.tablet} {
    align-items: center;
    width: 20rem;
  }
`;
export default Logo;
