import styled, {css} from 'styled-components';

export const Button = styled.input.attrs(({text}) => ({
  type: 'button',
  value: text,
}))`
  border: none;
  font-family: var(--family);
  font-size: var(--size);
  font-weight: var(--weight-bold);
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
  padding: 0 1.5rem;
  line-height: 2.5;
`;
const md = css`
  padding: 0 2.5rem;
  line-height: 2.75;
`;
const lg = css`
  padding: 0 2.5rem;
  line-height: 3.5;
`;

// variants

const pill = css`
  border-radius: var(--pill-radius);
`;
const square = css`
  border-radius: var(--square-radius);
`;

// types

const link = css`
  color: var(--gray);
  background-color: transparent;

  :hover {
    background-color: transparent;
    color: black;
  }
`;
