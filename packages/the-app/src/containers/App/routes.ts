import { Home, Library, NotFound } from '../../pages';

export const routes: any = [
  {
    exact: true,
    component: Home,
    path: '/',
    title: 'Home',
  },
  {
    component: Library,
    path: '/library',
    title: 'Library',
  },
  {
    path: '*',
    component: NotFound,
  },
];
