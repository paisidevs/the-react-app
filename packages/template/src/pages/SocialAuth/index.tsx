import { FC, useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import strapiHelpers from '../../utilities/strapiHelpers';

const SocialAuth: FC = () => {
  const history = useHistory();
  const location = useLocation();
  const { provider } = useParams<{ provider: string }>();

  const login = async () => {
    try {
      const { data } = await strapiHelpers.socialAuth(
        provider,
        location.search,
      );
      console.log({ data });
    } catch (error) {
      console.log(error);
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
