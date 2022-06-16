import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query HelloWorld {
    hello
  }
`;

const ExchangeRates = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return <p>{data.hello}</p>;
};

const Dashboard = () => {
  return (
    <div>
      <p>This is the dashboard</p>
      <ExchangeRates />
    </div>
  );
};

export default Dashboard;
