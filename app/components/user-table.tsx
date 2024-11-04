import React from "react";

const UserTable = ({ users }: { users: User[] }) => {
  return (
    <div className="relative overflow-hidden shadow-md rounded-lg">
      <table className="table-fixed w-full text-left">
        <thead className="uppercase bg-[#6b7280] text-[#e5e7eb]">
          <tr>
            <td className="py-1 border text-center p-4">#</td>
            <td className="py-1 border text-center p-4">NOMBRE</td>
            <td className="py-1 border text-center p-4">APELLIDO</td>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-500 bg-[#FFFFFF] text-[#6b7280]">
          {users.map((user, index) => {
            return (
              <tr className="py-5" key={index}>
                <td className=" py-5 border text-center p-4">{index}</td>
                <td className=" py-5 border text-center p-4">{user.nombre}</td>
                <td className=" py-5 border text-center p-4">{user.apellido}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
