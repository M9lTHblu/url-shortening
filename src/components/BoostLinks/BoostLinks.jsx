import styled from 'styled-components/macro';
import bgm from '../../assets/images/bg-boost-mobile.svg'
import {Button} from '../Button/Button';

export const BoostLinks = () => {
  return (
      <Section>
        <h3>Boost your links today</h3>
        <Button size='md' text='Get Started'/>
      </Section>
  );
};

const Section = styled.section`
  padding: 6rem 1rem;
  background-color: var(--violet);
  background-image: url(${bgm});
  background-repeat: no-repeat;
  //background-position: top -10px right 0;
  background-size: cover;
  text-align: center;
  
  h3{
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: white;
  }
`;
