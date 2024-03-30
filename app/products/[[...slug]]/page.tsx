import Link from 'next/link'
import React from 'react'

type Props = {
    params: {
        slug: string[]
    },
    searchParams: {
        sortOrder: string,
        filterBy: string,
    }
}

const Products = ({ params: { slug }, searchParams: { sortOrder, filterBy } }: Props) => {
    return (
        <>
            <div>Products</div>
            <ul>
                {slug?.map((slg, index) =>
                    <li key={slg}>Slug {index} : {slg}</li>
                )}
                {sortOrder && <li>Sorted By {sortOrder}</li>}
                {filterBy && <li>Filtered By {filterBy}</li>}
                <li><Link href={`/`}>Home Page</Link></li>
            </ul>
        </>
    )
}

export default Products