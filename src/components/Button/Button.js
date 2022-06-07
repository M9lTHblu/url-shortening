import styled, {css} from 'styled-components';

export const Button = styled.input.attrs(({text}) => ({
  type: 'submit',
  value: text,
}))`
  border: none;
  font-family: var(--family);
  font-size: var(--size);
  
  color: white;
  background-color: var(--cyan);
  white-space: nowrap;
  cursor: pointer;
  text-align: center;

  :hover {
    background-color: hsl(180, 74%, 64%);
  }

  ${({size}) => {
    switch (size) {
      case 'md':
        return md;
      case 'lg':
        return lg;
      default :
        return sm;
    }
  }};

  ${({$style}) => $style === 'link' ? link : ''}
  ${({variant}) => variant === 'square' ? square : pill};
`;

// sizes

const sm = css`
  padding: 0 1rem;
  font-size: 1rem;
  line-height: 2;
`;
const md = css`
  padding: 0 2.5rem;
  font-weight: var(--weight-bold);
  line-height: 2.75;
`;
const lg = css`
  padding: 0 2.5rem;
  font-weight: var(--weight-bold);
  line-height: 3.5;
`;

// variants

const pill = css`
  border-radius: var(--pill-radius);    
`;
const square = css`
  border-radius: var(--square-radius);
`;

// styles

const link = css`
  padding: 0;
  color: var(--gray);
  background-color: transparent;

  :hover {
    background-color: transparent;
    color: black;
  }
`;
