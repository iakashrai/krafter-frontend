import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'


function LoginButton() {
    const {loginWithRedirect,isAuthenticated} = useAuth0();
  return (
    !isAuthenticated &&
        <button className="login-button" onClick={() => loginWithRedirect()}>
            Login
        </button>
  )
}

export default LoginButton