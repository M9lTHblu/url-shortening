import styled from 'styled-components/macro';
import image from '../../assets/images/illustration-working.svg';
import {Button} from '../Button/Button';


export const Hero = () => {
  return (
      <Section>
        <ImgContainer>
          <img src={image} alt="hero" />
        </ImgContainer>
        <TextContent>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights
            on how your links are performing.
          </p>
          <Button size='md' text="Get Started" />
        </TextContent>
      </Section>
  );
};

const Section = styled.section.attrs({
  className: 'wrapper'
})`
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (min-width: 767px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  @media (min-width: 767px) {
    position: relative;
    width: 50%;
  }
  
  img {
    width: 150%;
    @media (min-width: 767px) {
      position: relative;
      right: -1rem;
    }
  }
`;

const TextContent = styled.article`
  text-align: center;
  
  h1 {
    margin-bottom: .8rem;
    font-size: 2.3rem;
    line-height: 1.2;
  }

  p {
    margin-bottom: 2rem;
    color: var(--gray);
  }

  button {
    width: 50%;
    margin: 0 auto;
  }
  
  @media (min-width: 767px){
    
    width: 60%;
    text-align: left;
    
    h1 {
      font-size: 3.8rem;
    }
    
    p{
      font-size: var(--size);
    }
  }
`;
