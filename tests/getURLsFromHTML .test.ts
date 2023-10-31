import { getURLsFromHTML } from '../lib/crawl';
import { expect } from '@jest/globals';

const body = `
<html>
<body>
    <a href="https://example.com/about"><span>Go to About</span></a>
</body>
</html>
`;

const url = 'https://example.com/';
const link = 'https://example.com/about';

it('should get all the links from a given html body', () => {
  const result = getURLsFromHTML(body, url);

  expect(result).toContain(link);
});

it('should return an empty array if no links were found', () => {
  const result = getURLsFromHTML(
    `
  <html>
  <body>
  </body>
  </html>
  `,
    url
  );

  const expected = [];

  expect(result).toEqual(expected);
});
