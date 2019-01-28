import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'
import Routes from '../../share/Routes'

const isProduction = process.env.NODE_ENV === 'production';

const content = (path) => {
  return renderToString(
    <StaticRouter location={path} context={{}}>
      { Routes }
    </StaticRouter>
  )
}

const html = (path) => {
  const link = isProduction ? `<link rel="stylesheet" href="css/main.css" />` : '';

  const bodyContent = content(path)

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>App Name</title>
        ${link}
      </head>
      <body>
        <div id="root">${bodyContent}</div>

        <script src="vendor.js"></script>
        <script src="main.js"></script>
      </body>
    </html>
  `;
}

export default html