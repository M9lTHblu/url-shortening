import {useState} from 'react';
import styled from 'styled-components/macro';
import {media} from '../../mediaQueries';
import {Button} from '../Button/Button';

export const Card = ({short_link2: short, original_link: origin}) => {
  const [copy, setCopy] = useState(null);

  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link)
        .then(() => {
          setCopy(link);
        });
  };

  return (
      <Container>
        <Origin>
          <span>
            {origin}
          </span>
        </Origin>
        <Shorted>
          <span>{short}</span>
          <Button
              variant="square"
              text={copy === short ? 'Copied!' : 'Copy'}
              onClick={() => copyToClipboard(short)}
          />
        </Shorted>
      </Container>
  );
};
const Container = styled.article`
  font-size: 1rem;
  background-color: white;
  border-radius: var(--square-radius);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.tablet`
    font-size: var(--size);
    flex-direction: row;
    align-items: center;
  `}
`;

const Origin = styled.div`
  position: relative;
  padding: .5rem;
  color: var(--dark);

  ::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: var(--ligth-violet);
  }

  ${media.tablet`
    ::after {
    content: '';
    height: 0;
  `}
`;

const Shorted = styled.div`
  padding: .5rem;
  color: var(--cyan);
  display: flex;
  flex-direction: column;
  gap: .5rem;

  ${media.tablet`
    align-items: center;
    flex-direction: row;
    gap: 1rem;
  `}
`;
