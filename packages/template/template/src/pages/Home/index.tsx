// import { gql, useQuery } from '@apollo/client';
import { logger } from '@paisidevs/tra-utilities';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Logo } from '../../components';
import { Wrapper } from './styles';

// const GET_CLUBS = gql`
//   query clubs($sort: String = "name") {
//     clubs(sort: $sort) {
//       id
//       abbr
//       badge
//       name
//       stadium {
//         name
//       }
//     }
//   }
// `;

const Home: React.FC = () => {
  // const { data } = useQuery(GET_CLUBS);
  logger('Home');

  return (
    <Wrapper>
      <Helmet>
        <title>the-react-app - Built with love by @paisidevs</title>
      </Helmet>
      <Logo />
    </Wrapper>
  );
};

export default Home;
