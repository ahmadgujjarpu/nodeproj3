const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const taskRoute = require('./task.route');
const projectRoute = require('./project.route');

const router = express.Router();

const routes = [
  {
    path: '/auth',
    route: authRoute
  },
  {
    path: '/user',
    route: userRoute
  },
  {
      path:'/project',
      route:projectRoute
  },
  {
    path:'/task',
    route:taskRoute
}
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});
module.exports = router;