import styled from 'styled-components/macro';
import brand from '../../assets/images/icon-brand-recognition.svg'
import detailed from '../../assets/images/icon-detailed-records.svg'
import fully from '../../assets/images/icon-fully-customizable.svg'

export const Features = () => {
  return (
      <Section>
        <Container>
          <TextContent>
            <h2>Advanced Statistics</h2>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </TextContent>
          <CardContainer>
            <Card>
              <CardImg>
                <img src={brand} alt="brand recognition" />
              </CardImg>
              <h3>Brand Recognition</h3>
              <p>
                Boost your brand recognition with each click. Generic links don’t
                mean a thing. Branded links help instil confidence in your content.
              </p>
            </Card>
            <Card>
              <CardImg>
                <img src={detailed} alt="brand recognition" />
              </CardImg>
              <h3>Detailed Records</h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and where
                people engage with your content helps inform better decisions.
              </p>
            </Card>
            <Card>
              <CardImg>
                <img src={fully} alt="brand recognition" />
              </CardImg>
              <h3>Fully Customizable</h3>
              <p>
                Improve brand awareness and content discoverability through customizable
                links, supercharging audience engagement.
              </p>
            </Card>
          </CardContainer>
        </Container>
      </Section>

  )
}

const Section = styled.section`
  padding: 6rem 0 5rem;
  color: var(--gray);
  background-color: #F0F1F6;
`
const Container = styled.section.attrs({
  className: 'wrapper',
})`
  
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

const Card = styled.article`
  position: relative;
  padding: 4rem 1rem 2rem;
  border-radius: var(--square-radius);
  text-align: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  
  h3 {
    color: var(--dark);
    font-size: 1.7rem;
  }

  :nth-child(-n+2)::before {
    content: '';
    position: absolute;
    bottom: -2rem;
    height: 2rem;
    width: .4rem;
    background-color: var(--cyan);
  }
`

const CardImg = styled.div`
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
`

const TextContent = styled.div`
  margin-bottom: 4.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  
  h2 {
    color: black;
  }
`
