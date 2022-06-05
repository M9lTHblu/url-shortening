import {Features} from '../Features/Features';
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
          <section>
            {/*TODO add content to boost links*/}
          </section>
        </main>

        <footer>
          footer
          {/*TODO add content to footer*/}
        </footer>
      </div>
  );
};




