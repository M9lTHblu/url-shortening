import styled, {css} from 'styled-components';

export const Button = styled.input.attrs(({text, disabled, onClick}) => ({
  type: 'submit',
  value: text,
  disabled: disabled,
  onClick: onClick,
}))`
  display: inline;
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

  ${({text}) => text === 'Copied!' ? copied : ''}
  ${({$style}) => $style === 'link' ? link : ''}
  ${({variant}) => variant === 'square' ? square : pill};
`;

// sizes

const sm = css`
  min-width: 130px;
  font-size: 1rem;
  font-weight: var(--weight-bold);
  line-height: 2.3;
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

const copied = css`
  background-color: var(--violet);

  :hover {
    background-color: var(--violet);
  }
`;

const link = css`
  padding: 0;
  color: var(--gray);
  background-color: transparent;

  :hover {
    background-color: transparent;
    color: black;
  }
`;
