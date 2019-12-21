import { Home, NotFound } from './containers';

const routes: any = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;
