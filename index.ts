#!/usr/bin/env node
import { printReport } from './lib/report';
import { crawlPage } from './lib/crawl';
import { log } from './lib/helper';

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
      log(`started crawling: ${url}`, 'magenta');
      const result = await crawlPage(url, url, {});
      printReport(result);
    },
  })
  .help().argv;
