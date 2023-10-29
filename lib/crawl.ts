export const normalizeURL = (url: string) => {
  try {
    const { host, pathname } = new URL(url);
    return host + pathname;
  } catch (_) {
    throw new Error('Not a valid url');
  }
};
