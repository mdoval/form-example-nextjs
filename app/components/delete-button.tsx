'use client'

import { deleteUser } from "@/lib/actions"

export default function DeleteButton({id}: {id: number}) {
    const handleDelete = () => {
        console.log(id)     
        deleteUser(id)        
    }

    return(
        <button className="btn btn-secondary" onClick={handleDelete}>Eliminar</button>
    )
}