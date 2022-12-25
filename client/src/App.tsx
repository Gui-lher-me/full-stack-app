import { useEffect, useState } from 'react';

const baseURL = 'http://localhost:5000/api/v1';

export default function App() {
  useEffect(() => {
    fetch(`${baseURL}/users`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => error)
      .finally(() => {});
    return () => {};
  }, []);

  return <UsersList />;
}

function UsersList() {
  return null;
}
