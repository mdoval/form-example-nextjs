import { z } from "zod";

export const UserSchema = z.object({
  nombre: z.string().min(1, { message: "Debe colocar un Nombre" }),
  apellido: z.string().min(1, { message: "Debe colocar un Apellido" }),
  email: z.string().email({ message: "Debe ingresar un EMAIL valido" }),
  edad: z
    .number({
      required_error: "El Campo no puede ser nulo",
      invalid_type_error: "La edad no puede ser nula",
    })
    .min(0)
    .max(120),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener un minimo de 8 caracteres" })
    .max(20, {
      message: "La contraseña debe tener un maximo de 20 caracteres",
    }),
});
