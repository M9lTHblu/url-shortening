import styled from 'styled-components/macro';
import {Button} from '../Button/Button';

export const ShortenedLink = ({link}) => {
  const {origin, short} = link;

  return (
      <Link>
        <OriginUrl>
          {origin}
        </OriginUrl>
        <div>
          <ShortenedUrl>
            {short}
          </ShortenedUrl>
          <Button />
        </div>
      </Link>
  );
};
const Link = styled.article``;

const OriginUrl = styled.span``;

const ShortenedUrl = styled.span``;
