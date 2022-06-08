import {useSelector} from 'react-redux';
import styled from 'styled-components/macro';
import {getState} from '../../redux/slices/linksSclice';

import {Card} from './Card';

export const Shortens = () => {
  const {items} = useSelector(getState);

  return (
      <Section>
        <div className="wrapper">
          <List>
            {
                items && items?.map(link=> (
                    <li key={link.code}><Card {...link}/></li>
                ))
            }
          </List>
        </div>
      </Section>
  );
};

const Section = styled.section`
  padding-top: 2rem;
  
  background-color: var(--ligth-violet);
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

