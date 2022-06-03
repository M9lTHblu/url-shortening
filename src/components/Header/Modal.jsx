import styled from 'styled-components';
import {motion, AnimatePresence} from 'framer-motion';
import {List} from './List';
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
              <List />
              <Login />
            </Container>)}
      </AnimatePresence>
  );
};

const Container = styled(motion.div)`
  position: absolute;
  top: 5rem;
  width: calc(100% - 2rem);
  padding: 2rem 1.5rem;
  border-radius: var(--radius);
  color: white;
  background-color: var(--violet);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

