import { log } from './helper';

export const printReport = (pages: { [k: string]: number }) => {
  log('start report:', 'green');
  formatPages(pages).map(({ href, count }) => {
    log(`found ${count} link${count > 1 ? 's' : ''} to ${href}`);
  });
  log('end report', 'green');
};

const formatPages = (pages: { [k: string]: number }) => {
  return Object.keys(pages)
    .map((key) => ({ href: key, count: pages[key] }))
    .sort((b, a) => a.count - b.count);
};
