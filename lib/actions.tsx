'use server'

import { UserSchema } from "@/schemas/userSchema"
import { revalidatePath } from "next/cache"

let users: Object[] = [
    {nombre: "Martin", apellido: "Perez", email: "martinperez@gmail.com",edad: 20, password: "pepito"},
    {nombre: "Juan", apellido: "Lopez", email: "juanlopez@gmail.com", edad: 25, password: "pirulo"},
    {nombre: "Carlos", apellido: "Rodriguez", email: "carlosrodriguez@gmail.com", edad: 46, password: "pepepepe"},
]
 
export async function getUsers():  Promise<Object[]> {
    return users
}

export async function createUser(prevState: unknown, formData: FormData) {
    const data = Object.fromEntries(formData.entries());

    const user = {
        nombre: formData.get("nombre") as string,
        apellido: formData.get("apellido") as string,
        email: formData.get("email") as string,
        edad: parseInt(formData.get("edad") as string),
        password: formData.get("password") as string,
        confirmPassword: formData.get("confirmPassword") as string         
    }

    const result = UserSchema.safeParse(user)
    if (!result.success) {
        console.log(result.error.errors)
        return {
          errors: result.error.format(),          
        };
      }
//    return { success: true, data };
    users.push(user)  
    revalidatePath("/")
}