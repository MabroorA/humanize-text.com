"use client"
import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'

function ButtonSignOut() {
    signOut
  return (
    <Button size="sm" variant="destructive" onClick={() => signOut()}>SignOut</Button>
  )
}

export default ButtonSignOut