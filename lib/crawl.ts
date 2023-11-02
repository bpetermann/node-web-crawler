import { log } from './print';
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
  } catch {
    throw new Error('Not a valid url');
  }
};

const httpRequest = async (url: string) => {
  log('blue', `crawling ${url}`);
  try {
    const response = await fetch(url);
    const html = await response.text();
    return html;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const crawlPage = async (url: string, current: string, pages: {}) => {
  const { hostname } = new URL(url);
  const { hostname: currentHost } = new URL(current);

  if (hostname !== currentHost) {
    return pages;
  }

  const normalizedCurrent = normalizeURL(current);

  if (pages[normalizedCurrent] > 0) {
    pages[normalizedCurrent]++;
    return pages;
  }

  pages[normalizedCurrent] = 1;

  let doc = await httpRequest(current);

  const urls = getURLsFromHTML(doc, url);

  for (const next of urls) {
    pages = await crawlPage(url, next, pages);
  }

  return pages;
};
