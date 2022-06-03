import styled from 'styled-components';
import heroImg from '../../assets/images/illustration-working.svg';
import {Button} from '../Button/Button';
import {Wrapper} from '../shared/Wrapper';

export const Hero = () => {
  return (
      <section>
        <Container>
          <img src={heroImg} alt="illustration working" />
          <div>
            <h1>More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights
              on how your links are performing.
            </p>
            <Button text="Get Started" />
          </div>
        </Container>
      </section>
  );
};

const Container = styled(Wrapper)`
  margin-top: .8rem;
  text-align: center;


  img {
    width: 510px;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    margin: 2rem 0 .5rem;
  }

  p {
    color: var(--gray);
    margin-bottom: 2rem;
  }

  button {
    width: 50%;
    margin: 0 auto;
  }

  @media (min-width: 767px) {
    position: relative;
    display: flex;
    text-align: start;
    margin-top: 5rem;
    
    button {
      margin: 0;
      width: 35%;
    }
    h1 {
      font-size: 3.8rem;
    }
    img {
      position: absolute;
      right: -300px;
      width: initial;
    }
    
    div {
     order: -1;
      width: 40%;
    }
  }
`;
