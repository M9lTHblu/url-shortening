import styled from 'styled-components/macro';
import {media} from '../../globalStyles';

export const Description = styled.p`
  margin-bottom: 2rem;
  font-size: var(--size);
  color: var(--gray);

  ${media.tablet`
    font-size: .9rem;
  `}
  
  ${media.laptopL`
    font-size: 1.25rem;
  `}
`;
