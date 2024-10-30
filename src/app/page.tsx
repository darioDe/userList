'use client'

import Button from "./components/Button";
import Table from "./components/Table";
import { useUsers } from "./useHooks/useUsers";
import { useState } from 'react';

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false)


  const apiEndpoint = 'https://gorest.co.in/public/v2/users';
  const { users } = useUsers(apiEndpoint);

  console.log(users);

  return (
    <>
      <header>
        <h1> Lista de Usarios </h1>
        <Button openModal={openModal} setOpenModal={setOpenModal}/>
      </header>
      <main>
        <Table users={users} />
      </main>
    </>
  );
}
