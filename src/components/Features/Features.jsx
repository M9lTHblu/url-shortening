import styled from 'styled-components/macro';
import {Card} from './Card/Card';
import data from './data';
import {Description} from './Description';
import {Title} from './Title';

export const Features = () => {
  return (
      <Section>
        <div className='wrapper'>
          <TextContainer>
            <Title>Advanced Statistics</Title>
            <Description>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </Description>
          </TextContainer>
          <CardContainer>
            {data.map((card, i) => <Card key={i}{...card}/>)}
          </CardContainer>
        </div>
      </Section>

  );
};

const Section = styled.section`
  padding: 6rem 0 5rem;
  color: var(--gray);
  background-color: #F0F1F6;
`;


const CardContainer = styled.div`
  position: relative;
  display: grid;
  gap: 4rem;

  ::before {
    content: '';
    position: absolute;
    left: calc(50% - (.4rem / 2));
    height: 100%;
    width: .4rem;
    background-color: var(--cyan);
  }

  @media (min-width: 767px) {
    margin: 0 0 5rem;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    & :nth-child(2) {
      top: 2.5rem;
    }

    & :nth-child(3) {
      top: 5rem;
    }

    ::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: .4rem;
      background-color: var(--cyan);
    }
  }
`;

const TextContainer = styled.div`
  margin-bottom: 4.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
gap: .5rem;
  h2 {
    color: black;
  }

  @media (min-width: 767px) {
    h2 {
      font-size: 2.4rem;
    }
    width: 47%;
    margin: 0 auto 6rem;
  }
`;
