"use client";

import React, { useActionState } from "react";
import SubmitButton from "./submit-button";
import { createUser } from "../../lib/actions";

//const initialState = { message: "" };

const UserForm = () => {
  const [data, handleSubmit, isPending] = useActionState(createUser, undefined);

  return (
    <form action={handleSubmit} className="w-1/2 border p-4 m-3 shadow-lg">
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
            <div className="label">
              <span className="label-text-alt text-red-600 font-bold"></span>
            </div>
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

        <div className="text-left">
          <SubmitButton />
        </div>
      </div>

      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{JSON.stringify(data?.errors)}</span>
      </div>
    </form>
  );
};

export default UserForm;
