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

export const crawlPage = async (url: string, current: string, pages: {}) => {
  const { host } = new URL(url);
  const { host: currentHost } = new URL(current);

  if (host !== currentHost) {
    return pages;
  }

  const normalizedCurrent = normalizeURL(current);

  if (pages[normalizedCurrent] > 0) {
    pages[normalizedCurrent]++;
    return pages;
  }

  if (url === current) {
    pages[normalizedCurrent] = 0;
  } else {
    pages[normalizedCurrent] = 1;
  }

  let doc: string;

  try {
    const response = await fetch(url);
    const html = await response.text();
    doc = html;
  } catch (err) {
    console.log(err.message);
  }

  const urls = getURLsFromHTML(doc, url);

  urls.map((item) => crawlPage(url, item, pages));

  return pages;
};
