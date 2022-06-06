import {useEffect, useState} from 'react';
import {Spin as Hamburger} from 'hamburger-react';
import {Modal} from './Modal';
import {Nav} from './Nav';



export const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);

  // useEffect(() => {
  //   setOpen(false);
  // }, []);
//TODO check useEffect switcher

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
        <Modal isOpen={isOpen} />
      </Nav>
  )
}
