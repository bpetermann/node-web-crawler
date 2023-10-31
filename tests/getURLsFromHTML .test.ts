import { getURLsFromHTML } from '../lib/crawl';
import { expect } from '@jest/globals';

const url = 'https://example.com';
const link = 'https://example.com/about';

it('should get all the links from a given html body', () => {
  const result = getURLsFromHTML(
    `
  <html>
  <body>
      <a href="https://example.com/about"><span>Go to About</span></a>
      <a href="https://example.com/imprint"><span>Go to Imprint</span></a>
      <a href="https://example.com/settings"><span>Go to Settings</span></a>
  </body>
  </html>
  `,
    url
  );

  expect(result).toContain(link);
});

it('should return an empty array if no links were found', () => {
  const result = getURLsFromHTML(`<html><body></body></html>`, url);

  const expected = [];

  expect(result).toEqual(expected);
});

it('should add the base url in case it is not provided', () => {
  const result = getURLsFromHTML(
    `<html><body><a href="/about"><span>Go to About</span></a></body></html>`,
    url
  );

  expect(result).toContain(link);
});

it('should handle different base urls', () => {
  const result = getURLsFromHTML(
    '<html><body><a href="/about"><span>Path One></span></a><a href="https://other.com/path/one"><span>Other path></span></a></body>',
    url
  );
  const expected = [link, 'https://other.com/path/one'];
  expect(result).toEqual(expected);
});
