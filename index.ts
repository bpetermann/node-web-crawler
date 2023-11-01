#!/usr/bin/env node
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
    handler({ url }: { url: string }) {
      console.log(colors.magenta(`Started crawling: ${url}`));
    },
  })
  .help().argv;
