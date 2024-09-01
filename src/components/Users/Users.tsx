import { useGetUsersQuery } from '../../services/usersService';

const Users = () => {
  const { data: users } = useGetUsersQuery('');

  return <>{users?.map((user) => user.name)}</>;
};

export default Users;
