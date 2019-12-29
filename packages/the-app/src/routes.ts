import {
  GetAlbums,
  GetArtists,
  GetPlaylists,
  GetSongs,
  Library,
  NotFound,
} from './containers';

const routes: any = [
  {
    exact: true,
    private: true,
    component: Library,
    path: '/',
    title: 'Library',
  },
  {
    private: true,
    component: Library,
    path: '/library',
    title: 'Library',
    routes: [
      {
        component: GetPlaylists,
        path: '/library/playlists',
        title: 'Playlists',
      },
      {
        component: GetArtists,
        path: '/library/artists',
        title: 'Artists',
      },
      {
        component: GetAlbums,
        path: '/library/albums',
        title: 'Albums',
      },
      {
        component: GetSongs,
        path: '/library/songs',
        title: 'Songs',
      },
    ],
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;
