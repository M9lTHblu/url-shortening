import styled from 'styled-components';
import {motion, AnimatePresence} from 'framer-motion';
import links from './data'
import {Links} from './Links';
import {Login} from './Login';

export const Modal = ({isOpen}) => {

  return (
      <AnimatePresence>
        {isOpen && (
            <Container
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
              <Links links={links}/>
              <Login />
            </Container>)}
      </AnimatePresence>
  );
};

const Container = styled(motion.div).attrs({
  id: 'modal'
})`
  position: absolute;
  left: 1rem;
  right: 1rem;
  top: 0;
  width: calc(100% - 2rem);
  padding: 2rem 1.5rem;
  border-radius: var(--square-radius);
  color: white;
  background-color: var(--violet);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  button {
    color: white;
  }
`;

