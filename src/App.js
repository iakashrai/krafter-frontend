import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Views/LandingPage';
import UserProfile from './Views/UserDetail';
import Error404 from './Views/Error404';
import WebIDE from './Views/WebIDE';
import ProtectedRoute from './Components/ProtectedRoute';
import Navbar from './Components/Navbar';
import { useAuth0 } from '@auth0/auth0-react';
// import LoadingAnimation from './Components/Loading';

import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';

function App() {
  
  const {isAuthenticated,isLoading} = useAuth0();

  // if(loading){
  //   return(<><LoadingAnimation /></>)
  // }

  // if(isLoading){
  //   console.log("Loading....");
  // }
  // else{
  //   console.log(isAuthenticated);
  // }
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Error404 />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/ide" element={<WebIDE />}/>
            <Route path="/userProfile" element={<UserProfile />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
