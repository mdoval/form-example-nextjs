import React from "react";
import DeleteButton from "./delete-button";
import { User } from "@/types/user";

const UserTable = ({ users }: { users: User[] }) => {
  return (
    <div className="shadow-lg rounded-lg w-full m-3">
      <table className="w-full text-left">
        <thead className="uppercase bg-[#6b7280] text-[#e5e7eb]">
          <tr>
            <td className="border text-center pt-2 pb-2 pr-2 pl-2">#</td>
            <td className="border text-center pt-2 pb-2">NOMBRE</td>
            <td className="border text-center pt-2 pb-2">APELLIDO</td>
            <td className="border text-center pt-2 pb-2">EMAIL</td>
            <td className="border text-center pt-2 pb-2">EDAD</td>
            <td className="border text-center pt-2 pb-2">ACCIONES</td>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-500 bg-[#FFFFFF] text-[#6b7280]">
          {users.map((user, index) => {
            return (
              <tr className="py-5" key={index}>
                <td className="border text-center pt-2 pb-2 pr-2 pl-2 ">{index}</td>
                <td className="border text-center pt-2 pb-2">{user.nombre}</td>
                <td className="border text-center pt-2 pb-2">{user.apellido}</td>
                <td className="border text-center pt-2 pb-2">{user.email}</td>
                <td className="border text-center pt-2 pb-2">{user.edad}</td>
                <td className="border text-center pt-2 pb-2"><DeleteButton id={index} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
