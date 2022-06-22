import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import UserGuilds from './UserGuilds';
import UserProfile from './UserProfile';

const client = new ApolloClient({
  uri: 'http://localhost:5000/api/graphql',
  cache: new InMemoryCache(),
  credentials: 'include', // required to send cookies on every request
});

const Dashboard = () => {
  return (
    <ApolloProvider client={client}>
      <p>This is the dashboard</p>
      <UserProfile />
      <UserGuilds />
    </ApolloProvider>
  );
};

export default Dashboard;
