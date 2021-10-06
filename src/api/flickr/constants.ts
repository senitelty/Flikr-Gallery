import { FLICKR_API_KEY } from 'settings';

export const FLICKR_BASE_REQUEST_PARAMS = {
  method: 'flickr.photos.getRecent',
  api_key: FLICKR_API_KEY,
  format: 'json',
  nojsoncallback: '?',
};

export const FLICKR_PHOTO_PARAMS = {
  ...FLICKR_BASE_REQUEST_PARAMS,
  extras: 'url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o',
};
