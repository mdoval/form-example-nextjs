import Image from "next/image";
import UserForm from "./components/user-form";
import UserTable from "./components/user-table";
import { getUsers } from "../lib/actions";

export default async function Home() {
  const users = await getUsers();

  return (
    <div>
      <main className="flex flex-col p-8">
        <h1>Formulario Example</h1>
        <hr />
        <div className="flex w-full">
          <UserForm />
          <UserTable users={users} />
        </div>
      </main>
    </div>
  );
}
