'use server'

import { revalidatePath } from "next/cache"

let users: User[] = [
    {nombre: "Martin", apellido: "Perez"},
    {nombre: "Juan", apellido: "Lopez"},
    {nombre: "Carlos", apellido: "Rodriguez"},
]
 
export async function getUsers():  Promise<User[]> {
    return users
}

export async function createUser(formData: FormData) {
    const user: User = {
        nombre: formData.get("nombre") as string,
        apellido: formData.get("apellido") as string
    }
    users.push(user)    
    revalidatePath("/")
}