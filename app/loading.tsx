import React from 'react'

type Props = {}

const Loading = (props: Props) => {
    return (
        <>
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
        </>
    )
}

export default Loading