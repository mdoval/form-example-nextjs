import { z } from 'zod'

export const UserSchema = z.object({
    nombre: z.string(),
    apellido: z.string(),
    email: z.string(),
    edad: z.number().min(0).max(120),
    password: z.string()
})