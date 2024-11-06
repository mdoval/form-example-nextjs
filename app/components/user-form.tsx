import React from "react";
import SubmitButton from "./submit-button";
import { createUser } from "../../lib/actions";

const UserForm = () => {
  return (
    <form action={createUser} className="w-1/2 border p-4 m-3 shadow-lg">
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
              placeholder="Ej. Juan"
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
              placeholder="Ej. Lopez"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>

        <div>
        <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="email@dominio.com"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>


        <div>
        <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Edad</span>
            </div>
            <input
              id="edad"
              name="edad"
              type="number"
              placeholder="Escriba aqui"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>

        <div className="flex space-x-3">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Contraseña</span>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Escriba aqui"
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Repetir Contraseña</span>
            </div>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              placeholder="Escriba aqui"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>

        <div className="text-left"><SubmitButton /></div>
      </div>
    </form>
  );
};

export default UserForm;
