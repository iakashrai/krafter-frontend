import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'


function LogoutButton() {
    const {logout,isAuthenticated} = useAuth0();
    
  return (
    isAuthenticated &&
        <button className="logout-button" onClick={() => logout()}>
            Logout
        </button>
  )
}

export default LogoutButton;