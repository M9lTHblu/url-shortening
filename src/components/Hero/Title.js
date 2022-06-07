import styled from 'styled-components/macro';
import {media} from '../../globalStyles';

export const Title = styled.h1`
  display: inline;
  font-size: 2.5rem;
  line-height: 1.2;
  
  ${media.tablet`
    font-size: 3rem;
  `}

  ${media.laptopL`
    font-size: 4rem;
  `}
`;
