export const useUrlParams = <T extends Record<string, string>>() => {
  const urlSearchParams = new URLSearchParams(window.location.search);

  return Object.fromEntries(urlSearchParams.entries()) as T;
};
