'use server'

import { UserSchema } from "@/schemas/userSchema"
import { User } from "@/types/user"
import { revalidatePath } from "next/cache"

let users: User[] = [
    {nombre: "Martin", apellido: "Perez", email: "martinperez@gmail.com",edad: 20, password: "pepito"},
    {nombre: "Juan", apellido: "Lopez", email: "juanlopez@gmail.com", edad: 25, password: "pirulo"},
    {nombre: "Carlos", apellido: "Rodriguez", email: "carlosrodriguez@gmail.com", edad: 46, password: "pepepepe"},
]
 
export async function getUsers():  Promise<User[]> {
    return users
}

export async function createUser(prevState: unknown, formData: FormData) {
    const data = Object.fromEntries(formData.entries());

    const user: User = {
        nombre: formData.get("nombre") as string,
        apellido: formData.get("apellido") as string,
        email: formData.get("email") as string,
        edad: parseInt(formData.get("edad") as string),
        password: formData.get("password") as string
    }

    const result = UserSchema.safeParse(user)
    if (!result.success) {
        return {
          errors: result.error.format(),
        };
      }
    return { success: true, data };
    users.push(user)  
    revalidatePath("/")
}