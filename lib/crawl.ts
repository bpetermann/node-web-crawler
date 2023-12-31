import { log } from './helper';
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
  log(`crawling ${url}`, 'blue');
  try {
    const response = await fetch(url);
    return await response.text();
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

  const urls = getURLsFromHTML(await httpRequest(current), url);

  for (const next of urls) {
    pages = await crawlPage(url, next, pages);
  }

  return pages;
};
