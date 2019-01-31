import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { matchRoutes } from 'react-router-config'

import { Routes, routes } from '@common/Routes'
import configureStore from '@common/store'

const isProduction = process.env.NODE_ENV === 'production';

const getInitialState = async (path) => {
  const store = configureStore();

  const promises = []

  const matchedRoutes = matchRoutes(routes, path)

  matchedRoutes.forEach((item) => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })

  await Promise.all(promises);

  return store
}

const html = async (path) => {
  const Path = isProduction ? 'app/': '';
  const link = isProduction ? `<link rel="stylesheet" href="${Path}css/main.css" />` : '';

  const store = await getInitialState(path)

  const App = () => (
    <Provider store={store}>
      <StaticRouter location={path} context={{}}>
        { Routes }
      </StaticRouter>
    </Provider>
  )

  const content = renderToString(<App />)

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>App Name</title>
        ${link}
      </head>
      <body>
        <div id="root">${content}</div>

        <script>
          window.defaultState = ${JSON.stringify(store.getState())};
        </script>
        <script src="${Path}vendor.js"></script>
        <script src="${Path}main.js"></script>
      </body>
    </html>
  `;
}

export default html