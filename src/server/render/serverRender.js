import html from './html'

const serverRender = () => {
  return async (ctx, next) => {
    const path = ctx.request.path.split('.');

    if(path.length > 1) {
      await next()
    }
    else {
      const htmlTemplate = html(ctx.path);
      ctx.body = htmlTemplate;
    }
  }
}

export default serverRender;
