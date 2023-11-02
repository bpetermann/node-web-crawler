import colors from 'colors';

export const printReport = (pages: { [k: string]: number }) => {
  console.log(colors.green('start report:'));
  formatPages(pages).map(({ href, count }) => {
    console.log(`found ${count} link${count > 1 ? 's' : ''} to ${href}`);
  });
  console.log(colors.green('end report'));
};

const formatPages = (pages: { [k: string]: number }) => {
  return Object.keys(pages)
    .map((key) => ({ href: key, count: pages[key] }))
    .sort((b, a) => a.count - b.count);
};
