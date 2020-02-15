import {
  GetAlbum,
  GetAlbums,
  GetArtists,
  GetPlaylists,
  GetTracks,
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
    component: GetTracks,
    path: '/library/songs',
    title: 'Songs',
  },
];
