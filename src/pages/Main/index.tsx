import React, { FC } from 'react';

import { useFlickrPhotos } from 'api/flickr';
import { Grid, GridItem } from 'components/atoms/Grid';
import { StyledButton, StyledGridItem, StyledImage, StyledImageContent, StyledText } from 'pages/Main/styles';
import { useUrlParams } from 'tools/hooks/useUrlParams';

export const Main: FC = () => {
  const { perPage } = useUrlParams<{ perPage?: string }>();
  const { isFetching, error, data } = useFlickrPhotos(perPage);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (isFetching) {
    return <div>Loading...</div>;
  }
  return (
    <Grid>
      {data?.photos.photo.map(({ title, url_c, url_s }, index) => (
        <GridItem key={`image-${index}`} sm={6} md={2}>
          <StyledGridItem>
            <StyledImage $url={url_c ?? url_s}>
              <StyledImageContent>
                <StyledText>{title}</StyledText>
                <StyledButton type="button">Favorite</StyledButton>
              </StyledImageContent>
            </StyledImage>
          </StyledGridItem>
        </GridItem>
      ))}
    </Grid>
  );
};
