import styled from 'styled-components/macro';
import {media} from '../../../mediaQueries';

export const CardImg = ({src}) => {
  return (
      <Img>
        <img src={src} alt="brand recognition" />
      </Img>
  );
};

const Img = styled.div`
  position: absolute;
  top: -2rem;
  width: 4.5rem;
  height: 4.5rem;
  padding: 1rem;
  border-radius: 50%;
  background-color: var(--violet);

  img {
    width: 100%;
  }

  ${media.tablet`
    left: 2rem;
  `}
`;
