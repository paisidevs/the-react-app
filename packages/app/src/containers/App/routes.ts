import { NotFound } from '../../pages';
import Example from '../../pages/Example';

export const routes: any = [
  {
    exact: true,
    component: Example,
    path: '/',
    title: 'Home',
  },
  {
    path: '*',
    component: NotFound,
  },
];
