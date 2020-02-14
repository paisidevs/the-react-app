import {
  GetAlbum,
  GetAlbums,
  GetArtists,
  GetPlaylists,
  GetSongs,
} from '../../containers';

export const routes: any = [
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
    routes: [
      {
        component: GetAlbum,
        path: '/library/albums/:id',
        title: 'Album',
      },
    ],
  },
  {
    component: GetSongs,
    path: '/library/songs',
    title: 'Songs',
  },
];
