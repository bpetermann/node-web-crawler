import { formatPages } from '../lib/report';
import { expect } from '@jest/globals';

it('should transform { [k: string]: number } to { href: string; count: number }[]', () => {
  const input = {
    url: 1,
  };

  const actual = formatPages(input);

  const expected = [{ href: 'url', count: 1 }];

  expect(actual).toEqual(expected);
});

it('should sort the input in descending order', () => {
  const input = {
    url1: 5,
    url2: 1,
    url3: 3,
    url4: 10,
    url5: 7,
  };

  const actual = formatPages(input);

  const expected = [
    { href: 'url4', count: 10 },
    { href: 'url5', count: 7 },
    { href: 'url1', count: 5 },
    { href: 'url3', count: 3 },
    { href: 'url2', count: 1 },
  ];

  expect(actual).toEqual(expected);
});

it('should return an empty array if the input is empty', () => {
  const input = {};

  const actual = formatPages(input);

  const expected = [];

  expect(actual).toEqual(expected);
});
