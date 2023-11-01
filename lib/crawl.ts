import jsdom from 'jsdom';
const { JSDOM } = jsdom;

export const getURLsFromHTML = (htmlBody: string, baseURL: string) => {
  const dom = new JSDOM(htmlBody);
  return [...dom.window.document.querySelectorAll('a')].map((a) =>
    a.href.startsWith('/')
      ? new URL(a.href, baseURL).href
      : new URL(a.href).href
  );
};

export const normalizeURL = (url: string) => {
  try {
    const { host, pathname } = new URL(url);
    return host + pathname;
  } catch (_) {
    throw new Error('Not a valid url');
  }
};
