import gql from 'graphql-tag';
export type Maybe<T> = T | null;
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


