import { z } from 'zod'

const UserSchema = z.object({
    nombre: z.string(),
    apellido: z.string(),
    email: z.string(),
    edad: z.number(),
    password: z.string()
})