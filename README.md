# React-Universal
React SSR starter with Ant Design and Koa2.

Update Time: 2019.2

### Dependencies
- Webpack 4.x
- Babel 7.x
- React 16.x
- React-router-dom 4.x/React-router-config
- Redux 4.x/Redux-thunk
- Ant Design 3.x
- React Hot Loader 4.x
- Koa-webpack 5.x
- Koa 2.x

### Features
- written using ES6, both client and server side.
- SCSS and CSS in modules
- Ant Design(you had to import css files on your own)
- HMR(client&server)

### Requirement
- System: Unix Like
- Node 10+
- Yarn 1.3

### Begin
```
$ git clone https://github.com/chenlupeng007/React-Universal.git
$ cd React-Universal
$ yarn
```

### After Installation
yout had better change the line

```javascript
const hotClient = await getClient(compiler, options);
```

 in `koa-webpack/lib/index.js` to

 ```javascript
 const hotClient = await getClient(compiler.compilers.find(compiler => compiler.name === 'client'), options);
 ```

### Development
```
$ yarn start
```

### Production
```
$ yarn start-prod
```

### How to write your own components
  1. dumb component: A, export withStyles(A, styles)
  2. Container: write static function: loadData, export `connect(mapStateToProps, mapDispatchToProps)(Container)`
  3. config rotues in `src/common/routes`
  4. config reducers in `src/common/reducers/`

### Warning
Don't remove the folder `src/client/components/Empty`