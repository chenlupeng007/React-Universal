const Router = require('koa-router');

const router = new Router({
  prefix: '/api'
});

const todo = [
  {
    id: 1,
    title: 'Go to the Gym'
  },
  {
    id: 2,
    title: 'Dentist Appointment'
  },
  {
    id: 3,
    title: 'Finish homework'
  }
];

router.get('/todo/list', (ctx) => {
  ctx.body = JSON.stringify(todo);
});

export default router