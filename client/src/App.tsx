import { instance } from '@api/http-common';
import { useEffect, useState } from 'react';

export default function App() {
  const [users, usersSet] = useState([]);

  useEffect(() => {
    instance
      .get('/users')
      .then((response) => usersSet(response.data.users))
      .catch((error) => error)
      .finally(() => {});
    return () => {};
  }, []);

  return <UsersList users={users} />;
}

function UsersList({ users }: { users: { id: number; name: string }[] }) {
  return (
    <div className='h-screen bg-indigo-500 text-indigo-100'>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
