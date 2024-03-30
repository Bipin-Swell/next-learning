import Link from 'next/link';
import React from 'react'
import { sort } from 'fast-sort';

interface User {
    id: number,
    name: string,
    email: string
}

interface Props {
    sortedBy: string
}

const UserTable = async ({ sortedBy }: Props) => {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        { next: { revalidate: 10 } });
    const users: User[] = await response.json();

    const sortedUsers: User[] = sort(users)
        .asc(u => sortedBy === 'name' ?
            u.name : u.email);

    return (
        <>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th><Link href={`users?sortedBy=name`}>Name</Link></th>
                        <th><Link href={`users?sortedBy=email`}>Email</Link></th>
                    </tr>
                </thead>
                <tbody>
                    {sortedUsers.map(user =>
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><Link href={`users/${user.id}`}>View Detail</Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <p>Last refreshed : {new Date().toLocaleString()}</p>
            <Link href={`/`}>Back</Link>
        </>
    )
}

export default UserTable