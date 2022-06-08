import styled from 'styled-components/macro';
import {media} from '../../../mediaQueries';
import {CardImg} from './CardImg';
import {CardText} from './CardText';
import {CardTitle} from './CardTitle';

export const Card = ({img, title, text}) => {
  return (
      <Container>
        <CardImg src={img}/>
        <CardTitle>{title}</CardTitle>
        <CardText>
          {text}
        </CardText>
      </Container>
  )
}

const Container = styled.article`
  position: relative;
  z-index: 3;
  padding: 4rem 1rem 2rem;
  border-radius: var(--square-radius);
  
  text-align: center;
  background-color: #fff;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  ${media.tablet`
    text-align: left;
    align-items: flex-start;
  `}
`;
