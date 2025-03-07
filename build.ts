import fs from 'fs';

import { marked } from 'marked';
import * as sass from 'sass';

import pkg from './package.json' with { type: 'json' };

const RESUME_SASS = sass.compile('./src/resume.scss');

const RESUME_TITLE = pkg.keywords.slice(0, 3).join('_');

const IPHONE = '<img class="iphone" src="https://img.shields.io/badge/%E7%94%B5%E8%AF%9D-15321871599-blue" alt="phone">';

const html = (content: string, header: string = '') => {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charSet="utf-8"/>
    <title>${RESUME_TITLE}</title>
    <meta name="description" content="杨军龙的个人简历"/>
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
    <style>
      body {
        margin: 0;
        padding: 30px;
      }
      #resume {
        max-width: 720px;
        margin: 0 auto;
        border: 1px solid #d0d7de;
        border-radius: 6px;
        padding: 32px;
      }
      .iphone {
        display: none;
      }
      @media print {
          body {
            margin: 0;
            padding: 0;
          }
          #resume {
            border: none;
            padding: 0;
          }
            .iphone {
              display: inline;
            }
      }
    </style>
  </head>
  <body>
    <div id="resume">${header}${content}</div>
  </body>
</html>`;
};

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const paddedMonth = String(month).padStart(2, '0');
  const paddedDay = String(day).padStart(2, '0');
  const paddedHours = String(hours).padStart(2, '0');
  const paddedMinutes = String(minutes).padStart(2, '0');

  return `${year}/${paddedMonth}/${paddedDay} ${paddedHours}:${paddedMinutes}`;
}

const headerTemplate = `
<style>
  .header {
    width: 100%;
    text-align: right;
    font-size: 10px;
    padding-right: 30px;
  }
</style>
<div class="header"><span class="resume-title">${RESUME_TITLE}</span> - <span class="resume-date">${formatDate(new Date())}</span> - <span class="version">v${pkg.version}</span></div>
`;

let mdContent = fs.readFileSync('./README.md', 'utf8');
mdContent = mdContent.replace('<!-- iphone -->', IPHONE);
const htmlContent = `
    <style>${RESUME_SASS.css}</style>
    ${marked.parse(mdContent)}
  `;

fs.mkdirSync('./dist', { recursive: true });
fs.writeFileSync('./dist/index.html', html(htmlContent, headerTemplate));
