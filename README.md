## Node Link Crawler

- The Node Link Crawler is a tool that generates an internal links report for any website on the internet

### Getting started

To get started with the Node Link Crawler, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/bpetermann/node-web-crawler.git
cd node-web-crawler
```

2. Build the `app` folder and install dependencies:

```bash
npm run fresh
```

### Usage

To use the web crawler, run the following command:

```js
node app crawl --url <website>
```

Replace `<website>` with the site you which to crawl. All the internal links will be printed to the console.

## Dependencies/Packages

- [jsdom](https://www.npmjs.com/package/jsdom)
- [colors](https://www.npmjs.com/package/colors)
- [yargs](https://www.npmjs.com/package/yargs)
