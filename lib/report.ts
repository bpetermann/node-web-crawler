import { log } from './print';

export const printReport = (pages: { [k: string]: number }) => {
  log('green', 'start report:');
  formatPages(pages).map(({ href, count }) => {
    log('white', `found ${count} link${count > 1 ? 's' : ''} to ${href}`);
  });
  log('green', 'end report');
};

const formatPages = (pages: { [k: string]: number }) => {
  return Object.keys(pages)
    .map((key) => ({ href: key, count: pages[key] }))
    .sort((b, a) => a.count - b.count);
};
