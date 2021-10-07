import React, { FC, useState } from 'react';

import styled from 'styled-components';

import { IPhoto, useFlickrPhotos } from 'api/flickr';
import { Button } from 'components/atoms/Button';
import { Grid, GridItem } from 'components/atoms/Grid';
import { ImageCard } from 'components/atoms/ImageCard';
import { InfiniteScroll } from 'components/atoms/InfiniteScroll';
import { Loader } from 'components/atoms/Loader';
import { UnderlinedText } from 'components/atoms/UnderlinedText';
import { debounce } from 'tools/debounce';
import useLocalStorage from 'tools/hooks/useLocalStorage';

export const StyledGridItem = styled.div`
  padding: 24px;
`;

export const StyledButton = styled(Button)`
  margin-bottom: 34px;
`;

export const StyledUnderlinedText = styled(UnderlinedText)`
  margin-bottom: 24px;
`;

export const Main: FC = () => {
  const [likedPhotos, changeLikedPhotos] = useLocalStorage<any>('liked-photos', {});
  const [currentPage, setCurrentPage] = useState(1);
  const [photos, setPhotos] = useState<(IPhoto & Record<string, unknown>)[]>([]);
  const { isFetching, error, data } = useFlickrPhotos(currentPage.toString(), {
    onSuccess: successResponse => {
      setPhotos([...photos, ...successResponse.photos.photo]);
    },
  });
  const loadPhotos = debounce((prop: any) => {
    setCurrentPage(prop + 1);
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <InfiniteScroll
        component={Grid}
        isLoading={isFetching}
        hasMoreData
        loadOnMount
        onBottomHit={() => {
          if (!isFetching && (data?.photos?.pages ?? 0) >= currentPage) {
            loadPhotos(currentPage);
          }
        }}
      >
        {photos.map(({ id, title, url_c, url_s }, index) => (
          <GridItem key={`image-${index}`} sm={6} md={2}>
            <StyledGridItem>
              <ImageCard url={url_c ?? url_s}>
                <StyledUnderlinedText title={title} />
                <StyledButton
                  active={!!likedPhotos[id]}
                  onClick={() => {
                    if (likedPhotos[id]) {
                      delete likedPhotos[id];
                      changeLikedPhotos.set({ ...likedPhotos });
                    } else {
                      changeLikedPhotos.set({ ...likedPhotos, [id]: { title, url_s, url_c } });
                    }
                  }}
                  type="button"
                >
                  Favourite
                </StyledButton>
              </ImageCard>
            </StyledGridItem>
          </GridItem>
        ))}
      </InfiniteScroll>
      {data?.photos?.pages !== currentPage && <Loader />}
    </>
  );
};
