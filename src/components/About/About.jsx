import AboutContainer from './AboutContainer'
import Title from './Title'
import Description from './Description'

const About = () => {
  return (
    <AboutContainer>
      <Title>Short the links</Title>
      <Description>
        <p>
          To shorten links, add the correct link to
          the input field and press the "Shorten"
        </p>
        <p>
          All links are stored in your localStorage
          and will be available even after the pages reboot.
        </p>
        <p>
          To clean your localStorage just delete the link.
        </p>
      </Description>
    </AboutContainer>
  )
}
export default About
