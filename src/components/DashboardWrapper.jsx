import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Dashboard from './Dashboard';

const client = new ApolloClient({
  uri: 'http://localhost:5000/api/graphql',
  cache: new InMemoryCache()
});

const DashboardWrapper = () => {
  return (
    <ApolloProvider client={client}>
      <Dashboard />
    </ApolloProvider>
  );
};

export default DashboardWrapper;
