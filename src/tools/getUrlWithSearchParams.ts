export const getUrlWithSearchParams = (url: string, params: Record<string, string | number>) => {
  const urlObject = new URL(url);
  Object.keys(params).forEach(key => urlObject.searchParams.append(key, params[key].toString()));
  return urlObject.toString();
};
