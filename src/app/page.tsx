'use client'

import { useState } from "react";
import { useUsers } from "./useHooks/useUsers";

export default function Home() {
  const apiUrl = 'https://gorest.co.in/public/v2/users';
  const { users } = useUsers(apiUrl);

  console.log(users);
  
  
  return (
    <>
      <header>
        <h1> Lista de Usarios </h1>
        <button> Nuevo Usuario </button>
      </header>
      <main>
        
      </main>
    </>
  );
}
