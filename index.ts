#!/usr/bin/env node
import { crawlPage } from './lib/crawl';
import colors from 'colors';

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
      console.log(colors.blue(`started crawling: ${url}`));
      const links = await crawlPage(url, url, {});
      console.log(links);
    },
  })
  .help().argv;
