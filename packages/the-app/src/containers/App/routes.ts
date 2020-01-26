import { Library, NotFound } from '../../pages';
import AddAlbum from '../AddAlbum';

export const routes: any = [
  {
    exact: true,
    component: AddAlbum,
    path: '/',
    title: 'Discover',
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
