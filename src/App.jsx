import {BoostLinks} from './components/BoostLinks/BoostLinks';
import {Features} from './components/Features/Features';
import {Footer} from './components/Footer/Footer';
import {Form} from './components/Form';
import {Header} from './components/Header/Header';
import {Hero} from './components/Hero';
import {Shortens} from './components/Shortens';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Form />
        <Shortens />
        <Features />
        <BoostLinks />
      </main>
      <Footer />
    </>
  );
}

export default App;
