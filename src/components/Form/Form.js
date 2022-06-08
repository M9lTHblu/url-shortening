import styled from 'styled-components/macro';
import bgd from '../../assets/images/bg-shorten-desktop.svg';
import bgm from '../../assets/images/bg-shorten-mobile.svg';
import {media} from '../../mediaQueries';

export const Container = styled.form`
  position: relative;
  padding: 1.5rem;
  border-radius: .8rem;
  background-color: var(--violet);
  background-image: url(${bgm});
  background-position: top right -1rem;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${media.tablet`
    padding: 2.5rem;
    background-image: url(${bgd});
    background-position: left;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: row;
    gap: 1rem;
    
    input {
      flex-grow: 1;
    }
  `}
`;
