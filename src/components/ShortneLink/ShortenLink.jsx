import styled from 'styled-components/macro';
import {Form} from '../Form/Form';


export const ShortenLink = () => {
  return (
      <Section>
        <div className='wrapper'>
          <Form />
        </div>
      </Section>
  );
};

const Section = styled.section`
  margin: 6rem 0;
  background: linear-gradient(white 50%, var(--light-gray) 50%);
  
`
