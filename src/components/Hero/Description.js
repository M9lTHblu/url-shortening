import styled from 'styled-components/macro';
import {media} from '../../mediaQueries';

export const Description = styled.p`
  margin-bottom: 2rem;
  font-size: 1rem;
  color: var(--gray);

  ${media.tablet`
    font-size: 1.25rem;
  `}
`;
