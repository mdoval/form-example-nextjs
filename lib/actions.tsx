'use server'

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

export async function createUser(prevState: string, formData: FormData) {
    const user: User = {
        nombre: formData.get("nombre") as string,
        apellido: formData.get("apellido") as string,
        email: formData.get("email") as string,
        edad: parseInt(formData.get("edad") as string),
        password: formData.get("password") as string
    }
    users.push(user)  
    console.log(users) 
    return { message: 'Please enter a valid email' }
    revalidatePath("/")
}