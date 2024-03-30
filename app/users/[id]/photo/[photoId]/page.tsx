import Link from 'next/link'
import React from 'react'

type Props = {
    params: {
        id: number,
        photoId: number
    }
}

const PhotoPage = ({ params: { id, photoId } }: Props) => {
    return (
        <>
            <div>Photo Page {id} : {photoId}</div>
            <ul>
                <li><Link href={`/users/${id}`}>Back</Link></li>
                <li><Link href={`/`}>Home Page</Link></li>
            </ul>
        </>
    )
}

export default PhotoPage