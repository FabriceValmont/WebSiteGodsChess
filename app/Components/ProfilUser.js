"use client"

import React from 'react'
import { useSession } from '../CustomHooks/SessionContext';

function ProfilUser() {
  const { logout } = useSession();

  const handleLogout = () => {
    logout();
    window.location.href = '/'
  }
  return (
    <div>
      <h1>
        ProfilUser
      </h1>
      <button onClick={handleLogout}>Déconnexion</button>
    </div>
  )
}

export default ProfilUser