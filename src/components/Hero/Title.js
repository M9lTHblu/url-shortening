import styled from 'styled-components/macro';
import {media} from '../../mediaQueries';

export const Title = styled.h1`
  display: inline;
  font-size: 2rem;
  line-height: 1.2;
  
  ${media.tablet`
    font-size: 2.5rem;
  `}
  ${media.laptop`
    font-size: 3.3rem;
  `}
  ${media.desktop`
    font-size: 4rem;
  `}
  
`;
