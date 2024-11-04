import React from "react";
import SubmitButton from "./submit-button";
import { createUser } from "../lib/actions";

const UserForm = () => {
  return (
    <form action={createUser}>
      <div className="p-4 space-y-3">
        <div className="flex space-x-3">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Nombre</span>
            </div>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Escriba aqui"
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Apellido</span>
            </div>
            <input
              id="apellido"
              name="apellido"
              type="text"
              placeholder="Escriba aqui"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className="text-center"><SubmitButton /></div>
      </div>
    </form>
  );
};

export default UserForm;
