import React from 'react';

import { useFlickrPhotos } from 'api/flickr';

export const Main = () => {
  const { isFetching, error, data } = useFlickrPhotos();

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (isFetching) {
    return <div>Loading...</div>;
  }
  return (
    <ul>
      {data?.stat}
      {/* {items.data.map((item: any) => ( */}
      {/*  <li key={item.id}>{item.email}</li> */}
      {/* ))} */}
    </ul>
  );
};
