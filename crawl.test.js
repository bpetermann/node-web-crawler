const { normalizeURL } = require('./crawl.js')
const { expect } = require('@jest/globals');

const normalized = 'example.com/';
const normalizedPath = 'example.com/demonstration';

it('should remove the protocol of the url', () => {
  const url = 'https://example.com/';

  const result = normalizeURL(url);

  expect(result).toBe(normalized);
});

it('should keep the pathname of the url', () => {
  const url = 'https://example.com/demonstration';

  const result = normalizeURL(url);

  expect(result).toBe(normalizedPath);
});

it('should throw in case of a invalid url', () => {
  const url = 'thisisnotavalidurl';

  const result = () => {
    normalizeURL(url);
  };

  expect(result).toThrow('Not a valid url');
});
