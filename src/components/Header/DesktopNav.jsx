import data from './data';
import {Links} from './Links';
import {Login} from './Login';
import {Nav} from './Nav';

export const DesktopNav = () => {
  return (
      <Nav>
        <Links links={data} />
        <Login />
      </Nav>
  );
};

