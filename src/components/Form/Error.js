import styled from 'styled-components/macro';
import {media} from '../../mediaQueries';

export const Error = styled.span`
  position: absolute;
  top: 4.5rem;
  font-size: .8rem;
  font-style: italic;
  color: var(--red);

  ${media.tablet`
    top: 6rem;
  `}
`;
