import { logger } from '@paisidevs/tra-utilities';
import { FC, useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { socialAuth } from '../../utilities/strapiHelpers';

const SocialAuth: FC = () => {
  const history = useHistory();
  const location = useLocation();
  const { provider } = useParams<{ provider: string }>();

  const login = async () => {
    try {
      const { data } = await socialAuth(provider, location.search);
      logger({ data });
    } catch (error) {
      logger(error);
    }
  };

  useEffect(() => {
    // If the link has no provider or accessToken data redirect to login
    if (!provider || !location.search) {
      return history.push('/');
    }
    // Initiate login
    login();
  });

  return null;
};

export default SocialAuth;
