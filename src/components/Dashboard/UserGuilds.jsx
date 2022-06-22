import { useQuery, gql } from '@apollo/client';

const GET_USER_GUILDS = gql`
  query GetUserGuilds {
    guilds {
      id
      name
      owner
      permissions
    }
  }
`;

const UserGuilds = () => {
  const { loading, error, data } = useQuery(GET_USER_GUILDS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      {data.guilds.map(guild => (
        <div key={guild.id}>
          <h2>{guild.name}</h2>
          {guild.owner && <p>You own this guild.</p>}
          <p>Permissions: {guild.permissions}</p>
        </div>
      ))}
    </div>
  );
};

export default UserGuilds;
