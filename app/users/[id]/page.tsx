import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
    params: {
        id: number
    }
}

interface User {
    id: number,
    name: string,
    email: string
}

const UserDetail = async ({ params: { id } }: Props) => {
    if(id > 10) notFound();
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user: User = await response.json();

    return (
        <>
            <div>User Detail</div>
            <ul>
                <li>{user.name}</li>
                <li>{user.email}</li>
            </ul>
            <div>Photos</div>
            <ul>
                <li><Link href={`/users/${id}/photo/1`}>Photo 1</Link></li>
                <li><Link href={`/users/${id}/photo/2`}>Photo 2</Link></li>
            </ul>
            <Link href={`/users`}>Back</Link>
        </>

    )
}

export default UserDetail