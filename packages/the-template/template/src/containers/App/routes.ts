import { Home, NotFound } from '../../pages';

export const routes: any = [
  {
    exact: true,
    component: Home,
    path: '/',
    title: 'Discover',
  },
  {
    path: '*',
    component: NotFound,
  },
];
