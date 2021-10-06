import { useApi } from 'api';
import { FLICKR_PHOTO_PARAMS } from 'api/flickr/constants';
import { FLICKR_BASE_URL } from 'settings';

interface IPhoto {
  title: string;
}

interface IPhotos {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photos: IPhoto & Record<string, unknown>;
}

interface IFlickerResponse {
  photos: IPhotos[];
  stat: string;
}

export const useFlickrPhotos = (perPage = 100) =>
  useApi<IFlickerResponse>(FLICKR_BASE_URL, { ...FLICKR_PHOTO_PARAMS, per_page: perPage.toString() });
