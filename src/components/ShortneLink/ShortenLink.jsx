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
  background: linear-gradient(white 50%, var(--ligth-violet) 50%);
  
`
