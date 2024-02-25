import { useAuth0} from '@auth0/auth0-react';
import {Navigate, Outlet} from 'react-router-dom';
import LoadingAnimation from './Loading';


function ProtectedRoute() {
  const {isLoading,isAuthenticated} = useAuth0();
  if(isLoading){
    return( 
    <div className="w-screen h-screen">
      <LoadingAnimation />
      <h1 className=''>
        Loading....
      </h1>
    </div>
    );
  }

  return(
    isAuthenticated ?<Outlet /> : <Navigate to="/"/>
  );
}

export default ProtectedRoute;