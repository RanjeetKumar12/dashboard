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

const HelloWorld = () => {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return <p>{data.user.username}#{data.user.discriminator}</p>;
};

const Dashboard = () => {
  return (
    <div>
      <p>This is the dashboard</p>
      <HelloWorld />
    </div>
  );
};

export default Dashboard;
