export default type => {
  return type == 'server' ? ['./src/server/render/serverRender.js'] : ['./src/client/index.jsx']
}