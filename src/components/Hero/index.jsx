import styled from 'styled-components/macro';
import image from '../../assets/images/illustration-working.svg';
import {media} from '../../globalStyles';
import {Button} from '../Button/Button';
import {Description} from './Description';
import {Title} from './Title';


export const Hero = () => {
  return (
      <Section>
        <ImgContainer>
          <img src={image} alt="hero" />
        </ImgContainer>
        <TextContent>
          <Title>More than just shorter links</Title>
          <Description>
            Build your brand’s recognition and get detailed insights
            on how your links are performing.
          </Description>
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

  ${media.tablet`
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 1rem;
  `}

  
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
      right: -2rem;
    }
  }
`;



const TextContent = styled.article`
  text-align: center;
  
  button {
    width: 50%;
    margin: 0 auto;
  }
  
  ${media.tablet`
    // align-self: flex-start;
    padding-top: 3.5rem;
    width: 50%;
    text-align: left;
  `}

  ${media.laptopL`

    padding-top: 5rem;
    width: 45%;
    text-align: left;
  `}
`;
