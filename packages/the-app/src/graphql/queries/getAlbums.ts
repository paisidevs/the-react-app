import gql from 'graphql-tag';

export const GET_ALBUMS = gql`
  query getAlbums {
    albums @client {
      edges {
        node {
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
    }
  }
`;
