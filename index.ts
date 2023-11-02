#!/usr/bin/env node
import { crawlPage } from './lib/crawl';
import { printReport } from './lib/report';

require('yargs')
  .command({
    command: 'crawl',
    describe: 'Crawl a url',
    builder: {
      url: {
        describe: 'input',
        demandOption: true,
        type: 'string',
      },
    },
    async handler({ url }: { url: string }) {
      console.log(`started crawling: ${url}`.blue);
      const result = await crawlPage(url, url, {});
      printReport(result);
    },
  })
  .help().argv;
