'use client'
import React from 'react'

type Props = {
  error: Error,
  reset: () => void
}

const GlobalErrorPage = ({ error, reset }: Props) => {
  console.log('Error', error);
  return (
    <>
      <div>An error has occured!</div>
      <button className="btn" onClick={reset}>Retry</button>
    </>
  )
}

export default GlobalErrorPage