import {useSelector} from 'react-redux';
import styled from 'styled-components/macro';
import {getState} from '../../redux/slices/linksSclice';
import {Form} from '../Form/Form';
import {ShortenedLink} from './ShortenedLink';

export const ShortenLink = () => {
  const {persistedLinks} = useSelector(getState);
console.log(persistedLinks)

  return (
      <Section>
        <div className="wrapper">
          <Form />
        </div>
        <Shortens>
          {
            persistedLinks?.map(link=> (
                <li><ShortenedLink link={link}/></li>
            ))
          }
        </Shortens>
      </Section>
  );
};

const Section = styled.section`
  background: linear-gradient(white 50%, var(--ligth-violet) 50%);
`;

const Shortens = styled.ul` 
  list-style: none;
`

