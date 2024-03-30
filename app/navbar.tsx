import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="flex bg-slate-500 p-5">
        <Link href="/" className="mr-5">Next.js</Link>
        <Link href="/users" className="mr-5">Users</Link>
    </div>
  )
}

export default Navbar