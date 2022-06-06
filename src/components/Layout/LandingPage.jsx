import {BoostLinks} from '../BoostLinks/BoostLinks';
import {Features} from '../Features/Features';
import {Footer} from '../Footer/Footer';
import {Header} from '../Header/Header';
import {Hero} from '../Hero/Hero';
import {ShortenLink} from '../ShortneLink/ShortenLink';

export const LandingPage = () => {

  return (
      <div>
        <Header />
        <main>
          <Hero />
          <ShortenLink />
          <Features />
          <BoostLinks />
        </main>
        <Footer />
      </div>
  );
};




