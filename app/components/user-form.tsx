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
            <div className="label">
              <span className="label-text-alt text-red-600 font-bold">
                {data?.errors?.nombre?._errors}
              </span>
            </div>
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
            <div className="label">
              <span className="label-text-alt text-red-600 font-bold">
                {data?.errors?.apellido?._errors}
              </span>
            </div>
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
            <div className="label">
              <span className="label-text-alt text-red-600 font-bold">
                {data?.errors?.email?._errors}
              </span>
            </div>
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
              <span className="label-text-alt text-red-600 font-bold">
                {data?.errors?.edad?._errors}
              </span>
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
            <div className="label">
              <span className="label-text-alt text-red-600 font-bold">
                {data?.errors?.password?._errors}
              </span>
            </div>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Contraseña</span>
            </div>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Escriba aqui"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label">
              <span className="label-text-alt text-red-600 font-bold">
                {data?.errors?.confirmPassword?._errors}
              </span>
            </div>
          </label>
        </div>

        <div className="text-left">
          <SubmitButton />
        </div>
      </div>
    </form>
  );
};

export default UserForm;
