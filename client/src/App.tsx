import { instance } from '@api/http-common';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';

type User = { name: string; email: string; phone: string };

type Data = { users: User[] };

export default function App() {
  const [users, usersSet] = useState([] as User[]);

  useEffect(() => {
    instance
      .get<Data>('/users')
      .then((response) => usersSet(response.data.users))
      .catch((error) => error)
      .finally(() => {});
    return () => {};
  }, []);

  return <UserList users={users} />;
}

interface IUserList extends Data {}

function UserList({ users }: IUserList) {
  const newUsers = users.map((user) => ({ ...user, id: v4() }));

  return (
    <div className='h-screen bg-indigo-500 text-indigo-100'>
      <ul>
        {newUsers.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}
