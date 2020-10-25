import { Example, NotFound, SocialAuth } from './pages';

export const routes: any = [
  {
    exact: true,
    component: Example,
    path: '/',
    title: 'Home',
  },
  {
    exact: true,
    component: SocialAuth,
    path: '/auth/social/:provider',
    title: 'Social Auth',
  },
  {
    path: '*',
    component: NotFound,
  },
];
