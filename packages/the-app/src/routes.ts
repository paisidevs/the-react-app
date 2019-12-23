import { Dashboard, NotFound } from './containers';

const routes: any = [
  {
    exact: true,
    secure: true,
    component: Dashboard,
    path: ['/', '/dashboard'],
    title: 'Dashboard',
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;
