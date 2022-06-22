import { useQuery, gql } from '@apollo/client';

const GET_USER = gql`
  query GetUser {
    user {
      id
      username
      discriminator
      avatar
      banner
      accentColor
    }
  }
`;

const UserProfile = () => {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return <p>{data.user.username}#{data.user.discriminator}</p>;
};

export default UserProfile;
