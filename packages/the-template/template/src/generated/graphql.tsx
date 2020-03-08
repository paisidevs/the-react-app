import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
  NonEmptyString: any,
  Duration: any,
};

export type AddToPlaylistPayload = {
  playlistId: Scalars['ID'],
  trackId: Scalars['ID'],
};

export type AggregateAlbum = {
   __typename?: 'AggregateAlbum',
  count: Scalars['Int'],
};

export type AggregateArtist = {
   __typename?: 'AggregateArtist',
  count: Scalars['Int'],
};

export type AggregatePlaylist = {
   __typename?: 'AggregatePlaylist',
  count: Scalars['Int'],
};

export type AggregateTrack = {
   __typename?: 'AggregateTrack',
  count: Scalars['Int'],
};

export type AggregateUser = {
   __typename?: 'AggregateUser',
  count: Scalars['Int'],
};

export type Album = {
   __typename?: 'Album',
  id: Scalars['ID'],
  alias: Scalars['String'],
  artists?: Maybe<Array<Artist>>,
  duration?: Maybe<Scalars['Int']>,
  genres: Array<Scalars['String']>,
  artwork?: Maybe<Image>,
  name: Scalars['String'],
  numTracks?: Maybe<Scalars['Int']>,
  releaseDate: Scalars['DateTime'],
  releaseType: ReleaseType,
  tracks?: Maybe<Array<Track>>,
  addedBy: User,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};


export type AlbumArtistsArgs = {
  where?: Maybe<ArtistWhereInput>,
  orderBy?: Maybe<ArtistOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type AlbumTracksArgs = {
  where?: Maybe<TrackWhereInput>,
  orderBy?: Maybe<TrackOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type AlbumConnection = {
   __typename?: 'AlbumConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<AlbumEdge>>,
  aggregate: AggregateAlbum,
};

export type AlbumCreatePayload = {
  artists: Array<ArtistPayload>,
  artwork?: Maybe<ArtworkPayload>,
  genres?: Maybe<Array<Scalars['NonEmptyString']>>,
  name: Scalars['NonEmptyString'],
  releaseDate: Scalars['DateTime'],
  releaseType: ReleaseType,
  tracks: Array<TrackPayload>,
};

export type AlbumEdge = {
   __typename?: 'AlbumEdge',
  node: Album,
  cursor: Scalars['String'],
};

export enum AlbumOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AliasAsc = 'alias_ASC',
  AliasDesc = 'alias_DESC',
  DurationAsc = 'duration_ASC',
  DurationDesc = 'duration_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NumTracksAsc = 'numTracks_ASC',
  NumTracksDesc = 'numTracks_DESC',
  ReleaseDateAsc = 'releaseDate_ASC',
  ReleaseDateDesc = 'releaseDate_DESC',
  ReleaseTypeAsc = 'releaseType_ASC',
  ReleaseTypeDesc = 'releaseType_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type AlbumWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  alias?: Maybe<Scalars['String']>,
  alias_not?: Maybe<Scalars['String']>,
  alias_in?: Maybe<Array<Scalars['String']>>,
  alias_not_in?: Maybe<Array<Scalars['String']>>,
  alias_lt?: Maybe<Scalars['String']>,
  alias_lte?: Maybe<Scalars['String']>,
  alias_gt?: Maybe<Scalars['String']>,
  alias_gte?: Maybe<Scalars['String']>,
  alias_contains?: Maybe<Scalars['String']>,
  alias_not_contains?: Maybe<Scalars['String']>,
  alias_starts_with?: Maybe<Scalars['String']>,
  alias_not_starts_with?: Maybe<Scalars['String']>,
  alias_ends_with?: Maybe<Scalars['String']>,
  alias_not_ends_with?: Maybe<Scalars['String']>,
  artists_every?: Maybe<ArtistWhereInput>,
  artists_some?: Maybe<ArtistWhereInput>,
  artists_none?: Maybe<ArtistWhereInput>,
  duration?: Maybe<Scalars['Int']>,
  duration_not?: Maybe<Scalars['Int']>,
  duration_in?: Maybe<Array<Scalars['Int']>>,
  duration_not_in?: Maybe<Array<Scalars['Int']>>,
  duration_lt?: Maybe<Scalars['Int']>,
  duration_lte?: Maybe<Scalars['Int']>,
  duration_gt?: Maybe<Scalars['Int']>,
  duration_gte?: Maybe<Scalars['Int']>,
  artwork?: Maybe<ImageWhereInput>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  numTracks?: Maybe<Scalars['Int']>,
  numTracks_not?: Maybe<Scalars['Int']>,
  numTracks_in?: Maybe<Array<Scalars['Int']>>,
  numTracks_not_in?: Maybe<Array<Scalars['Int']>>,
  numTracks_lt?: Maybe<Scalars['Int']>,
  numTracks_lte?: Maybe<Scalars['Int']>,
  numTracks_gt?: Maybe<Scalars['Int']>,
  numTracks_gte?: Maybe<Scalars['Int']>,
  releaseDate?: Maybe<Scalars['DateTime']>,
  releaseDate_not?: Maybe<Scalars['DateTime']>,
  releaseDate_in?: Maybe<Array<Scalars['DateTime']>>,
  releaseDate_not_in?: Maybe<Array<Scalars['DateTime']>>,
  releaseDate_lt?: Maybe<Scalars['DateTime']>,
  releaseDate_lte?: Maybe<Scalars['DateTime']>,
  releaseDate_gt?: Maybe<Scalars['DateTime']>,
  releaseDate_gte?: Maybe<Scalars['DateTime']>,
  releaseType?: Maybe<ReleaseType>,
  releaseType_not?: Maybe<ReleaseType>,
  releaseType_in?: Maybe<Array<ReleaseType>>,
  releaseType_not_in?: Maybe<Array<ReleaseType>>,
  tracks_every?: Maybe<TrackWhereInput>,
  tracks_some?: Maybe<TrackWhereInput>,
  tracks_none?: Maybe<TrackWhereInput>,
  addedBy?: Maybe<UserWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<AlbumWhereInput>>,
  OR?: Maybe<Array<AlbumWhereInput>>,
  NOT?: Maybe<Array<AlbumWhereInput>>,
};

export type Artist = {
   __typename?: 'Artist',
  id: Scalars['ID'],
  albums?: Maybe<Array<Album>>,
  alias: Scalars['String'],
  avatar?: Maybe<Image>,
  featuresIn?: Maybe<Array<Track>>,
  genres: Array<Scalars['String']>,
  name: Scalars['String'],
  tracks?: Maybe<Array<Track>>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};


export type ArtistAlbumsArgs = {
  where?: Maybe<AlbumWhereInput>,
  orderBy?: Maybe<AlbumOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type ArtistFeaturesInArgs = {
  where?: Maybe<TrackWhereInput>,
  orderBy?: Maybe<TrackOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type ArtistTracksArgs = {
  where?: Maybe<TrackWhereInput>,
  orderBy?: Maybe<TrackOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type ArtistConnection = {
   __typename?: 'ArtistConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<ArtistEdge>>,
  aggregate: AggregateArtist,
};

export type ArtistCreatePayload = {
  alias: Scalars['String'],
  name: Scalars['String'],
};

export type ArtistEdge = {
   __typename?: 'ArtistEdge',
  node: Artist,
  cursor: Scalars['String'],
};

export enum ArtistOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AliasAsc = 'alias_ASC',
  AliasDesc = 'alias_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ArtistPayload = {
  name: Scalars['NonEmptyString'],
};

export type ArtistWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  albums_every?: Maybe<AlbumWhereInput>,
  albums_some?: Maybe<AlbumWhereInput>,
  albums_none?: Maybe<AlbumWhereInput>,
  alias?: Maybe<Scalars['String']>,
  alias_not?: Maybe<Scalars['String']>,
  alias_in?: Maybe<Array<Scalars['String']>>,
  alias_not_in?: Maybe<Array<Scalars['String']>>,
  alias_lt?: Maybe<Scalars['String']>,
  alias_lte?: Maybe<Scalars['String']>,
  alias_gt?: Maybe<Scalars['String']>,
  alias_gte?: Maybe<Scalars['String']>,
  alias_contains?: Maybe<Scalars['String']>,
  alias_not_contains?: Maybe<Scalars['String']>,
  alias_starts_with?: Maybe<Scalars['String']>,
  alias_not_starts_with?: Maybe<Scalars['String']>,
  alias_ends_with?: Maybe<Scalars['String']>,
  alias_not_ends_with?: Maybe<Scalars['String']>,
  avatar?: Maybe<ImageWhereInput>,
  featuresIn_every?: Maybe<TrackWhereInput>,
  featuresIn_some?: Maybe<TrackWhereInput>,
  featuresIn_none?: Maybe<TrackWhereInput>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  tracks_every?: Maybe<TrackWhereInput>,
  tracks_some?: Maybe<TrackWhereInput>,
  tracks_none?: Maybe<TrackWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<ArtistWhereInput>>,
  OR?: Maybe<Array<ArtistWhereInput>>,
  NOT?: Maybe<Array<ArtistWhereInput>>,
};

export type ArtworkPayload = {
  url: Scalars['NonEmptyString'],
};

export type Audio = {
   __typename?: 'Audio',
  id: Scalars['ID'],
  bitrate?: Maybe<Scalars['Int']>,
  format: Scalars['String'],
  size?: Maybe<Scalars['Int']>,
  uploadedBy: User,
  url: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type AudioWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  bitrate?: Maybe<Scalars['Int']>,
  bitrate_not?: Maybe<Scalars['Int']>,
  bitrate_in?: Maybe<Array<Scalars['Int']>>,
  bitrate_not_in?: Maybe<Array<Scalars['Int']>>,
  bitrate_lt?: Maybe<Scalars['Int']>,
  bitrate_lte?: Maybe<Scalars['Int']>,
  bitrate_gt?: Maybe<Scalars['Int']>,
  bitrate_gte?: Maybe<Scalars['Int']>,
  format?: Maybe<Scalars['String']>,
  format_not?: Maybe<Scalars['String']>,
  format_in?: Maybe<Array<Scalars['String']>>,
  format_not_in?: Maybe<Array<Scalars['String']>>,
  format_lt?: Maybe<Scalars['String']>,
  format_lte?: Maybe<Scalars['String']>,
  format_gt?: Maybe<Scalars['String']>,
  format_gte?: Maybe<Scalars['String']>,
  format_contains?: Maybe<Scalars['String']>,
  format_not_contains?: Maybe<Scalars['String']>,
  format_starts_with?: Maybe<Scalars['String']>,
  format_not_starts_with?: Maybe<Scalars['String']>,
  format_ends_with?: Maybe<Scalars['String']>,
  format_not_ends_with?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  size_not?: Maybe<Scalars['Int']>,
  size_in?: Maybe<Array<Scalars['Int']>>,
  size_not_in?: Maybe<Array<Scalars['Int']>>,
  size_lt?: Maybe<Scalars['Int']>,
  size_lte?: Maybe<Scalars['Int']>,
  size_gt?: Maybe<Scalars['Int']>,
  size_gte?: Maybe<Scalars['Int']>,
  uploadedBy?: Maybe<UserWhereInput>,
  url?: Maybe<Scalars['String']>,
  url_not?: Maybe<Scalars['String']>,
  url_in?: Maybe<Array<Scalars['String']>>,
  url_not_in?: Maybe<Array<Scalars['String']>>,
  url_lt?: Maybe<Scalars['String']>,
  url_lte?: Maybe<Scalars['String']>,
  url_gt?: Maybe<Scalars['String']>,
  url_gte?: Maybe<Scalars['String']>,
  url_contains?: Maybe<Scalars['String']>,
  url_not_contains?: Maybe<Scalars['String']>,
  url_starts_with?: Maybe<Scalars['String']>,
  url_not_starts_with?: Maybe<Scalars['String']>,
  url_ends_with?: Maybe<Scalars['String']>,
  url_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<AudioWhereInput>>,
  OR?: Maybe<Array<AudioWhereInput>>,
  NOT?: Maybe<Array<AudioWhereInput>>,
};

export type AuthPayload = {
   __typename?: 'AuthPayload',
  token: Scalars['String'],
  user: User,
};



export type Image = {
   __typename?: 'Image',
  id: Scalars['ID'],
  uploadedBy: User,
  url: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export enum ImageOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ImageWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  uploadedBy?: Maybe<UserWhereInput>,
  url?: Maybe<Scalars['String']>,
  url_not?: Maybe<Scalars['String']>,
  url_in?: Maybe<Array<Scalars['String']>>,
  url_not_in?: Maybe<Array<Scalars['String']>>,
  url_lt?: Maybe<Scalars['String']>,
  url_lte?: Maybe<Scalars['String']>,
  url_gt?: Maybe<Scalars['String']>,
  url_gte?: Maybe<Scalars['String']>,
  url_contains?: Maybe<Scalars['String']>,
  url_not_contains?: Maybe<Scalars['String']>,
  url_starts_with?: Maybe<Scalars['String']>,
  url_not_starts_with?: Maybe<Scalars['String']>,
  url_ends_with?: Maybe<Scalars['String']>,
  url_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<ImageWhereInput>>,
  OR?: Maybe<Array<ImageWhereInput>>,
  NOT?: Maybe<Array<ImageWhereInput>>,
};

export type LoginUserPayload = {
  email: Scalars['String'],
  password: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createAlbum?: Maybe<Album>,
  deleteAlbum?: Maybe<Album>,
  createArtist?: Maybe<Artist>,
  createPlaylist?: Maybe<Playlist>,
  addToPlaylist?: Maybe<Playlist>,
  createTrack?: Maybe<Track>,
  createUser: AuthPayload,
  updateUser: User,
  authenticateUser: AuthPayload,
};


export type MutationCreateAlbumArgs = {
  input: AlbumCreatePayload
};


export type MutationDeleteAlbumArgs = {
  id: Scalars['ID']
};


export type MutationCreateArtistArgs = {
  input: ArtistCreatePayload
};


export type MutationCreatePlaylistArgs = {
  input: PlaylistCreatePayload
};


export type MutationAddToPlaylistArgs = {
  input: AddToPlaylistPayload
};


export type MutationCreateTrackArgs = {
  input: TrackCreatePayload
};


export type MutationCreateUserArgs = {
  input: UserCreatePayload
};


export type MutationUpdateUserArgs = {
  input: UserUpdatePayload
};


export type MutationAuthenticateUserArgs = {
  input: LoginUserPayload
};

export type Node = {
   __typename?: 'Node',
  id: Scalars['ID'],
};


export type PageInfo = {
   __typename?: 'PageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
  endCursor?: Maybe<Scalars['String']>,
};

export type Playlist = {
   __typename?: 'Playlist',
  id: Scalars['ID'],
  alias: Scalars['String'],
  artwork?: Maybe<Array<Image>>,
  collaborative: Scalars['Boolean'],
  creator: User,
  description?: Maybe<Scalars['String']>,
  duration: Scalars['Int'],
  name: Scalars['String'],
  numTracks: Scalars['Int'],
  privacy: Privacy,
  tracks?: Maybe<Array<PlaylistTrack>>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};


export type PlaylistArtworkArgs = {
  where?: Maybe<ImageWhereInput>,
  orderBy?: Maybe<ImageOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PlaylistTracksArgs = {
  where?: Maybe<PlaylistTrackWhereInput>,
  orderBy?: Maybe<PlaylistTrackOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type PlaylistConnection = {
   __typename?: 'PlaylistConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<PlaylistEdge>>,
  aggregate: AggregatePlaylist,
};

export type PlaylistCreatePayload = {
  name: Scalars['NonEmptyString'],
  trackId?: Maybe<Scalars['ID']>,
};

export type PlaylistEdge = {
   __typename?: 'PlaylistEdge',
  node: Playlist,
  cursor: Scalars['String'],
};

export enum PlaylistOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AliasAsc = 'alias_ASC',
  AliasDesc = 'alias_DESC',
  CollaborativeAsc = 'collaborative_ASC',
  CollaborativeDesc = 'collaborative_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DurationAsc = 'duration_ASC',
  DurationDesc = 'duration_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NumTracksAsc = 'numTracks_ASC',
  NumTracksDesc = 'numTracks_DESC',
  PrivacyAsc = 'privacy_ASC',
  PrivacyDesc = 'privacy_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PlaylistTrack = {
   __typename?: 'PlaylistTrack',
  id: Scalars['ID'],
  addedAt: Scalars['DateTime'],
  addedBy: User,
  playlists?: Maybe<Array<Playlist>>,
  track: Track,
};


export type PlaylistTrackPlaylistsArgs = {
  where?: Maybe<PlaylistWhereInput>,
  orderBy?: Maybe<PlaylistOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export enum PlaylistTrackOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AddedAtAsc = 'addedAt_ASC',
  AddedAtDesc = 'addedAt_DESC'
}

export type PlaylistTrackWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  addedAt?: Maybe<Scalars['DateTime']>,
  addedAt_not?: Maybe<Scalars['DateTime']>,
  addedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  addedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  addedAt_lt?: Maybe<Scalars['DateTime']>,
  addedAt_lte?: Maybe<Scalars['DateTime']>,
  addedAt_gt?: Maybe<Scalars['DateTime']>,
  addedAt_gte?: Maybe<Scalars['DateTime']>,
  addedBy?: Maybe<UserWhereInput>,
  playlists_every?: Maybe<PlaylistWhereInput>,
  playlists_some?: Maybe<PlaylistWhereInput>,
  playlists_none?: Maybe<PlaylistWhereInput>,
  track?: Maybe<TrackWhereInput>,
  AND?: Maybe<Array<PlaylistTrackWhereInput>>,
  OR?: Maybe<Array<PlaylistTrackWhereInput>>,
  NOT?: Maybe<Array<PlaylistTrackWhereInput>>,
};

export type PlaylistWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  alias?: Maybe<Scalars['String']>,
  alias_not?: Maybe<Scalars['String']>,
  alias_in?: Maybe<Array<Scalars['String']>>,
  alias_not_in?: Maybe<Array<Scalars['String']>>,
  alias_lt?: Maybe<Scalars['String']>,
  alias_lte?: Maybe<Scalars['String']>,
  alias_gt?: Maybe<Scalars['String']>,
  alias_gte?: Maybe<Scalars['String']>,
  alias_contains?: Maybe<Scalars['String']>,
  alias_not_contains?: Maybe<Scalars['String']>,
  alias_starts_with?: Maybe<Scalars['String']>,
  alias_not_starts_with?: Maybe<Scalars['String']>,
  alias_ends_with?: Maybe<Scalars['String']>,
  alias_not_ends_with?: Maybe<Scalars['String']>,
  artwork_every?: Maybe<ImageWhereInput>,
  artwork_some?: Maybe<ImageWhereInput>,
  artwork_none?: Maybe<ImageWhereInput>,
  collaborative?: Maybe<Scalars['Boolean']>,
  collaborative_not?: Maybe<Scalars['Boolean']>,
  creator?: Maybe<UserWhereInput>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  duration_not?: Maybe<Scalars['Int']>,
  duration_in?: Maybe<Array<Scalars['Int']>>,
  duration_not_in?: Maybe<Array<Scalars['Int']>>,
  duration_lt?: Maybe<Scalars['Int']>,
  duration_lte?: Maybe<Scalars['Int']>,
  duration_gt?: Maybe<Scalars['Int']>,
  duration_gte?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  numTracks?: Maybe<Scalars['Int']>,
  numTracks_not?: Maybe<Scalars['Int']>,
  numTracks_in?: Maybe<Array<Scalars['Int']>>,
  numTracks_not_in?: Maybe<Array<Scalars['Int']>>,
  numTracks_lt?: Maybe<Scalars['Int']>,
  numTracks_lte?: Maybe<Scalars['Int']>,
  numTracks_gt?: Maybe<Scalars['Int']>,
  numTracks_gte?: Maybe<Scalars['Int']>,
  privacy?: Maybe<Privacy>,
  privacy_not?: Maybe<Privacy>,
  privacy_in?: Maybe<Array<Privacy>>,
  privacy_not_in?: Maybe<Array<Privacy>>,
  tracks_every?: Maybe<PlaylistTrackWhereInput>,
  tracks_some?: Maybe<PlaylistTrackWhereInput>,
  tracks_none?: Maybe<PlaylistTrackWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<PlaylistWhereInput>>,
  OR?: Maybe<Array<PlaylistWhereInput>>,
  NOT?: Maybe<Array<PlaylistWhereInput>>,
};

export enum Privacy {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
  Unlisted = 'UNLISTED'
}

export type Query = {
   __typename?: 'Query',
  album?: Maybe<Album>,
  albums?: Maybe<AlbumConnection>,
  artist?: Maybe<Artist>,
  artists?: Maybe<ArtistConnection>,
  playlist?: Maybe<Playlist>,
  playlists?: Maybe<PlaylistConnection>,
  track?: Maybe<Track>,
  tracks?: Maybe<TrackConnection>,
  user?: Maybe<User>,
  users?: Maybe<UserConnection>,
};


export type QueryAlbumArgs = {
  id: Scalars['ID']
};


export type QueryArtistArgs = {
  id: Scalars['ID']
};


export type QueryPlaylistArgs = {
  id: Scalars['ID']
};


export type QueryTrackArgs = {
  id: Scalars['ID']
};


export type QueryUserArgs = {
  id: Scalars['ID']
};

export enum ReleaseType {
  Album = 'ALBUM',
  Ep = 'EP',
  Lp = 'LP',
  Podcast = 'PODCAST',
  Single = 'SINGLE'
}

export type Track = {
   __typename?: 'Track',
  id: Scalars['ID'],
  album: Album,
  artists?: Maybe<Array<Artist>>,
  audio?: Maybe<Audio>,
  discNumber?: Maybe<Scalars['Int']>,
  duration?: Maybe<Scalars['Int']>,
  explicit: Scalars['Boolean'],
  featuring?: Maybe<Array<Artist>>,
  genre: Scalars['String'],
  isPlayable: Scalars['Boolean'],
  name: Scalars['String'],
  trackNumber: Scalars['Int'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};


export type TrackArtistsArgs = {
  where?: Maybe<ArtistWhereInput>,
  orderBy?: Maybe<ArtistOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type TrackFeaturingArgs = {
  where?: Maybe<ArtistWhereInput>,
  orderBy?: Maybe<ArtistOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type TrackConnection = {
   __typename?: 'TrackConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<TrackEdge>>,
  aggregate: AggregateTrack,
};

export type TrackCreatePayload = {
  artists: Array<ArtistPayload>,
  duration: Scalars['Duration'],
  featuring?: Maybe<Array<ArtistPayload>>,
  name: Scalars['NonEmptyString'],
  trackNumber: Scalars['Int'],
};

export type TrackEdge = {
   __typename?: 'TrackEdge',
  node: Track,
  cursor: Scalars['String'],
};

export enum TrackOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  DiscNumberAsc = 'discNumber_ASC',
  DiscNumberDesc = 'discNumber_DESC',
  DurationAsc = 'duration_ASC',
  DurationDesc = 'duration_DESC',
  ExplicitAsc = 'explicit_ASC',
  ExplicitDesc = 'explicit_DESC',
  GenreAsc = 'genre_ASC',
  GenreDesc = 'genre_DESC',
  IsPlayableAsc = 'isPlayable_ASC',
  IsPlayableDesc = 'isPlayable_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TrackNumberAsc = 'trackNumber_ASC',
  TrackNumberDesc = 'trackNumber_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TrackPayload = {
  artists: Array<ArtistPayload>,
  duration: Scalars['Duration'],
  featuring?: Maybe<Array<ArtistPayload>>,
  name: Scalars['NonEmptyString'],
  trackNumber: Scalars['Int'],
};

export type TrackWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  album?: Maybe<AlbumWhereInput>,
  artists_every?: Maybe<ArtistWhereInput>,
  artists_some?: Maybe<ArtistWhereInput>,
  artists_none?: Maybe<ArtistWhereInput>,
  audio?: Maybe<AudioWhereInput>,
  discNumber?: Maybe<Scalars['Int']>,
  discNumber_not?: Maybe<Scalars['Int']>,
  discNumber_in?: Maybe<Array<Scalars['Int']>>,
  discNumber_not_in?: Maybe<Array<Scalars['Int']>>,
  discNumber_lt?: Maybe<Scalars['Int']>,
  discNumber_lte?: Maybe<Scalars['Int']>,
  discNumber_gt?: Maybe<Scalars['Int']>,
  discNumber_gte?: Maybe<Scalars['Int']>,
  duration?: Maybe<Scalars['Int']>,
  duration_not?: Maybe<Scalars['Int']>,
  duration_in?: Maybe<Array<Scalars['Int']>>,
  duration_not_in?: Maybe<Array<Scalars['Int']>>,
  duration_lt?: Maybe<Scalars['Int']>,
  duration_lte?: Maybe<Scalars['Int']>,
  duration_gt?: Maybe<Scalars['Int']>,
  duration_gte?: Maybe<Scalars['Int']>,
  explicit?: Maybe<Scalars['Boolean']>,
  explicit_not?: Maybe<Scalars['Boolean']>,
  featuring_every?: Maybe<ArtistWhereInput>,
  featuring_some?: Maybe<ArtistWhereInput>,
  featuring_none?: Maybe<ArtistWhereInput>,
  genre?: Maybe<Scalars['String']>,
  genre_not?: Maybe<Scalars['String']>,
  genre_in?: Maybe<Array<Scalars['String']>>,
  genre_not_in?: Maybe<Array<Scalars['String']>>,
  genre_lt?: Maybe<Scalars['String']>,
  genre_lte?: Maybe<Scalars['String']>,
  genre_gt?: Maybe<Scalars['String']>,
  genre_gte?: Maybe<Scalars['String']>,
  genre_contains?: Maybe<Scalars['String']>,
  genre_not_contains?: Maybe<Scalars['String']>,
  genre_starts_with?: Maybe<Scalars['String']>,
  genre_not_starts_with?: Maybe<Scalars['String']>,
  genre_ends_with?: Maybe<Scalars['String']>,
  genre_not_ends_with?: Maybe<Scalars['String']>,
  isPlayable?: Maybe<Scalars['Boolean']>,
  isPlayable_not?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  trackNumber?: Maybe<Scalars['Int']>,
  trackNumber_not?: Maybe<Scalars['Int']>,
  trackNumber_in?: Maybe<Array<Scalars['Int']>>,
  trackNumber_not_in?: Maybe<Array<Scalars['Int']>>,
  trackNumber_lt?: Maybe<Scalars['Int']>,
  trackNumber_lte?: Maybe<Scalars['Int']>,
  trackNumber_gt?: Maybe<Scalars['Int']>,
  trackNumber_gte?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<TrackWhereInput>>,
  OR?: Maybe<Array<TrackWhereInput>>,
  NOT?: Maybe<Array<TrackWhereInput>>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  isAdmin: Scalars['Boolean'],
  email: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  password: Scalars['String'],
  playlists?: Maybe<Array<Playlist>>,
  username?: Maybe<Scalars['String']>,
  verified: Scalars['Boolean'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};


export type UserPlaylistsArgs = {
  where?: Maybe<PlaylistWhereInput>,
  orderBy?: Maybe<PlaylistOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type UserConnection = {
   __typename?: 'UserConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<UserEdge>>,
  aggregate: AggregateUser,
};

export type UserCreatePayload = {
  email: Scalars['String'],
  password: Scalars['String'],
  isAdmin?: Maybe<Scalars['Boolean']>,
};

export type UserEdge = {
   __typename?: 'UserEdge',
  node: User,
  cursor: Scalars['String'],
};

export type UserUpdatePayload = {
  name?: Maybe<Scalars['NonEmptyString']>,
  password?: Maybe<Scalars['NonEmptyString']>,
  username?: Maybe<Scalars['NonEmptyString']>,
};

export type UserWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  isAdmin_not?: Maybe<Scalars['Boolean']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  password_not?: Maybe<Scalars['String']>,
  password_in?: Maybe<Array<Scalars['String']>>,
  password_not_in?: Maybe<Array<Scalars['String']>>,
  password_lt?: Maybe<Scalars['String']>,
  password_lte?: Maybe<Scalars['String']>,
  password_gt?: Maybe<Scalars['String']>,
  password_gte?: Maybe<Scalars['String']>,
  password_contains?: Maybe<Scalars['String']>,
  password_not_contains?: Maybe<Scalars['String']>,
  password_starts_with?: Maybe<Scalars['String']>,
  password_not_starts_with?: Maybe<Scalars['String']>,
  password_ends_with?: Maybe<Scalars['String']>,
  password_not_ends_with?: Maybe<Scalars['String']>,
  playlists_every?: Maybe<PlaylistWhereInput>,
  playlists_some?: Maybe<PlaylistWhereInput>,
  playlists_none?: Maybe<PlaylistWhereInput>,
  username?: Maybe<Scalars['String']>,
  username_not?: Maybe<Scalars['String']>,
  username_in?: Maybe<Array<Scalars['String']>>,
  username_not_in?: Maybe<Array<Scalars['String']>>,
  username_lt?: Maybe<Scalars['String']>,
  username_lte?: Maybe<Scalars['String']>,
  username_gt?: Maybe<Scalars['String']>,
  username_gte?: Maybe<Scalars['String']>,
  username_contains?: Maybe<Scalars['String']>,
  username_not_contains?: Maybe<Scalars['String']>,
  username_starts_with?: Maybe<Scalars['String']>,
  username_not_starts_with?: Maybe<Scalars['String']>,
  username_ends_with?: Maybe<Scalars['String']>,
  username_not_ends_with?: Maybe<Scalars['String']>,
  verified?: Maybe<Scalars['Boolean']>,
  verified_not?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<UserWhereInput>>,
  OR?: Maybe<Array<UserWhereInput>>,
  NOT?: Maybe<Array<UserWhereInput>>,
};

export type CreateAlbumMutationVariables = {
  input: AlbumCreatePayload
};


export type CreateAlbumMutation = (
  { __typename?: 'Mutation' }
  & { createAlbum: Maybe<(
    { __typename?: 'Album' }
    & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
    & { artists: Maybe<Array<(
      { __typename?: 'Artist' }
      & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
      & { albums: Maybe<Array<(
        { __typename?: 'Album' }
        & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        & { artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, artwork: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, addedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>>, avatar: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        & { uploadedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>, featuresIn: Maybe<Array<(
        { __typename?: 'Track' }
        & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        & { album: (
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        ), artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, audio: Maybe<(
          { __typename?: 'Audio' }
          & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuring: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>> }
      )>>, tracks: Maybe<Array<(
        { __typename?: 'Track' }
        & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        & { album: (
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        ), artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, audio: Maybe<(
          { __typename?: 'Audio' }
          & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuring: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>> }
      )>> }
    )>>, artwork: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
      & { uploadedBy: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        & { playlists: Maybe<Array<(
          { __typename?: 'Playlist' }
          & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        )>> }
      ) }
    )>, tracks: Maybe<Array<(
      { __typename?: 'Track' }
      & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
      & { album: (
        { __typename?: 'Album' }
        & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        & { artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, artwork: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, addedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      ), artists: Maybe<Array<(
        { __typename?: 'Artist' }
        & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        & { albums: Maybe<Array<(
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        )>>, avatar: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuresIn: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>> }
      )>>, audio: Maybe<(
        { __typename?: 'Audio' }
        & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        & { uploadedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>, featuring: Maybe<Array<(
        { __typename?: 'Artist' }
        & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        & { albums: Maybe<Array<(
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        )>>, avatar: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuresIn: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>> }
      )>> }
    )>>, addedBy: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
      & { playlists: Maybe<Array<(
        { __typename?: 'Playlist' }
        & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        & { artwork: Maybe<Array<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>>, creator: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ), tracks: Maybe<Array<(
          { __typename?: 'PlaylistTrack' }
          & Pick<PlaylistTrack, 'id' | 'addedAt'>
        )>> }
      )>> }
    ) }
  )> }
);

export type DeleteAlbumMutationVariables = {
  id: Scalars['ID']
};


export type DeleteAlbumMutation = (
  { __typename?: 'Mutation' }
  & { deleteAlbum: Maybe<(
    { __typename?: 'Album' }
    & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
    & { artists: Maybe<Array<(
      { __typename?: 'Artist' }
      & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
      & { albums: Maybe<Array<(
        { __typename?: 'Album' }
        & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        & { artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, artwork: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, addedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>>, avatar: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        & { uploadedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>, featuresIn: Maybe<Array<(
        { __typename?: 'Track' }
        & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        & { album: (
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        ), artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, audio: Maybe<(
          { __typename?: 'Audio' }
          & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuring: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>> }
      )>>, tracks: Maybe<Array<(
        { __typename?: 'Track' }
        & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        & { album: (
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        ), artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, audio: Maybe<(
          { __typename?: 'Audio' }
          & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuring: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>> }
      )>> }
    )>>, artwork: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
      & { uploadedBy: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        & { playlists: Maybe<Array<(
          { __typename?: 'Playlist' }
          & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        )>> }
      ) }
    )>, tracks: Maybe<Array<(
      { __typename?: 'Track' }
      & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
      & { album: (
        { __typename?: 'Album' }
        & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        & { artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, artwork: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, addedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      ), artists: Maybe<Array<(
        { __typename?: 'Artist' }
        & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        & { albums: Maybe<Array<(
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        )>>, avatar: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuresIn: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>> }
      )>>, audio: Maybe<(
        { __typename?: 'Audio' }
        & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        & { uploadedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>, featuring: Maybe<Array<(
        { __typename?: 'Artist' }
        & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        & { albums: Maybe<Array<(
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        )>>, avatar: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuresIn: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>> }
      )>> }
    )>>, addedBy: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
      & { playlists: Maybe<Array<(
        { __typename?: 'Playlist' }
        & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        & { artwork: Maybe<Array<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>>, creator: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ), tracks: Maybe<Array<(
          { __typename?: 'PlaylistTrack' }
          & Pick<PlaylistTrack, 'id' | 'addedAt'>
        )>> }
      )>> }
    ) }
  )> }
);

export type CreateArtistMutationVariables = {
  input: ArtistCreatePayload
};


export type CreateArtistMutation = (
  { __typename?: 'Mutation' }
  & { createArtist: Maybe<(
    { __typename?: 'Artist' }
    & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
    & { albums: Maybe<Array<(
      { __typename?: 'Album' }
      & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
      & { artists: Maybe<Array<(
        { __typename?: 'Artist' }
        & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        & { albums: Maybe<Array<(
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        )>>, avatar: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuresIn: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>> }
      )>>, artwork: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        & { uploadedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>, tracks: Maybe<Array<(
        { __typename?: 'Track' }
        & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        & { album: (
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        ), artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, audio: Maybe<(
          { __typename?: 'Audio' }
          & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuring: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>> }
      )>>, addedBy: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        & { playlists: Maybe<Array<(
          { __typename?: 'Playlist' }
          & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        )>> }
      ) }
    )>>, avatar: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
      & { uploadedBy: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        & { playlists: Maybe<Array<(
          { __typename?: 'Playlist' }
          & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        )>> }
      ) }
    )>, featuresIn: Maybe<Array<(
      { __typename?: 'Track' }
      & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
      & { album: (
        { __typename?: 'Album' }
        & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        & { artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, artwork: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, addedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      ), artists: Maybe<Array<(
        { __typename?: 'Artist' }
        & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        & { albums: Maybe<Array<(
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        )>>, avatar: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuresIn: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>> }
      )>>, audio: Maybe<(
        { __typename?: 'Audio' }
        & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        & { uploadedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>, featuring: Maybe<Array<(
        { __typename?: 'Artist' }
        & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        & { albums: Maybe<Array<(
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        )>>, avatar: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuresIn: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>> }
      )>> }
    )>>, tracks: Maybe<Array<(
      { __typename?: 'Track' }
      & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
      & { album: (
        { __typename?: 'Album' }
        & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        & { artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, artwork: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, addedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      ), artists: Maybe<Array<(
        { __typename?: 'Artist' }
        & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        & { albums: Maybe<Array<(
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        )>>, avatar: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuresIn: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>> }
      )>>, audio: Maybe<(
        { __typename?: 'Audio' }
        & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        & { uploadedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>, featuring: Maybe<Array<(
        { __typename?: 'Artist' }
        & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        & { albums: Maybe<Array<(
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        )>>, avatar: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuresIn: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>> }
      )>> }
    )>> }
  )> }
);

export type CreatePlaylistMutationVariables = {
  input: PlaylistCreatePayload
};


export type CreatePlaylistMutation = (
  { __typename?: 'Mutation' }
  & { createPlaylist: Maybe<(
    { __typename?: 'Playlist' }
    & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
    & { artwork: Maybe<Array<(
      { __typename?: 'Image' }
      & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
      & { uploadedBy: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        & { playlists: Maybe<Array<(
          { __typename?: 'Playlist' }
          & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        )>> }
      ) }
    )>>, creator: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
      & { playlists: Maybe<Array<(
        { __typename?: 'Playlist' }
        & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        & { artwork: Maybe<Array<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>>, creator: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ), tracks: Maybe<Array<(
          { __typename?: 'PlaylistTrack' }
          & Pick<PlaylistTrack, 'id' | 'addedAt'>
        )>> }
      )>> }
    ), tracks: Maybe<Array<(
      { __typename?: 'PlaylistTrack' }
      & Pick<PlaylistTrack, 'id' | 'addedAt'>
      & { addedBy: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        & { playlists: Maybe<Array<(
          { __typename?: 'Playlist' }
          & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        )>> }
      ), playlists: Maybe<Array<(
        { __typename?: 'Playlist' }
        & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        & { artwork: Maybe<Array<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>>, creator: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ), tracks: Maybe<Array<(
          { __typename?: 'PlaylistTrack' }
          & Pick<PlaylistTrack, 'id' | 'addedAt'>
        )>> }
      )>>, track: (
        { __typename?: 'Track' }
        & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        & { album: (
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        ), artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, audio: Maybe<(
          { __typename?: 'Audio' }
          & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuring: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>> }
      ) }
    )>> }
  )> }
);

export type AddToPlaylistMutationVariables = {
  input: AddToPlaylistPayload
};


export type AddToPlaylistMutation = (
  { __typename?: 'Mutation' }
  & { addToPlaylist: Maybe<(
    { __typename?: 'Playlist' }
    & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
    & { artwork: Maybe<Array<(
      { __typename?: 'Image' }
      & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
      & { uploadedBy: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        & { playlists: Maybe<Array<(
          { __typename?: 'Playlist' }
          & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        )>> }
      ) }
    )>>, creator: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
      & { playlists: Maybe<Array<(
        { __typename?: 'Playlist' }
        & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        & { artwork: Maybe<Array<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>>, creator: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ), tracks: Maybe<Array<(
          { __typename?: 'PlaylistTrack' }
          & Pick<PlaylistTrack, 'id' | 'addedAt'>
        )>> }
      )>> }
    ), tracks: Maybe<Array<(
      { __typename?: 'PlaylistTrack' }
      & Pick<PlaylistTrack, 'id' | 'addedAt'>
      & { addedBy: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        & { playlists: Maybe<Array<(
          { __typename?: 'Playlist' }
          & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        )>> }
      ), playlists: Maybe<Array<(
        { __typename?: 'Playlist' }
        & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        & { artwork: Maybe<Array<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>>, creator: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ), tracks: Maybe<Array<(
          { __typename?: 'PlaylistTrack' }
          & Pick<PlaylistTrack, 'id' | 'addedAt'>
        )>> }
      )>>, track: (
        { __typename?: 'Track' }
        & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        & { album: (
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        ), artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, audio: Maybe<(
          { __typename?: 'Audio' }
          & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuring: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>> }
      ) }
    )>> }
  )> }
);

export type CreateTrackMutationVariables = {
  input: TrackCreatePayload
};


export type CreateTrackMutation = (
  { __typename?: 'Mutation' }
  & { createTrack: Maybe<(
    { __typename?: 'Track' }
    & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
    & { album: (
      { __typename?: 'Album' }
      & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
      & { artists: Maybe<Array<(
        { __typename?: 'Artist' }
        & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        & { albums: Maybe<Array<(
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        )>>, avatar: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuresIn: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>> }
      )>>, artwork: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        & { uploadedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>, tracks: Maybe<Array<(
        { __typename?: 'Track' }
        & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        & { album: (
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        ), artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, audio: Maybe<(
          { __typename?: 'Audio' }
          & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuring: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>> }
      )>>, addedBy: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        & { playlists: Maybe<Array<(
          { __typename?: 'Playlist' }
          & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        )>> }
      ) }
    ), artists: Maybe<Array<(
      { __typename?: 'Artist' }
      & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
      & { albums: Maybe<Array<(
        { __typename?: 'Album' }
        & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        & { artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, artwork: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, addedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>>, avatar: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        & { uploadedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>, featuresIn: Maybe<Array<(
        { __typename?: 'Track' }
        & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        & { album: (
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        ), artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, audio: Maybe<(
          { __typename?: 'Audio' }
          & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuring: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>> }
      )>>, tracks: Maybe<Array<(
        { __typename?: 'Track' }
        & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        & { album: (
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        ), artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, audio: Maybe<(
          { __typename?: 'Audio' }
          & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuring: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>> }
      )>> }
    )>>, audio: Maybe<(
      { __typename?: 'Audio' }
      & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
      & { uploadedBy: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        & { playlists: Maybe<Array<(
          { __typename?: 'Playlist' }
          & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        )>> }
      ) }
    )>, featuring: Maybe<Array<(
      { __typename?: 'Artist' }
      & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
      & { albums: Maybe<Array<(
        { __typename?: 'Album' }
        & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        & { artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, artwork: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, addedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>>, avatar: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        & { uploadedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>, featuresIn: Maybe<Array<(
        { __typename?: 'Track' }
        & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        & { album: (
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        ), artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, audio: Maybe<(
          { __typename?: 'Audio' }
          & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuring: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>> }
      )>>, tracks: Maybe<Array<(
        { __typename?: 'Track' }
        & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        & { album: (
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        ), artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, audio: Maybe<(
          { __typename?: 'Audio' }
          & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuring: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>> }
      )>> }
    )>> }
  )> }
);

export type CreateUserMutationVariables = {
  input: UserCreatePayload
};


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
      & { playlists: Maybe<Array<(
        { __typename?: 'Playlist' }
        & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        & { artwork: Maybe<Array<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>>, creator: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ), tracks: Maybe<Array<(
          { __typename?: 'PlaylistTrack' }
          & Pick<PlaylistTrack, 'id' | 'addedAt'>
        )>> }
      )>> }
    ) }
  ) }
);

export type UpdateUserMutationVariables = {
  input: UserUpdatePayload
};


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
    & { playlists: Maybe<Array<(
      { __typename?: 'Playlist' }
      & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
      & { artwork: Maybe<Array<(
        { __typename?: 'Image' }
        & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        & { uploadedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>>, creator: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        & { playlists: Maybe<Array<(
          { __typename?: 'Playlist' }
          & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        )>> }
      ), tracks: Maybe<Array<(
        { __typename?: 'PlaylistTrack' }
        & Pick<PlaylistTrack, 'id' | 'addedAt'>
        & { addedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ), playlists: Maybe<Array<(
          { __typename?: 'Playlist' }
          & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        )>>, track: (
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        ) }
      )>> }
    )>> }
  ) }
);

export type AuthenticateUserMutationVariables = {
  input: LoginUserPayload
};


export type AuthenticateUserMutation = (
  { __typename?: 'Mutation' }
  & { authenticateUser: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
      & { playlists: Maybe<Array<(
        { __typename?: 'Playlist' }
        & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        & { artwork: Maybe<Array<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>>, creator: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ), tracks: Maybe<Array<(
          { __typename?: 'PlaylistTrack' }
          & Pick<PlaylistTrack, 'id' | 'addedAt'>
        )>> }
      )>> }
    ) }
  ) }
);

export type AlbumQueryVariables = {
  id: Scalars['ID']
};


export type AlbumQuery = (
  { __typename?: 'Query' }
  & { album: Maybe<(
    { __typename?: 'Album' }
    & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
    & { artists: Maybe<Array<(
      { __typename?: 'Artist' }
      & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
      & { albums: Maybe<Array<(
        { __typename?: 'Album' }
        & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        & { artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, artwork: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, addedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>>, avatar: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        & { uploadedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>, featuresIn: Maybe<Array<(
        { __typename?: 'Track' }
        & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        & { album: (
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        ), artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, audio: Maybe<(
          { __typename?: 'Audio' }
          & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuring: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>> }
      )>>, tracks: Maybe<Array<(
        { __typename?: 'Track' }
        & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        & { album: (
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        ), artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, audio: Maybe<(
          { __typename?: 'Audio' }
          & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuring: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>> }
      )>> }
    )>>, artwork: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
      & { uploadedBy: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        & { playlists: Maybe<Array<(
          { __typename?: 'Playlist' }
          & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        )>> }
      ) }
    )>, tracks: Maybe<Array<(
      { __typename?: 'Track' }
      & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
      & { album: (
        { __typename?: 'Album' }
        & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        & { artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, artwork: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, addedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      ), artists: Maybe<Array<(
        { __typename?: 'Artist' }
        & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        & { albums: Maybe<Array<(
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        )>>, avatar: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuresIn: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>> }
      )>>, audio: Maybe<(
        { __typename?: 'Audio' }
        & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        & { uploadedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>, featuring: Maybe<Array<(
        { __typename?: 'Artist' }
        & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        & { albums: Maybe<Array<(
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        )>>, avatar: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuresIn: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>> }
      )>> }
    )>>, addedBy: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
      & { playlists: Maybe<Array<(
        { __typename?: 'Playlist' }
        & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        & { artwork: Maybe<Array<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>>, creator: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ), tracks: Maybe<Array<(
          { __typename?: 'PlaylistTrack' }
          & Pick<PlaylistTrack, 'id' | 'addedAt'>
        )>> }
      )>> }
    ) }
  )> }
);

export type AlbumsQueryVariables = {};


export type AlbumsQuery = (
  { __typename?: 'Query' }
  & { albums: Maybe<(
    { __typename?: 'AlbumConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
    ), edges: Array<Maybe<(
      { __typename?: 'AlbumEdge' }
      & Pick<AlbumEdge, 'cursor'>
      & { node: (
        { __typename?: 'Album' }
        & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        & { artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, artwork: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, addedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      ) }
    )>>, aggregate: (
      { __typename?: 'AggregateAlbum' }
      & Pick<AggregateAlbum, 'count'>
    ) }
  )> }
);

export type ArtistQueryVariables = {
  id: Scalars['ID']
};


export type ArtistQuery = (
  { __typename?: 'Query' }
  & { artist: Maybe<(
    { __typename?: 'Artist' }
    & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
    & { albums: Maybe<Array<(
      { __typename?: 'Album' }
      & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
      & { artists: Maybe<Array<(
        { __typename?: 'Artist' }
        & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        & { albums: Maybe<Array<(
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        )>>, avatar: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuresIn: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>> }
      )>>, artwork: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        & { uploadedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>, tracks: Maybe<Array<(
        { __typename?: 'Track' }
        & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        & { album: (
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        ), artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, audio: Maybe<(
          { __typename?: 'Audio' }
          & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuring: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>> }
      )>>, addedBy: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        & { playlists: Maybe<Array<(
          { __typename?: 'Playlist' }
          & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        )>> }
      ) }
    )>>, avatar: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
      & { uploadedBy: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        & { playlists: Maybe<Array<(
          { __typename?: 'Playlist' }
          & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        )>> }
      ) }
    )>, featuresIn: Maybe<Array<(
      { __typename?: 'Track' }
      & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
      & { album: (
        { __typename?: 'Album' }
        & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        & { artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, artwork: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, addedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      ), artists: Maybe<Array<(
        { __typename?: 'Artist' }
        & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        & { albums: Maybe<Array<(
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        )>>, avatar: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuresIn: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>> }
      )>>, audio: Maybe<(
        { __typename?: 'Audio' }
        & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        & { uploadedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>, featuring: Maybe<Array<(
        { __typename?: 'Artist' }
        & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        & { albums: Maybe<Array<(
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        )>>, avatar: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuresIn: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>> }
      )>> }
    )>>, tracks: Maybe<Array<(
      { __typename?: 'Track' }
      & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
      & { album: (
        { __typename?: 'Album' }
        & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        & { artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, artwork: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, addedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      ), artists: Maybe<Array<(
        { __typename?: 'Artist' }
        & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        & { albums: Maybe<Array<(
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        )>>, avatar: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuresIn: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>> }
      )>>, audio: Maybe<(
        { __typename?: 'Audio' }
        & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        & { uploadedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>, featuring: Maybe<Array<(
        { __typename?: 'Artist' }
        & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        & { albums: Maybe<Array<(
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        )>>, avatar: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuresIn: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>> }
      )>> }
    )>> }
  )> }
);

export type ArtistsQueryVariables = {};


export type ArtistsQuery = (
  { __typename?: 'Query' }
  & { artists: Maybe<(
    { __typename?: 'ArtistConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
    ), edges: Array<Maybe<(
      { __typename?: 'ArtistEdge' }
      & Pick<ArtistEdge, 'cursor'>
      & { node: (
        { __typename?: 'Artist' }
        & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        & { albums: Maybe<Array<(
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        )>>, avatar: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuresIn: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>> }
      ) }
    )>>, aggregate: (
      { __typename?: 'AggregateArtist' }
      & Pick<AggregateArtist, 'count'>
    ) }
  )> }
);

export type PlaylistQueryVariables = {
  id: Scalars['ID']
};


export type PlaylistQuery = (
  { __typename?: 'Query' }
  & { playlist: Maybe<(
    { __typename?: 'Playlist' }
    & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
    & { artwork: Maybe<Array<(
      { __typename?: 'Image' }
      & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
      & { uploadedBy: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        & { playlists: Maybe<Array<(
          { __typename?: 'Playlist' }
          & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        )>> }
      ) }
    )>>, creator: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
      & { playlists: Maybe<Array<(
        { __typename?: 'Playlist' }
        & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        & { artwork: Maybe<Array<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>>, creator: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ), tracks: Maybe<Array<(
          { __typename?: 'PlaylistTrack' }
          & Pick<PlaylistTrack, 'id' | 'addedAt'>
        )>> }
      )>> }
    ), tracks: Maybe<Array<(
      { __typename?: 'PlaylistTrack' }
      & Pick<PlaylistTrack, 'id' | 'addedAt'>
      & { addedBy: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        & { playlists: Maybe<Array<(
          { __typename?: 'Playlist' }
          & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        )>> }
      ), playlists: Maybe<Array<(
        { __typename?: 'Playlist' }
        & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        & { artwork: Maybe<Array<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>>, creator: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ), tracks: Maybe<Array<(
          { __typename?: 'PlaylistTrack' }
          & Pick<PlaylistTrack, 'id' | 'addedAt'>
        )>> }
      )>>, track: (
        { __typename?: 'Track' }
        & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        & { album: (
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        ), artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, audio: Maybe<(
          { __typename?: 'Audio' }
          & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuring: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>> }
      ) }
    )>> }
  )> }
);

export type PlaylistsQueryVariables = {};


export type PlaylistsQuery = (
  { __typename?: 'Query' }
  & { playlists: Maybe<(
    { __typename?: 'PlaylistConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
    ), edges: Array<Maybe<(
      { __typename?: 'PlaylistEdge' }
      & Pick<PlaylistEdge, 'cursor'>
      & { node: (
        { __typename?: 'Playlist' }
        & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        & { artwork: Maybe<Array<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>>, creator: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ), tracks: Maybe<Array<(
          { __typename?: 'PlaylistTrack' }
          & Pick<PlaylistTrack, 'id' | 'addedAt'>
        )>> }
      ) }
    )>>, aggregate: (
      { __typename?: 'AggregatePlaylist' }
      & Pick<AggregatePlaylist, 'count'>
    ) }
  )> }
);

export type TrackQueryVariables = {
  id: Scalars['ID']
};


export type TrackQuery = (
  { __typename?: 'Query' }
  & { track: Maybe<(
    { __typename?: 'Track' }
    & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
    & { album: (
      { __typename?: 'Album' }
      & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
      & { artists: Maybe<Array<(
        { __typename?: 'Artist' }
        & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        & { albums: Maybe<Array<(
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        )>>, avatar: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuresIn: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>> }
      )>>, artwork: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        & { uploadedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>, tracks: Maybe<Array<(
        { __typename?: 'Track' }
        & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        & { album: (
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        ), artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, audio: Maybe<(
          { __typename?: 'Audio' }
          & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuring: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>> }
      )>>, addedBy: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        & { playlists: Maybe<Array<(
          { __typename?: 'Playlist' }
          & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        )>> }
      ) }
    ), artists: Maybe<Array<(
      { __typename?: 'Artist' }
      & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
      & { albums: Maybe<Array<(
        { __typename?: 'Album' }
        & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        & { artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, artwork: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, addedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>>, avatar: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        & { uploadedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>, featuresIn: Maybe<Array<(
        { __typename?: 'Track' }
        & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        & { album: (
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        ), artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, audio: Maybe<(
          { __typename?: 'Audio' }
          & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuring: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>> }
      )>>, tracks: Maybe<Array<(
        { __typename?: 'Track' }
        & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        & { album: (
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        ), artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, audio: Maybe<(
          { __typename?: 'Audio' }
          & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuring: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>> }
      )>> }
    )>>, audio: Maybe<(
      { __typename?: 'Audio' }
      & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
      & { uploadedBy: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        & { playlists: Maybe<Array<(
          { __typename?: 'Playlist' }
          & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        )>> }
      ) }
    )>, featuring: Maybe<Array<(
      { __typename?: 'Artist' }
      & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
      & { albums: Maybe<Array<(
        { __typename?: 'Album' }
        & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        & { artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, artwork: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        )>, tracks: Maybe<Array<(
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        )>>, addedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>>, avatar: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        & { uploadedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>, featuresIn: Maybe<Array<(
        { __typename?: 'Track' }
        & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        & { album: (
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        ), artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, audio: Maybe<(
          { __typename?: 'Audio' }
          & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuring: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>> }
      )>>, tracks: Maybe<Array<(
        { __typename?: 'Track' }
        & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        & { album: (
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        ), artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, audio: Maybe<(
          { __typename?: 'Audio' }
          & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuring: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>> }
      )>> }
    )>> }
  )> }
);

export type TracksQueryVariables = {};


export type TracksQuery = (
  { __typename?: 'Query' }
  & { tracks: Maybe<(
    { __typename?: 'TrackConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
    ), edges: Array<Maybe<(
      { __typename?: 'TrackEdge' }
      & Pick<TrackEdge, 'cursor'>
      & { node: (
        { __typename?: 'Track' }
        & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        & { album: (
          { __typename?: 'Album' }
          & Pick<Album, 'id' | 'alias' | 'duration' | 'genres' | 'name' | 'numTracks' | 'releaseDate' | 'releaseType' | 'createdAt' | 'updatedAt'>
        ), artists: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>>, audio: Maybe<(
          { __typename?: 'Audio' }
          & Pick<Audio, 'id' | 'bitrate' | 'format' | 'size' | 'url' | 'createdAt' | 'updatedAt'>
        )>, featuring: Maybe<Array<(
          { __typename?: 'Artist' }
          & Pick<Artist, 'id' | 'alias' | 'genres' | 'name' | 'createdAt' | 'updatedAt'>
        )>> }
      ) }
    )>>, aggregate: (
      { __typename?: 'AggregateTrack' }
      & Pick<AggregateTrack, 'count'>
    ) }
  )> }
);

export type UserQueryVariables = {
  id: Scalars['ID']
};


export type UserQuery = (
  { __typename?: 'Query' }
  & { user: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
    & { playlists: Maybe<Array<(
      { __typename?: 'Playlist' }
      & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
      & { artwork: Maybe<Array<(
        { __typename?: 'Image' }
        & Pick<Image, 'id' | 'url' | 'createdAt' | 'updatedAt'>
        & { uploadedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ) }
      )>>, creator: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        & { playlists: Maybe<Array<(
          { __typename?: 'Playlist' }
          & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        )>> }
      ), tracks: Maybe<Array<(
        { __typename?: 'PlaylistTrack' }
        & Pick<PlaylistTrack, 'id' | 'addedAt'>
        & { addedBy: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        ), playlists: Maybe<Array<(
          { __typename?: 'Playlist' }
          & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        )>>, track: (
          { __typename?: 'Track' }
          & Pick<Track, 'id' | 'discNumber' | 'duration' | 'explicit' | 'genre' | 'isPlayable' | 'name' | 'trackNumber' | 'createdAt' | 'updatedAt'>
        ) }
      )>> }
    )>> }
  )> }
);

export type UsersQueryVariables = {};


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Maybe<(
    { __typename?: 'UserConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
    ), edges: Array<Maybe<(
      { __typename?: 'UserEdge' }
      & Pick<UserEdge, 'cursor'>
      & { node: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'isAdmin' | 'email' | 'name' | 'password' | 'username' | 'verified' | 'createdAt' | 'updatedAt'>
        & { playlists: Maybe<Array<(
          { __typename?: 'Playlist' }
          & Pick<Playlist, 'id' | 'alias' | 'collaborative' | 'description' | 'duration' | 'name' | 'numTracks' | 'privacy' | 'createdAt' | 'updatedAt'>
        )>> }
      ) }
    )>>, aggregate: (
      { __typename?: 'AggregateUser' }
      & Pick<AggregateUser, 'count'>
    ) }
  )> }
);


export const CreateAlbumDocument = gql`
    mutation CreateAlbum($input: AlbumCreatePayload!) {
  createAlbum(input: $input) {
    id
    alias
    artists {
      id
      albums {
        id
        alias
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        duration
        genres
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        name
        numTracks
        releaseDate
        releaseType
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        addedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      alias
      avatar {
        id
        uploadedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      featuresIn {
        id
        album {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        audio {
          id
          bitrate
          format
          size
          url
          createdAt
          updatedAt
        }
        discNumber
        duration
        explicit
        featuring {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        genre
        isPlayable
        name
        trackNumber
        createdAt
        updatedAt
      }
      genres
      name
      tracks {
        id
        album {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        audio {
          id
          bitrate
          format
          size
          url
          createdAt
          updatedAt
        }
        discNumber
        duration
        explicit
        featuring {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        genre
        isPlayable
        name
        trackNumber
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
    duration
    genres
    artwork {
      id
      uploadedBy {
        id
        isAdmin
        email
        name
        password
        playlists {
          id
          alias
          collaborative
          description
          duration
          name
          numTracks
          privacy
          createdAt
          updatedAt
        }
        username
        verified
        createdAt
        updatedAt
      }
      url
      createdAt
      updatedAt
    }
    name
    numTracks
    releaseDate
    releaseType
    tracks {
      id
      album {
        id
        alias
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        duration
        genres
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        name
        numTracks
        releaseDate
        releaseType
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        addedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      artists {
        id
        albums {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        alias
        avatar {
          id
          url
          createdAt
          updatedAt
        }
        featuresIn {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        genres
        name
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      audio {
        id
        bitrate
        format
        size
        uploadedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      discNumber
      duration
      explicit
      featuring {
        id
        albums {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        alias
        avatar {
          id
          url
          createdAt
          updatedAt
        }
        featuresIn {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        genres
        name
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      genre
      isPlayable
      name
      trackNumber
      createdAt
      updatedAt
    }
    addedBy {
      id
      isAdmin
      email
      name
      password
      playlists {
        id
        alias
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        collaborative
        creator {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        description
        duration
        name
        numTracks
        privacy
        tracks {
          id
          addedAt
        }
        createdAt
        updatedAt
      }
      username
      verified
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
    `;
export type CreateAlbumMutationFn = ApolloReactCommon.MutationFunction<CreateAlbumMutation, CreateAlbumMutationVariables>;
export type CreateAlbumComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateAlbumMutation, CreateAlbumMutationVariables>, 'mutation'>;

    export const CreateAlbumComponent = (props: CreateAlbumComponentProps) => (
      <ApolloReactComponents.Mutation<CreateAlbumMutation, CreateAlbumMutationVariables> mutation={CreateAlbumDocument} {...props} />
    );
    
export type CreateAlbumProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateAlbumMutation, CreateAlbumMutationVariables> & TChildProps;
export function withCreateAlbum<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateAlbumMutation,
  CreateAlbumMutationVariables,
  CreateAlbumProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateAlbumMutation, CreateAlbumMutationVariables, CreateAlbumProps<TChildProps>>(CreateAlbumDocument, {
      alias: 'createAlbum',
      ...operationOptions
    });
};

/**
 * __useCreateAlbumMutation__
 *
 * To run a mutation, you first call `useCreateAlbumMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAlbumMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAlbumMutation, { data, loading, error }] = useCreateAlbumMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAlbumMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAlbumMutation, CreateAlbumMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateAlbumMutation, CreateAlbumMutationVariables>(CreateAlbumDocument, baseOptions);
      }
export type CreateAlbumMutationHookResult = ReturnType<typeof useCreateAlbumMutation>;
export type CreateAlbumMutationResult = ApolloReactCommon.MutationResult<CreateAlbumMutation>;
export type CreateAlbumMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateAlbumMutation, CreateAlbumMutationVariables>;
export const DeleteAlbumDocument = gql`
    mutation DeleteAlbum($id: ID!) {
  deleteAlbum(id: $id) {
    id
    alias
    artists {
      id
      albums {
        id
        alias
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        duration
        genres
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        name
        numTracks
        releaseDate
        releaseType
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        addedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      alias
      avatar {
        id
        uploadedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      featuresIn {
        id
        album {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        audio {
          id
          bitrate
          format
          size
          url
          createdAt
          updatedAt
        }
        discNumber
        duration
        explicit
        featuring {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        genre
        isPlayable
        name
        trackNumber
        createdAt
        updatedAt
      }
      genres
      name
      tracks {
        id
        album {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        audio {
          id
          bitrate
          format
          size
          url
          createdAt
          updatedAt
        }
        discNumber
        duration
        explicit
        featuring {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        genre
        isPlayable
        name
        trackNumber
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
    duration
    genres
    artwork {
      id
      uploadedBy {
        id
        isAdmin
        email
        name
        password
        playlists {
          id
          alias
          collaborative
          description
          duration
          name
          numTracks
          privacy
          createdAt
          updatedAt
        }
        username
        verified
        createdAt
        updatedAt
      }
      url
      createdAt
      updatedAt
    }
    name
    numTracks
    releaseDate
    releaseType
    tracks {
      id
      album {
        id
        alias
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        duration
        genres
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        name
        numTracks
        releaseDate
        releaseType
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        addedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      artists {
        id
        albums {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        alias
        avatar {
          id
          url
          createdAt
          updatedAt
        }
        featuresIn {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        genres
        name
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      audio {
        id
        bitrate
        format
        size
        uploadedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      discNumber
      duration
      explicit
      featuring {
        id
        albums {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        alias
        avatar {
          id
          url
          createdAt
          updatedAt
        }
        featuresIn {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        genres
        name
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      genre
      isPlayable
      name
      trackNumber
      createdAt
      updatedAt
    }
    addedBy {
      id
      isAdmin
      email
      name
      password
      playlists {
        id
        alias
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        collaborative
        creator {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        description
        duration
        name
        numTracks
        privacy
        tracks {
          id
          addedAt
        }
        createdAt
        updatedAt
      }
      username
      verified
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
    `;
export type DeleteAlbumMutationFn = ApolloReactCommon.MutationFunction<DeleteAlbumMutation, DeleteAlbumMutationVariables>;
export type DeleteAlbumComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteAlbumMutation, DeleteAlbumMutationVariables>, 'mutation'>;

    export const DeleteAlbumComponent = (props: DeleteAlbumComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteAlbumMutation, DeleteAlbumMutationVariables> mutation={DeleteAlbumDocument} {...props} />
    );
    
export type DeleteAlbumProps<TChildProps = {}> = ApolloReactHoc.MutateProps<DeleteAlbumMutation, DeleteAlbumMutationVariables> & TChildProps;
export function withDeleteAlbum<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteAlbumMutation,
  DeleteAlbumMutationVariables,
  DeleteAlbumProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteAlbumMutation, DeleteAlbumMutationVariables, DeleteAlbumProps<TChildProps>>(DeleteAlbumDocument, {
      alias: 'deleteAlbum',
      ...operationOptions
    });
};

/**
 * __useDeleteAlbumMutation__
 *
 * To run a mutation, you first call `useDeleteAlbumMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAlbumMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAlbumMutation, { data, loading, error }] = useDeleteAlbumMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAlbumMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAlbumMutation, DeleteAlbumMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteAlbumMutation, DeleteAlbumMutationVariables>(DeleteAlbumDocument, baseOptions);
      }
export type DeleteAlbumMutationHookResult = ReturnType<typeof useDeleteAlbumMutation>;
export type DeleteAlbumMutationResult = ApolloReactCommon.MutationResult<DeleteAlbumMutation>;
export type DeleteAlbumMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteAlbumMutation, DeleteAlbumMutationVariables>;
export const CreateArtistDocument = gql`
    mutation CreateArtist($input: ArtistCreatePayload!) {
  createArtist(input: $input) {
    id
    albums {
      id
      alias
      artists {
        id
        albums {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        alias
        avatar {
          id
          url
          createdAt
          updatedAt
        }
        featuresIn {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        genres
        name
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      duration
      genres
      artwork {
        id
        uploadedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      name
      numTracks
      releaseDate
      releaseType
      tracks {
        id
        album {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        audio {
          id
          bitrate
          format
          size
          url
          createdAt
          updatedAt
        }
        discNumber
        duration
        explicit
        featuring {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        genre
        isPlayable
        name
        trackNumber
        createdAt
        updatedAt
      }
      addedBy {
        id
        isAdmin
        email
        name
        password
        playlists {
          id
          alias
          collaborative
          description
          duration
          name
          numTracks
          privacy
          createdAt
          updatedAt
        }
        username
        verified
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
    alias
    avatar {
      id
      uploadedBy {
        id
        isAdmin
        email
        name
        password
        playlists {
          id
          alias
          collaborative
          description
          duration
          name
          numTracks
          privacy
          createdAt
          updatedAt
        }
        username
        verified
        createdAt
        updatedAt
      }
      url
      createdAt
      updatedAt
    }
    featuresIn {
      id
      album {
        id
        alias
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        duration
        genres
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        name
        numTracks
        releaseDate
        releaseType
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        addedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      artists {
        id
        albums {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        alias
        avatar {
          id
          url
          createdAt
          updatedAt
        }
        featuresIn {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        genres
        name
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      audio {
        id
        bitrate
        format
        size
        uploadedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      discNumber
      duration
      explicit
      featuring {
        id
        albums {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        alias
        avatar {
          id
          url
          createdAt
          updatedAt
        }
        featuresIn {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        genres
        name
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      genre
      isPlayable
      name
      trackNumber
      createdAt
      updatedAt
    }
    genres
    name
    tracks {
      id
      album {
        id
        alias
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        duration
        genres
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        name
        numTracks
        releaseDate
        releaseType
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        addedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      artists {
        id
        albums {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        alias
        avatar {
          id
          url
          createdAt
          updatedAt
        }
        featuresIn {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        genres
        name
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      audio {
        id
        bitrate
        format
        size
        uploadedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      discNumber
      duration
      explicit
      featuring {
        id
        albums {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        alias
        avatar {
          id
          url
          createdAt
          updatedAt
        }
        featuresIn {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        genres
        name
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      genre
      isPlayable
      name
      trackNumber
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
    `;
export type CreateArtistMutationFn = ApolloReactCommon.MutationFunction<CreateArtistMutation, CreateArtistMutationVariables>;
export type CreateArtistComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateArtistMutation, CreateArtistMutationVariables>, 'mutation'>;

    export const CreateArtistComponent = (props: CreateArtistComponentProps) => (
      <ApolloReactComponents.Mutation<CreateArtistMutation, CreateArtistMutationVariables> mutation={CreateArtistDocument} {...props} />
    );
    
export type CreateArtistProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateArtistMutation, CreateArtistMutationVariables> & TChildProps;
export function withCreateArtist<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateArtistMutation,
  CreateArtistMutationVariables,
  CreateArtistProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateArtistMutation, CreateArtistMutationVariables, CreateArtistProps<TChildProps>>(CreateArtistDocument, {
      alias: 'createArtist',
      ...operationOptions
    });
};

/**
 * __useCreateArtistMutation__
 *
 * To run a mutation, you first call `useCreateArtistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateArtistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createArtistMutation, { data, loading, error }] = useCreateArtistMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateArtistMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateArtistMutation, CreateArtistMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateArtistMutation, CreateArtistMutationVariables>(CreateArtistDocument, baseOptions);
      }
export type CreateArtistMutationHookResult = ReturnType<typeof useCreateArtistMutation>;
export type CreateArtistMutationResult = ApolloReactCommon.MutationResult<CreateArtistMutation>;
export type CreateArtistMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateArtistMutation, CreateArtistMutationVariables>;
export const CreatePlaylistDocument = gql`
    mutation CreatePlaylist($input: PlaylistCreatePayload!) {
  createPlaylist(input: $input) {
    id
    alias
    artwork {
      id
      uploadedBy {
        id
        isAdmin
        email
        name
        password
        playlists {
          id
          alias
          collaborative
          description
          duration
          name
          numTracks
          privacy
          createdAt
          updatedAt
        }
        username
        verified
        createdAt
        updatedAt
      }
      url
      createdAt
      updatedAt
    }
    collaborative
    creator {
      id
      isAdmin
      email
      name
      password
      playlists {
        id
        alias
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        collaborative
        creator {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        description
        duration
        name
        numTracks
        privacy
        tracks {
          id
          addedAt
        }
        createdAt
        updatedAt
      }
      username
      verified
      createdAt
      updatedAt
    }
    description
    duration
    name
    numTracks
    privacy
    tracks {
      id
      addedAt
      addedBy {
        id
        isAdmin
        email
        name
        password
        playlists {
          id
          alias
          collaborative
          description
          duration
          name
          numTracks
          privacy
          createdAt
          updatedAt
        }
        username
        verified
        createdAt
        updatedAt
      }
      playlists {
        id
        alias
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        collaborative
        creator {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        description
        duration
        name
        numTracks
        privacy
        tracks {
          id
          addedAt
        }
        createdAt
        updatedAt
      }
      track {
        id
        album {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        audio {
          id
          bitrate
          format
          size
          url
          createdAt
          updatedAt
        }
        discNumber
        duration
        explicit
        featuring {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        genre
        isPlayable
        name
        trackNumber
        createdAt
        updatedAt
      }
    }
    createdAt
    updatedAt
  }
}
    `;
export type CreatePlaylistMutationFn = ApolloReactCommon.MutationFunction<CreatePlaylistMutation, CreatePlaylistMutationVariables>;
export type CreatePlaylistComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreatePlaylistMutation, CreatePlaylistMutationVariables>, 'mutation'>;

    export const CreatePlaylistComponent = (props: CreatePlaylistComponentProps) => (
      <ApolloReactComponents.Mutation<CreatePlaylistMutation, CreatePlaylistMutationVariables> mutation={CreatePlaylistDocument} {...props} />
    );
    
export type CreatePlaylistProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreatePlaylistMutation, CreatePlaylistMutationVariables> & TChildProps;
export function withCreatePlaylist<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreatePlaylistMutation,
  CreatePlaylistMutationVariables,
  CreatePlaylistProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreatePlaylistMutation, CreatePlaylistMutationVariables, CreatePlaylistProps<TChildProps>>(CreatePlaylistDocument, {
      alias: 'createPlaylist',
      ...operationOptions
    });
};

/**
 * __useCreatePlaylistMutation__
 *
 * To run a mutation, you first call `useCreatePlaylistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlaylistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlaylistMutation, { data, loading, error }] = useCreatePlaylistMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePlaylistMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePlaylistMutation, CreatePlaylistMutationVariables>) {
        return ApolloReactHooks.useMutation<CreatePlaylistMutation, CreatePlaylistMutationVariables>(CreatePlaylistDocument, baseOptions);
      }
export type CreatePlaylistMutationHookResult = ReturnType<typeof useCreatePlaylistMutation>;
export type CreatePlaylistMutationResult = ApolloReactCommon.MutationResult<CreatePlaylistMutation>;
export type CreatePlaylistMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePlaylistMutation, CreatePlaylistMutationVariables>;
export const AddToPlaylistDocument = gql`
    mutation AddToPlaylist($input: AddToPlaylistPayload!) {
  addToPlaylist(input: $input) {
    id
    alias
    artwork {
      id
      uploadedBy {
        id
        isAdmin
        email
        name
        password
        playlists {
          id
          alias
          collaborative
          description
          duration
          name
          numTracks
          privacy
          createdAt
          updatedAt
        }
        username
        verified
        createdAt
        updatedAt
      }
      url
      createdAt
      updatedAt
    }
    collaborative
    creator {
      id
      isAdmin
      email
      name
      password
      playlists {
        id
        alias
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        collaborative
        creator {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        description
        duration
        name
        numTracks
        privacy
        tracks {
          id
          addedAt
        }
        createdAt
        updatedAt
      }
      username
      verified
      createdAt
      updatedAt
    }
    description
    duration
    name
    numTracks
    privacy
    tracks {
      id
      addedAt
      addedBy {
        id
        isAdmin
        email
        name
        password
        playlists {
          id
          alias
          collaborative
          description
          duration
          name
          numTracks
          privacy
          createdAt
          updatedAt
        }
        username
        verified
        createdAt
        updatedAt
      }
      playlists {
        id
        alias
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        collaborative
        creator {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        description
        duration
        name
        numTracks
        privacy
        tracks {
          id
          addedAt
        }
        createdAt
        updatedAt
      }
      track {
        id
        album {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        audio {
          id
          bitrate
          format
          size
          url
          createdAt
          updatedAt
        }
        discNumber
        duration
        explicit
        featuring {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        genre
        isPlayable
        name
        trackNumber
        createdAt
        updatedAt
      }
    }
    createdAt
    updatedAt
  }
}
    `;
export type AddToPlaylistMutationFn = ApolloReactCommon.MutationFunction<AddToPlaylistMutation, AddToPlaylistMutationVariables>;
export type AddToPlaylistComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddToPlaylistMutation, AddToPlaylistMutationVariables>, 'mutation'>;

    export const AddToPlaylistComponent = (props: AddToPlaylistComponentProps) => (
      <ApolloReactComponents.Mutation<AddToPlaylistMutation, AddToPlaylistMutationVariables> mutation={AddToPlaylistDocument} {...props} />
    );
    
export type AddToPlaylistProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AddToPlaylistMutation, AddToPlaylistMutationVariables> & TChildProps;
export function withAddToPlaylist<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddToPlaylistMutation,
  AddToPlaylistMutationVariables,
  AddToPlaylistProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, AddToPlaylistMutation, AddToPlaylistMutationVariables, AddToPlaylistProps<TChildProps>>(AddToPlaylistDocument, {
      alias: 'addToPlaylist',
      ...operationOptions
    });
};

/**
 * __useAddToPlaylistMutation__
 *
 * To run a mutation, you first call `useAddToPlaylistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToPlaylistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToPlaylistMutation, { data, loading, error }] = useAddToPlaylistMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddToPlaylistMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddToPlaylistMutation, AddToPlaylistMutationVariables>) {
        return ApolloReactHooks.useMutation<AddToPlaylistMutation, AddToPlaylistMutationVariables>(AddToPlaylistDocument, baseOptions);
      }
export type AddToPlaylistMutationHookResult = ReturnType<typeof useAddToPlaylistMutation>;
export type AddToPlaylistMutationResult = ApolloReactCommon.MutationResult<AddToPlaylistMutation>;
export type AddToPlaylistMutationOptions = ApolloReactCommon.BaseMutationOptions<AddToPlaylistMutation, AddToPlaylistMutationVariables>;
export const CreateTrackDocument = gql`
    mutation CreateTrack($input: TrackCreatePayload!) {
  createTrack(input: $input) {
    id
    album {
      id
      alias
      artists {
        id
        albums {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        alias
        avatar {
          id
          url
          createdAt
          updatedAt
        }
        featuresIn {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        genres
        name
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      duration
      genres
      artwork {
        id
        uploadedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      name
      numTracks
      releaseDate
      releaseType
      tracks {
        id
        album {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        audio {
          id
          bitrate
          format
          size
          url
          createdAt
          updatedAt
        }
        discNumber
        duration
        explicit
        featuring {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        genre
        isPlayable
        name
        trackNumber
        createdAt
        updatedAt
      }
      addedBy {
        id
        isAdmin
        email
        name
        password
        playlists {
          id
          alias
          collaborative
          description
          duration
          name
          numTracks
          privacy
          createdAt
          updatedAt
        }
        username
        verified
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
    artists {
      id
      albums {
        id
        alias
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        duration
        genres
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        name
        numTracks
        releaseDate
        releaseType
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        addedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      alias
      avatar {
        id
        uploadedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      featuresIn {
        id
        album {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        audio {
          id
          bitrate
          format
          size
          url
          createdAt
          updatedAt
        }
        discNumber
        duration
        explicit
        featuring {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        genre
        isPlayable
        name
        trackNumber
        createdAt
        updatedAt
      }
      genres
      name
      tracks {
        id
        album {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        audio {
          id
          bitrate
          format
          size
          url
          createdAt
          updatedAt
        }
        discNumber
        duration
        explicit
        featuring {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        genre
        isPlayable
        name
        trackNumber
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
    audio {
      id
      bitrate
      format
      size
      uploadedBy {
        id
        isAdmin
        email
        name
        password
        playlists {
          id
          alias
          collaborative
          description
          duration
          name
          numTracks
          privacy
          createdAt
          updatedAt
        }
        username
        verified
        createdAt
        updatedAt
      }
      url
      createdAt
      updatedAt
    }
    discNumber
    duration
    explicit
    featuring {
      id
      albums {
        id
        alias
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        duration
        genres
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        name
        numTracks
        releaseDate
        releaseType
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        addedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      alias
      avatar {
        id
        uploadedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      featuresIn {
        id
        album {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        audio {
          id
          bitrate
          format
          size
          url
          createdAt
          updatedAt
        }
        discNumber
        duration
        explicit
        featuring {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        genre
        isPlayable
        name
        trackNumber
        createdAt
        updatedAt
      }
      genres
      name
      tracks {
        id
        album {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        audio {
          id
          bitrate
          format
          size
          url
          createdAt
          updatedAt
        }
        discNumber
        duration
        explicit
        featuring {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        genre
        isPlayable
        name
        trackNumber
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
    genre
    isPlayable
    name
    trackNumber
    createdAt
    updatedAt
  }
}
    `;
export type CreateTrackMutationFn = ApolloReactCommon.MutationFunction<CreateTrackMutation, CreateTrackMutationVariables>;
export type CreateTrackComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateTrackMutation, CreateTrackMutationVariables>, 'mutation'>;

    export const CreateTrackComponent = (props: CreateTrackComponentProps) => (
      <ApolloReactComponents.Mutation<CreateTrackMutation, CreateTrackMutationVariables> mutation={CreateTrackDocument} {...props} />
    );
    
export type CreateTrackProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateTrackMutation, CreateTrackMutationVariables> & TChildProps;
export function withCreateTrack<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateTrackMutation,
  CreateTrackMutationVariables,
  CreateTrackProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateTrackMutation, CreateTrackMutationVariables, CreateTrackProps<TChildProps>>(CreateTrackDocument, {
      alias: 'createTrack',
      ...operationOptions
    });
};

/**
 * __useCreateTrackMutation__
 *
 * To run a mutation, you first call `useCreateTrackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTrackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTrackMutation, { data, loading, error }] = useCreateTrackMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTrackMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTrackMutation, CreateTrackMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTrackMutation, CreateTrackMutationVariables>(CreateTrackDocument, baseOptions);
      }
export type CreateTrackMutationHookResult = ReturnType<typeof useCreateTrackMutation>;
export type CreateTrackMutationResult = ApolloReactCommon.MutationResult<CreateTrackMutation>;
export type CreateTrackMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTrackMutation, CreateTrackMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($input: UserCreatePayload!) {
  createUser(input: $input) {
    token
    user {
      id
      isAdmin
      email
      name
      password
      playlists {
        id
        alias
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        collaborative
        creator {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        description
        duration
        name
        numTracks
        privacy
        tracks {
          id
          addedAt
        }
        createdAt
        updatedAt
      }
      username
      verified
      createdAt
      updatedAt
    }
  }
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export type CreateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateUserMutation, CreateUserMutationVariables>, 'mutation'>;

    export const CreateUserComponent = (props: CreateUserComponentProps) => (
      <ApolloReactComponents.Mutation<CreateUserMutation, CreateUserMutationVariables> mutation={CreateUserDocument} {...props} />
    );
    
export type CreateUserProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateUserMutation, CreateUserMutationVariables> & TChildProps;
export function withCreateUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateUserMutation,
  CreateUserMutationVariables,
  CreateUserProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateUserMutation, CreateUserMutationVariables, CreateUserProps<TChildProps>>(CreateUserDocument, {
      alias: 'createUser',
      ...operationOptions
    });
};

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($input: UserUpdatePayload!) {
  updateUser(input: $input) {
    id
    isAdmin
    email
    name
    password
    playlists {
      id
      alias
      artwork {
        id
        uploadedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      collaborative
      creator {
        id
        isAdmin
        email
        name
        password
        playlists {
          id
          alias
          collaborative
          description
          duration
          name
          numTracks
          privacy
          createdAt
          updatedAt
        }
        username
        verified
        createdAt
        updatedAt
      }
      description
      duration
      name
      numTracks
      privacy
      tracks {
        id
        addedAt
        addedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        playlists {
          id
          alias
          collaborative
          description
          duration
          name
          numTracks
          privacy
          createdAt
          updatedAt
        }
        track {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
      }
      createdAt
      updatedAt
    }
    username
    verified
    createdAt
    updatedAt
  }
}
    `;
export type UpdateUserMutationFn = ApolloReactCommon.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;
export type UpdateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateUserMutation, UpdateUserMutationVariables>, 'mutation'>;

    export const UpdateUserComponent = (props: UpdateUserComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateUserMutation, UpdateUserMutationVariables> mutation={UpdateUserDocument} {...props} />
    );
    
export type UpdateUserProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateUserMutation, UpdateUserMutationVariables> & TChildProps;
export function withUpdateUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  UpdateUserProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateUserMutation, UpdateUserMutationVariables, UpdateUserProps<TChildProps>>(UpdateUserDocument, {
      alias: 'updateUser',
      ...operationOptions
    });
};

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = ApolloReactCommon.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const AuthenticateUserDocument = gql`
    mutation AuthenticateUser($input: LoginUserPayload!) {
  authenticateUser(input: $input) {
    token
    user {
      id
      isAdmin
      email
      name
      password
      playlists {
        id
        alias
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        collaborative
        creator {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        description
        duration
        name
        numTracks
        privacy
        tracks {
          id
          addedAt
        }
        createdAt
        updatedAt
      }
      username
      verified
      createdAt
      updatedAt
    }
  }
}
    `;
export type AuthenticateUserMutationFn = ApolloReactCommon.MutationFunction<AuthenticateUserMutation, AuthenticateUserMutationVariables>;
export type AuthenticateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AuthenticateUserMutation, AuthenticateUserMutationVariables>, 'mutation'>;

    export const AuthenticateUserComponent = (props: AuthenticateUserComponentProps) => (
      <ApolloReactComponents.Mutation<AuthenticateUserMutation, AuthenticateUserMutationVariables> mutation={AuthenticateUserDocument} {...props} />
    );
    
export type AuthenticateUserProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AuthenticateUserMutation, AuthenticateUserMutationVariables> & TChildProps;
export function withAuthenticateUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AuthenticateUserMutation,
  AuthenticateUserMutationVariables,
  AuthenticateUserProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, AuthenticateUserMutation, AuthenticateUserMutationVariables, AuthenticateUserProps<TChildProps>>(AuthenticateUserDocument, {
      alias: 'authenticateUser',
      ...operationOptions
    });
};

/**
 * __useAuthenticateUserMutation__
 *
 * To run a mutation, you first call `useAuthenticateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticateUserMutation, { data, loading, error }] = useAuthenticateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthenticateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AuthenticateUserMutation, AuthenticateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<AuthenticateUserMutation, AuthenticateUserMutationVariables>(AuthenticateUserDocument, baseOptions);
      }
export type AuthenticateUserMutationHookResult = ReturnType<typeof useAuthenticateUserMutation>;
export type AuthenticateUserMutationResult = ApolloReactCommon.MutationResult<AuthenticateUserMutation>;
export type AuthenticateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<AuthenticateUserMutation, AuthenticateUserMutationVariables>;
export const AlbumDocument = gql`
    query Album($id: ID!) {
  album(id: $id) {
    id
    alias
    artists {
      id
      albums {
        id
        alias
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        duration
        genres
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        name
        numTracks
        releaseDate
        releaseType
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        addedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      alias
      avatar {
        id
        uploadedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      featuresIn {
        id
        album {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        audio {
          id
          bitrate
          format
          size
          url
          createdAt
          updatedAt
        }
        discNumber
        duration
        explicit
        featuring {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        genre
        isPlayable
        name
        trackNumber
        createdAt
        updatedAt
      }
      genres
      name
      tracks {
        id
        album {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        audio {
          id
          bitrate
          format
          size
          url
          createdAt
          updatedAt
        }
        discNumber
        duration
        explicit
        featuring {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        genre
        isPlayable
        name
        trackNumber
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
    duration
    genres
    artwork {
      id
      uploadedBy {
        id
        isAdmin
        email
        name
        password
        playlists {
          id
          alias
          collaborative
          description
          duration
          name
          numTracks
          privacy
          createdAt
          updatedAt
        }
        username
        verified
        createdAt
        updatedAt
      }
      url
      createdAt
      updatedAt
    }
    name
    numTracks
    releaseDate
    releaseType
    tracks {
      id
      album {
        id
        alias
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        duration
        genres
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        name
        numTracks
        releaseDate
        releaseType
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        addedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      artists {
        id
        albums {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        alias
        avatar {
          id
          url
          createdAt
          updatedAt
        }
        featuresIn {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        genres
        name
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      audio {
        id
        bitrate
        format
        size
        uploadedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      discNumber
      duration
      explicit
      featuring {
        id
        albums {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        alias
        avatar {
          id
          url
          createdAt
          updatedAt
        }
        featuresIn {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        genres
        name
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      genre
      isPlayable
      name
      trackNumber
      createdAt
      updatedAt
    }
    addedBy {
      id
      isAdmin
      email
      name
      password
      playlists {
        id
        alias
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        collaborative
        creator {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        description
        duration
        name
        numTracks
        privacy
        tracks {
          id
          addedAt
        }
        createdAt
        updatedAt
      }
      username
      verified
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
    `;
export type AlbumComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AlbumQuery, AlbumQueryVariables>, 'query'> & ({ variables: AlbumQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const AlbumComponent = (props: AlbumComponentProps) => (
      <ApolloReactComponents.Query<AlbumQuery, AlbumQueryVariables> query={AlbumDocument} {...props} />
    );
    
export type AlbumProps<TChildProps = {}> = ApolloReactHoc.DataProps<AlbumQuery, AlbumQueryVariables> & TChildProps;
export function withAlbum<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AlbumQuery,
  AlbumQueryVariables,
  AlbumProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, AlbumQuery, AlbumQueryVariables, AlbumProps<TChildProps>>(AlbumDocument, {
      alias: 'album',
      ...operationOptions
    });
};

/**
 * __useAlbumQuery__
 *
 * To run a query within a React component, call `useAlbumQuery` and pass it any options that fit your needs.
 * When your component renders, `useAlbumQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAlbumQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAlbumQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AlbumQuery, AlbumQueryVariables>) {
        return ApolloReactHooks.useQuery<AlbumQuery, AlbumQueryVariables>(AlbumDocument, baseOptions);
      }
export function useAlbumLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AlbumQuery, AlbumQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AlbumQuery, AlbumQueryVariables>(AlbumDocument, baseOptions);
        }
export type AlbumQueryHookResult = ReturnType<typeof useAlbumQuery>;
export type AlbumLazyQueryHookResult = ReturnType<typeof useAlbumLazyQuery>;
export type AlbumQueryResult = ApolloReactCommon.QueryResult<AlbumQuery, AlbumQueryVariables>;
export const AlbumsDocument = gql`
    query Albums {
  albums {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        alias
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        duration
        genres
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        name
        numTracks
        releaseDate
        releaseType
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        addedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      cursor
    }
    aggregate {
      count
    }
  }
}
    `;
export type AlbumsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AlbumsQuery, AlbumsQueryVariables>, 'query'>;

    export const AlbumsComponent = (props: AlbumsComponentProps) => (
      <ApolloReactComponents.Query<AlbumsQuery, AlbumsQueryVariables> query={AlbumsDocument} {...props} />
    );
    
export type AlbumsProps<TChildProps = {}> = ApolloReactHoc.DataProps<AlbumsQuery, AlbumsQueryVariables> & TChildProps;
export function withAlbums<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AlbumsQuery,
  AlbumsQueryVariables,
  AlbumsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, AlbumsQuery, AlbumsQueryVariables, AlbumsProps<TChildProps>>(AlbumsDocument, {
      alias: 'albums',
      ...operationOptions
    });
};

/**
 * __useAlbumsQuery__
 *
 * To run a query within a React component, call `useAlbumsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAlbumsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAlbumsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAlbumsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AlbumsQuery, AlbumsQueryVariables>) {
        return ApolloReactHooks.useQuery<AlbumsQuery, AlbumsQueryVariables>(AlbumsDocument, baseOptions);
      }
export function useAlbumsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AlbumsQuery, AlbumsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AlbumsQuery, AlbumsQueryVariables>(AlbumsDocument, baseOptions);
        }
export type AlbumsQueryHookResult = ReturnType<typeof useAlbumsQuery>;
export type AlbumsLazyQueryHookResult = ReturnType<typeof useAlbumsLazyQuery>;
export type AlbumsQueryResult = ApolloReactCommon.QueryResult<AlbumsQuery, AlbumsQueryVariables>;
export const ArtistDocument = gql`
    query Artist($id: ID!) {
  artist(id: $id) {
    id
    albums {
      id
      alias
      artists {
        id
        albums {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        alias
        avatar {
          id
          url
          createdAt
          updatedAt
        }
        featuresIn {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        genres
        name
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      duration
      genres
      artwork {
        id
        uploadedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      name
      numTracks
      releaseDate
      releaseType
      tracks {
        id
        album {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        audio {
          id
          bitrate
          format
          size
          url
          createdAt
          updatedAt
        }
        discNumber
        duration
        explicit
        featuring {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        genre
        isPlayable
        name
        trackNumber
        createdAt
        updatedAt
      }
      addedBy {
        id
        isAdmin
        email
        name
        password
        playlists {
          id
          alias
          collaborative
          description
          duration
          name
          numTracks
          privacy
          createdAt
          updatedAt
        }
        username
        verified
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
    alias
    avatar {
      id
      uploadedBy {
        id
        isAdmin
        email
        name
        password
        playlists {
          id
          alias
          collaborative
          description
          duration
          name
          numTracks
          privacy
          createdAt
          updatedAt
        }
        username
        verified
        createdAt
        updatedAt
      }
      url
      createdAt
      updatedAt
    }
    featuresIn {
      id
      album {
        id
        alias
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        duration
        genres
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        name
        numTracks
        releaseDate
        releaseType
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        addedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      artists {
        id
        albums {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        alias
        avatar {
          id
          url
          createdAt
          updatedAt
        }
        featuresIn {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        genres
        name
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      audio {
        id
        bitrate
        format
        size
        uploadedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      discNumber
      duration
      explicit
      featuring {
        id
        albums {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        alias
        avatar {
          id
          url
          createdAt
          updatedAt
        }
        featuresIn {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        genres
        name
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      genre
      isPlayable
      name
      trackNumber
      createdAt
      updatedAt
    }
    genres
    name
    tracks {
      id
      album {
        id
        alias
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        duration
        genres
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        name
        numTracks
        releaseDate
        releaseType
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        addedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      artists {
        id
        albums {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        alias
        avatar {
          id
          url
          createdAt
          updatedAt
        }
        featuresIn {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        genres
        name
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      audio {
        id
        bitrate
        format
        size
        uploadedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      discNumber
      duration
      explicit
      featuring {
        id
        albums {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        alias
        avatar {
          id
          url
          createdAt
          updatedAt
        }
        featuresIn {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        genres
        name
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      genre
      isPlayable
      name
      trackNumber
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
    `;
export type ArtistComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ArtistQuery, ArtistQueryVariables>, 'query'> & ({ variables: ArtistQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ArtistComponent = (props: ArtistComponentProps) => (
      <ApolloReactComponents.Query<ArtistQuery, ArtistQueryVariables> query={ArtistDocument} {...props} />
    );
    
export type ArtistProps<TChildProps = {}> = ApolloReactHoc.DataProps<ArtistQuery, ArtistQueryVariables> & TChildProps;
export function withArtist<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ArtistQuery,
  ArtistQueryVariables,
  ArtistProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ArtistQuery, ArtistQueryVariables, ArtistProps<TChildProps>>(ArtistDocument, {
      alias: 'artist',
      ...operationOptions
    });
};

/**
 * __useArtistQuery__
 *
 * To run a query within a React component, call `useArtistQuery` and pass it any options that fit your needs.
 * When your component renders, `useArtistQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArtistQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArtistQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ArtistQuery, ArtistQueryVariables>) {
        return ApolloReactHooks.useQuery<ArtistQuery, ArtistQueryVariables>(ArtistDocument, baseOptions);
      }
export function useArtistLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ArtistQuery, ArtistQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ArtistQuery, ArtistQueryVariables>(ArtistDocument, baseOptions);
        }
export type ArtistQueryHookResult = ReturnType<typeof useArtistQuery>;
export type ArtistLazyQueryHookResult = ReturnType<typeof useArtistLazyQuery>;
export type ArtistQueryResult = ApolloReactCommon.QueryResult<ArtistQuery, ArtistQueryVariables>;
export const ArtistsDocument = gql`
    query Artists {
  artists {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        albums {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        alias
        avatar {
          id
          url
          createdAt
          updatedAt
        }
        featuresIn {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        genres
        name
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      cursor
    }
    aggregate {
      count
    }
  }
}
    `;
export type ArtistsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ArtistsQuery, ArtistsQueryVariables>, 'query'>;

    export const ArtistsComponent = (props: ArtistsComponentProps) => (
      <ApolloReactComponents.Query<ArtistsQuery, ArtistsQueryVariables> query={ArtistsDocument} {...props} />
    );
    
export type ArtistsProps<TChildProps = {}> = ApolloReactHoc.DataProps<ArtistsQuery, ArtistsQueryVariables> & TChildProps;
export function withArtists<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ArtistsQuery,
  ArtistsQueryVariables,
  ArtistsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ArtistsQuery, ArtistsQueryVariables, ArtistsProps<TChildProps>>(ArtistsDocument, {
      alias: 'artists',
      ...operationOptions
    });
};

/**
 * __useArtistsQuery__
 *
 * To run a query within a React component, call `useArtistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useArtistsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArtistsQuery({
 *   variables: {
 *   },
 * });
 */
export function useArtistsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ArtistsQuery, ArtistsQueryVariables>) {
        return ApolloReactHooks.useQuery<ArtistsQuery, ArtistsQueryVariables>(ArtistsDocument, baseOptions);
      }
export function useArtistsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ArtistsQuery, ArtistsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ArtistsQuery, ArtistsQueryVariables>(ArtistsDocument, baseOptions);
        }
export type ArtistsQueryHookResult = ReturnType<typeof useArtistsQuery>;
export type ArtistsLazyQueryHookResult = ReturnType<typeof useArtistsLazyQuery>;
export type ArtistsQueryResult = ApolloReactCommon.QueryResult<ArtistsQuery, ArtistsQueryVariables>;
export const PlaylistDocument = gql`
    query Playlist($id: ID!) {
  playlist(id: $id) {
    id
    alias
    artwork {
      id
      uploadedBy {
        id
        isAdmin
        email
        name
        password
        playlists {
          id
          alias
          collaborative
          description
          duration
          name
          numTracks
          privacy
          createdAt
          updatedAt
        }
        username
        verified
        createdAt
        updatedAt
      }
      url
      createdAt
      updatedAt
    }
    collaborative
    creator {
      id
      isAdmin
      email
      name
      password
      playlists {
        id
        alias
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        collaborative
        creator {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        description
        duration
        name
        numTracks
        privacy
        tracks {
          id
          addedAt
        }
        createdAt
        updatedAt
      }
      username
      verified
      createdAt
      updatedAt
    }
    description
    duration
    name
    numTracks
    privacy
    tracks {
      id
      addedAt
      addedBy {
        id
        isAdmin
        email
        name
        password
        playlists {
          id
          alias
          collaborative
          description
          duration
          name
          numTracks
          privacy
          createdAt
          updatedAt
        }
        username
        verified
        createdAt
        updatedAt
      }
      playlists {
        id
        alias
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        collaborative
        creator {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        description
        duration
        name
        numTracks
        privacy
        tracks {
          id
          addedAt
        }
        createdAt
        updatedAt
      }
      track {
        id
        album {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        audio {
          id
          bitrate
          format
          size
          url
          createdAt
          updatedAt
        }
        discNumber
        duration
        explicit
        featuring {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        genre
        isPlayable
        name
        trackNumber
        createdAt
        updatedAt
      }
    }
    createdAt
    updatedAt
  }
}
    `;
export type PlaylistComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PlaylistQuery, PlaylistQueryVariables>, 'query'> & ({ variables: PlaylistQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const PlaylistComponent = (props: PlaylistComponentProps) => (
      <ApolloReactComponents.Query<PlaylistQuery, PlaylistQueryVariables> query={PlaylistDocument} {...props} />
    );
    
export type PlaylistProps<TChildProps = {}> = ApolloReactHoc.DataProps<PlaylistQuery, PlaylistQueryVariables> & TChildProps;
export function withPlaylist<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PlaylistQuery,
  PlaylistQueryVariables,
  PlaylistProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, PlaylistQuery, PlaylistQueryVariables, PlaylistProps<TChildProps>>(PlaylistDocument, {
      alias: 'playlist',
      ...operationOptions
    });
};

/**
 * __usePlaylistQuery__
 *
 * To run a query within a React component, call `usePlaylistQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlaylistQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlaylistQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePlaylistQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PlaylistQuery, PlaylistQueryVariables>) {
        return ApolloReactHooks.useQuery<PlaylistQuery, PlaylistQueryVariables>(PlaylistDocument, baseOptions);
      }
export function usePlaylistLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PlaylistQuery, PlaylistQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PlaylistQuery, PlaylistQueryVariables>(PlaylistDocument, baseOptions);
        }
export type PlaylistQueryHookResult = ReturnType<typeof usePlaylistQuery>;
export type PlaylistLazyQueryHookResult = ReturnType<typeof usePlaylistLazyQuery>;
export type PlaylistQueryResult = ApolloReactCommon.QueryResult<PlaylistQuery, PlaylistQueryVariables>;
export const PlaylistsDocument = gql`
    query Playlists {
  playlists {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        alias
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        collaborative
        creator {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        description
        duration
        name
        numTracks
        privacy
        tracks {
          id
          addedAt
        }
        createdAt
        updatedAt
      }
      cursor
    }
    aggregate {
      count
    }
  }
}
    `;
export type PlaylistsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PlaylistsQuery, PlaylistsQueryVariables>, 'query'>;

    export const PlaylistsComponent = (props: PlaylistsComponentProps) => (
      <ApolloReactComponents.Query<PlaylistsQuery, PlaylistsQueryVariables> query={PlaylistsDocument} {...props} />
    );
    
export type PlaylistsProps<TChildProps = {}> = ApolloReactHoc.DataProps<PlaylistsQuery, PlaylistsQueryVariables> & TChildProps;
export function withPlaylists<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PlaylistsQuery,
  PlaylistsQueryVariables,
  PlaylistsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, PlaylistsQuery, PlaylistsQueryVariables, PlaylistsProps<TChildProps>>(PlaylistsDocument, {
      alias: 'playlists',
      ...operationOptions
    });
};

/**
 * __usePlaylistsQuery__
 *
 * To run a query within a React component, call `usePlaylistsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlaylistsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlaylistsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlaylistsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PlaylistsQuery, PlaylistsQueryVariables>) {
        return ApolloReactHooks.useQuery<PlaylistsQuery, PlaylistsQueryVariables>(PlaylistsDocument, baseOptions);
      }
export function usePlaylistsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PlaylistsQuery, PlaylistsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PlaylistsQuery, PlaylistsQueryVariables>(PlaylistsDocument, baseOptions);
        }
export type PlaylistsQueryHookResult = ReturnType<typeof usePlaylistsQuery>;
export type PlaylistsLazyQueryHookResult = ReturnType<typeof usePlaylistsLazyQuery>;
export type PlaylistsQueryResult = ApolloReactCommon.QueryResult<PlaylistsQuery, PlaylistsQueryVariables>;
export const TrackDocument = gql`
    query Track($id: ID!) {
  track(id: $id) {
    id
    album {
      id
      alias
      artists {
        id
        albums {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        alias
        avatar {
          id
          url
          createdAt
          updatedAt
        }
        featuresIn {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        genres
        name
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      duration
      genres
      artwork {
        id
        uploadedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      name
      numTracks
      releaseDate
      releaseType
      tracks {
        id
        album {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        audio {
          id
          bitrate
          format
          size
          url
          createdAt
          updatedAt
        }
        discNumber
        duration
        explicit
        featuring {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        genre
        isPlayable
        name
        trackNumber
        createdAt
        updatedAt
      }
      addedBy {
        id
        isAdmin
        email
        name
        password
        playlists {
          id
          alias
          collaborative
          description
          duration
          name
          numTracks
          privacy
          createdAt
          updatedAt
        }
        username
        verified
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
    artists {
      id
      albums {
        id
        alias
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        duration
        genres
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        name
        numTracks
        releaseDate
        releaseType
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        addedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      alias
      avatar {
        id
        uploadedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      featuresIn {
        id
        album {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        audio {
          id
          bitrate
          format
          size
          url
          createdAt
          updatedAt
        }
        discNumber
        duration
        explicit
        featuring {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        genre
        isPlayable
        name
        trackNumber
        createdAt
        updatedAt
      }
      genres
      name
      tracks {
        id
        album {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        audio {
          id
          bitrate
          format
          size
          url
          createdAt
          updatedAt
        }
        discNumber
        duration
        explicit
        featuring {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        genre
        isPlayable
        name
        trackNumber
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
    audio {
      id
      bitrate
      format
      size
      uploadedBy {
        id
        isAdmin
        email
        name
        password
        playlists {
          id
          alias
          collaborative
          description
          duration
          name
          numTracks
          privacy
          createdAt
          updatedAt
        }
        username
        verified
        createdAt
        updatedAt
      }
      url
      createdAt
      updatedAt
    }
    discNumber
    duration
    explicit
    featuring {
      id
      albums {
        id
        alias
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        duration
        genres
        artwork {
          id
          url
          createdAt
          updatedAt
        }
        name
        numTracks
        releaseDate
        releaseType
        tracks {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
        addedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      alias
      avatar {
        id
        uploadedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      featuresIn {
        id
        album {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        audio {
          id
          bitrate
          format
          size
          url
          createdAt
          updatedAt
        }
        discNumber
        duration
        explicit
        featuring {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        genre
        isPlayable
        name
        trackNumber
        createdAt
        updatedAt
      }
      genres
      name
      tracks {
        id
        album {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        audio {
          id
          bitrate
          format
          size
          url
          createdAt
          updatedAt
        }
        discNumber
        duration
        explicit
        featuring {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        genre
        isPlayable
        name
        trackNumber
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
    genre
    isPlayable
    name
    trackNumber
    createdAt
    updatedAt
  }
}
    `;
export type TrackComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TrackQuery, TrackQueryVariables>, 'query'> & ({ variables: TrackQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TrackComponent = (props: TrackComponentProps) => (
      <ApolloReactComponents.Query<TrackQuery, TrackQueryVariables> query={TrackDocument} {...props} />
    );
    
export type TrackProps<TChildProps = {}> = ApolloReactHoc.DataProps<TrackQuery, TrackQueryVariables> & TChildProps;
export function withTrack<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TrackQuery,
  TrackQueryVariables,
  TrackProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, TrackQuery, TrackQueryVariables, TrackProps<TChildProps>>(TrackDocument, {
      alias: 'track',
      ...operationOptions
    });
};

/**
 * __useTrackQuery__
 *
 * To run a query within a React component, call `useTrackQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrackQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrackQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTrackQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TrackQuery, TrackQueryVariables>) {
        return ApolloReactHooks.useQuery<TrackQuery, TrackQueryVariables>(TrackDocument, baseOptions);
      }
export function useTrackLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TrackQuery, TrackQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TrackQuery, TrackQueryVariables>(TrackDocument, baseOptions);
        }
export type TrackQueryHookResult = ReturnType<typeof useTrackQuery>;
export type TrackLazyQueryHookResult = ReturnType<typeof useTrackLazyQuery>;
export type TrackQueryResult = ApolloReactCommon.QueryResult<TrackQuery, TrackQueryVariables>;
export const TracksDocument = gql`
    query Tracks {
  tracks {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        album {
          id
          alias
          duration
          genres
          name
          numTracks
          releaseDate
          releaseType
          createdAt
          updatedAt
        }
        artists {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        audio {
          id
          bitrate
          format
          size
          url
          createdAt
          updatedAt
        }
        discNumber
        duration
        explicit
        featuring {
          id
          alias
          genres
          name
          createdAt
          updatedAt
        }
        genre
        isPlayable
        name
        trackNumber
        createdAt
        updatedAt
      }
      cursor
    }
    aggregate {
      count
    }
  }
}
    `;
export type TracksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TracksQuery, TracksQueryVariables>, 'query'>;

    export const TracksComponent = (props: TracksComponentProps) => (
      <ApolloReactComponents.Query<TracksQuery, TracksQueryVariables> query={TracksDocument} {...props} />
    );
    
export type TracksProps<TChildProps = {}> = ApolloReactHoc.DataProps<TracksQuery, TracksQueryVariables> & TChildProps;
export function withTracks<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TracksQuery,
  TracksQueryVariables,
  TracksProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, TracksQuery, TracksQueryVariables, TracksProps<TChildProps>>(TracksDocument, {
      alias: 'tracks',
      ...operationOptions
    });
};

/**
 * __useTracksQuery__
 *
 * To run a query within a React component, call `useTracksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTracksQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTracksQuery({
 *   variables: {
 *   },
 * });
 */
export function useTracksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TracksQuery, TracksQueryVariables>) {
        return ApolloReactHooks.useQuery<TracksQuery, TracksQueryVariables>(TracksDocument, baseOptions);
      }
export function useTracksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TracksQuery, TracksQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TracksQuery, TracksQueryVariables>(TracksDocument, baseOptions);
        }
export type TracksQueryHookResult = ReturnType<typeof useTracksQuery>;
export type TracksLazyQueryHookResult = ReturnType<typeof useTracksLazyQuery>;
export type TracksQueryResult = ApolloReactCommon.QueryResult<TracksQuery, TracksQueryVariables>;
export const UserDocument = gql`
    query User($id: ID!) {
  user(id: $id) {
    id
    isAdmin
    email
    name
    password
    playlists {
      id
      alias
      artwork {
        id
        uploadedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      collaborative
      creator {
        id
        isAdmin
        email
        name
        password
        playlists {
          id
          alias
          collaborative
          description
          duration
          name
          numTracks
          privacy
          createdAt
          updatedAt
        }
        username
        verified
        createdAt
        updatedAt
      }
      description
      duration
      name
      numTracks
      privacy
      tracks {
        id
        addedAt
        addedBy {
          id
          isAdmin
          email
          name
          password
          username
          verified
          createdAt
          updatedAt
        }
        playlists {
          id
          alias
          collaborative
          description
          duration
          name
          numTracks
          privacy
          createdAt
          updatedAt
        }
        track {
          id
          discNumber
          duration
          explicit
          genre
          isPlayable
          name
          trackNumber
          createdAt
          updatedAt
        }
      }
      createdAt
      updatedAt
    }
    username
    verified
    createdAt
    updatedAt
  }
}
    `;
export type UserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserQuery, UserQueryVariables>, 'query'> & ({ variables: UserQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const UserComponent = (props: UserComponentProps) => (
      <ApolloReactComponents.Query<UserQuery, UserQueryVariables> query={UserDocument} {...props} />
    );
    
export type UserProps<TChildProps = {}> = ApolloReactHoc.DataProps<UserQuery, UserQueryVariables> & TChildProps;
export function withUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserQuery,
  UserQueryVariables,
  UserProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, UserQuery, UserQueryVariables, UserProps<TChildProps>>(UserDocument, {
      alias: 'user',
      ...operationOptions
    });
};

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = ApolloReactCommon.QueryResult<UserQuery, UserQueryVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        isAdmin
        email
        name
        password
        playlists {
          id
          alias
          collaborative
          description
          duration
          name
          numTracks
          privacy
          createdAt
          updatedAt
        }
        username
        verified
        createdAt
        updatedAt
      }
      cursor
    }
    aggregate {
      count
    }
  }
}
    `;
export type UsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UsersQuery, UsersQueryVariables>, 'query'>;

    export const UsersComponent = (props: UsersComponentProps) => (
      <ApolloReactComponents.Query<UsersQuery, UsersQueryVariables> query={UsersDocument} {...props} />
    );
    
export type UsersProps<TChildProps = {}> = ApolloReactHoc.DataProps<UsersQuery, UsersQueryVariables> & TChildProps;
export function withUsers<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UsersQuery,
  UsersQueryVariables,
  UsersProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, UsersQuery, UsersQueryVariables, UsersProps<TChildProps>>(UsersDocument, {
      alias: 'users',
      ...operationOptions
    });
};

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        return ApolloReactHooks.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
      }
export function useUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = ApolloReactCommon.QueryResult<UsersQuery, UsersQueryVariables>;