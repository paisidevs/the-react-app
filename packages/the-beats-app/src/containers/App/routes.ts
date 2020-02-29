import { Home, Library, NotFound, Profile } from '../../pages';

export const routes: any = [
  {
    exact: true,
    component: Home,
    path: '/',
    title: 'Discover',
  },
  {
    component: Library,
    path: '/library',
    title: 'Library',
  },
  {
    component: Profile,
    path: '/profile',
    title: 'Profile',
  },
  {
    path: '*',
    component: NotFound,
  },
];
