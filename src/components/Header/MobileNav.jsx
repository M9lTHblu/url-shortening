import {useEffect, useState} from 'react';
import {Spin as Hamburger} from 'hamburger-react';
import {Links} from './Links';
import {Modal} from './Modal';
import {Nav} from './Nav';

export const MobileNav = ({isMobile}) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) setOpen(false);
  }, [isMobile]);

  return (
      <Nav>
        <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color={'hsl(257, 7%, 63%)'}
            size={30}
            label="Show menu"
            hideOutline={false}
        />
        <Modal isOpen={isOpen}>
          <Links />
        </Modal>
      </Nav>
  )
}
