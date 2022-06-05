import {Header} from '../Header/Header';
import {Hero} from '../Hero/Hero';
import {ShortenLink} from '../ShortneLink/ShortenLink';


export const LandingPage = () => {


  return (
      <>
        <Header/>
        <main>
          <Hero/>
          <ShortenLink>
          {/*TODO add content to shorten link*/}
          </ShortenLink>
          <section>
            {/*TODO add content to advanced statistics*/}
          </section>
          <section>
           {/*TODO add content to boost links*/}
          </section>
        </main>
        <footer>
         {/*TODO add content to footer*/}
        </footer>
      </>
  );
};




