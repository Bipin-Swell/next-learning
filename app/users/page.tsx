import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'

interface Props {
    searchParams: {
        sortedBy: string
    }
}

const Users = async ({ searchParams: { sortedBy } }: Props) => {
    return (
        <div>
            <h1>Users List</h1>
            <Link href="users/new" className="p-5 btn">New User</Link>
            <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
                <UserTable sortedBy={sortedBy} />
            </Suspense>
        </div>
    )
}

export default Users