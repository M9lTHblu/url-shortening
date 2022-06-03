import styled from 'styled-components';

export const Button = ({type = 'button', text = ''}) => {
  return (
      <>
        {
          {
            button: <Btn>{text}</Btn>,
            link: <BtnLink>{text}</BtnLink>,
          }[type]
        }
      </>
  );
};

const Btn = styled.button`
  width: 100%;
  padding: 0 1.5rem;
  border: none;
  border-radius: calc(var(--radius) * 3);
  font-family: var(--family);
  font-size: var(--size);
  font-weight: var(--weight-bold);
  color: white;
  line-height: 2.5;
  background-color: var(--cyan);
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: hsl(180, 74%, 64%);
  }
`;

const BtnLink = styled(Btn)`
  color: var(--gray);
  background-color: transparent;
  
  :hover {
    background-color: transparent;
    color: black;
  }
`;
