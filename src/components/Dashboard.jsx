import { useQuery, gql } from '@apollo/client';

const HELLO_WORLD = gql`
  query HelloWorld {
    hello
  }
`;

const HelloWorld = () => {
  const { loading, error, data } = useQuery(HELLO_WORLD);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return <p>{data.hello}</p>;
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