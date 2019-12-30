import gql from 'graphql-tag';

export const GET_ALBUM = gql`
  query getAlbum($id: ID!) {
    album(id: $id) @client {
      id
      name
      artists {
        name
      }
      genres
      tracks {
        id
        name
        artists {
          name
        }
        featuring {
          name
        }
        trackNumber
      }
      releaseDate
      releaseType
    }
  }
`;
