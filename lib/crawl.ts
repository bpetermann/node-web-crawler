const jsdom = require('jsdom');
const { JSDOM } = jsdom;

export const getURLsFromHTML = (htmlBody, baseURL) => {
  const dom = new JSDOM(htmlBody);
  const links = dom.window.document.querySelectorAll('a')[0]?.href;
  return links || [];
};

export const normalizeURL = (url: string) => {
  try {
    const { host, pathname } = new URL(url);
    return host + pathname;
  } catch (_) {
    throw new Error('Not a valid url');
  }
};
