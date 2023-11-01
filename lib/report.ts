import colors from 'colors';

export const printReport = (pages: { [k: string]: number }) => {
  console.log(colors.green('report is starting:'));
  formatReport(pages).map(({ href, count }) => {
    console.log(`found ${count} link${count > 1 ? 's' : ''} to ${href}`);
  });
};

const formatReport = (pages: { [k: string]: number }) => {
  const pagesArray = [];
  for (const key in pages) {
    pagesArray.push({ href: key, count: pages[key] });
  }
  pagesArray.sort((a, b) => a.count - b.count);
  return pagesArray;
};
