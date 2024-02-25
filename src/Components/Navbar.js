import React from 'react'
import '../Styles/Navbar.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import LoadingAnimation from './Loading';

function Navbar() {
  const { isLoading, error } = useAuth0();

  return (
    <header>
        {/* Add Condition to show popup if login Failed*/}
        {/* {error && <ErrorPopupButton/>} */}
        {!error && isLoading && <LoadingAnimation />}
        {!error && !isLoading &&
            <div className='navbar-main-container flex flex-row justify-between items-center
                px-10 p-5 w-full
            '>
                <div className='logo-container text-2xl'>
                    <h1>{'{'} Krafter {'}'}</h1>
                </div>
                <>
                    <LoginButton />
                    <LogoutButton />
                </>
            </div>
        }
    </header>
  );
}

export default Navbar