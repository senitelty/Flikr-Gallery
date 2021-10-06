import { useApi } from 'api';
import { FLICKR_PHOTO_PARAMS } from 'api/flickr/constants';
import { FLICKR_BASE_URL } from 'settings';

interface IPhoto {
  title: string;
  url_c: string;
  url_l: string;
  url_m: string;
  url_n: string;
  url_o: string;
  url_q: string;
  url_s: string;
  url_sq: string;
  url_t: string;
  url_z: string;
}

interface IPhotos {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photo: (IPhoto & Record<string, unknown>)[];
}

interface IFlickerResponse {
  photos: IPhotos;
  stat: string;
}

export const useFlickrPhotos = (perPage = '100') =>
  useApi<IFlickerResponse>(FLICKR_BASE_URL, { ...FLICKR_PHOTO_PARAMS, per_page: perPage });
