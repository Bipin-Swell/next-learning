'use client'
import React from 'react'

type Props = {
    error: Error
}

const GlobalErrorPage = ({error}: Props) => {
    console.log('Global Error', error);
  return (
    <div>An unexpected has occurred!</div>
  )
}

export default GlobalErrorPage