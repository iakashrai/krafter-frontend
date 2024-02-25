import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import React, { useState } from 'react'
import defaultPicture from '../images/default-user-profile-picture.png'

function UserDetail() {
  const { user, getAccessTokenSilently } = useAuth0();
  const [fullName, setFullName] = useState(user.name);
  const [userName, setUserName] = useState(user.username);
  const [phone,setPhoneNumber] = useState(user.phone_number);
  const [email, setEmail] = useState(user.email);
  const [joinedDate, setJoinedDate] = useState(user.created_at);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isChangingEmail, setIsChangingEmail] = useState(false);
  const [password, setPassword] = useState('');
  // const [otp, setOtp] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const updatePassword = async () => {
    try {
      const token = await getAccessTokenSilently({
        audience: 'https://your-auth0-domain/api/v2/',
        scope: 'update:current_user_password',
      });

      await axios.patch(
        `https://your-auth0-domain/api/v2/users/${user.sub}`,
        { password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert('Password updated successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to update password');
    }
  };

  const deleteUser = async () => {
    try {
      const token = await getAccessTokenSilently({
        audience: 'https://your-auth0-domain/api/v2/',
        scope: 'delete:current_user',
      });

      await axios.delete(
        `https://your-auth0-domain/api/v2/users/${user.sub}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert('Account deleted successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to delete account');
    }
  };

  const handlePasswordChange = () => {
    setIsChangingPassword(false);
  }

  const handleEmailChange = () => {
    setIsChangingEmail(false);
  }

  return (
    <section className='user-profile w-screen h-screen bg-gray-100 p-10'>
      <div className='user-profile-container flex flex-col bg-white p-5 rounded-lg shadow-md'>
        <div className='profile-intro flex flex-col items-center justify-center space-x-5 space-y-5 mb-5'>
          <div className='profile-picture-container'>
            <img id='profile-picture' src={defaultPicture} alt='profile-picture' className='w-20 h-20f rounded-full' />
          </div>
          <div className='profile-heading-name text-2xl font-bold'>
            {fullName}
          </div>
        </div>

        <div className='details-container p-5 space-y-3'>
          <div className='username-container flex justify-between items-center'>
            <div className='text-lg font-medium'>
              Username :
            </div>
            <div className='text-lg'>
              {userName}
            </div>
          </div>

          <div className='joindate-container flex justify-between items-center'>
            <div className='text-lg font-medium'>
              Joined Date :
            </div>
            <div className='text-lg'>
              {joinedDate}
            </div>
          </div>

          <div className='email-container flex justify-between items-center'>
            <div className='text-lg font-medium'>
              Email :
            </div>
            <div className='text-lg'>
              {isChangingEmail ? (
                <>
                  {/* <input type='text' placeholder='Enter OTP' value={otp} onChange={(e) => setOtp(e.target.value)} className='border p-2 rounded mr-2' /> */}
                  <input type='email' placeholder='Enter new email' value={newEmail} onChange={(e) => setNewEmail(e.target.value)} className='border p-2 rounded mr-2' />
                  <button onClick={handleEmailChange} className='bg-blue-500 text-white px-4 py-2 rounded'>Submit</button>
                  <button onClick={() => setIsChangingEmail(false)} className='bg-red-500 text-white px-4 py-2 rounded'>Cancel</button>
                </>
              ) : (
                <button onClick={() => setIsChangingEmail(true)} className='bg-blue-500 text-white px-4 py-2 rounded'>Change Email</button>
              )}
            </div>
          </div>
        
          <div className='password-container flex justify-between items-center'>
            <div className='text-lg font-medium'>
              Change Password :
            </div>
            <div className='text-lg'>
              {isChangingPassword ? (
                <>
                  {/* <input type='password' placeholder='Enter old password' value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} className='border p-2 rounded mr-2' />
                  <input type='password' placeholder='Enter new password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className='border p-2 rounded mr-2' /> */}
                  <input type='password' placeholder='Enter new password' value={password} onChange={(e) => setPassword(e.target.value)} className='border p-2 rounded mr-2' />
                  <button onClick={handlePasswordChange} className='bg-blue-500 text-white px-4 py-2 rounded'>Submit</button>
                  <button onClick={() => setIsChangingPassword(false)} className='bg-red-500 text-white px-4 py-2 rounded'>Cancel</button>
                </>
              ) : (
                <button onClick={() => setIsChangingPassword(true)} className='bg-blue-500 text-white px-4 py-2 rounded'>Change Password</button>
              )}
            </div>
          </div>
        </div>
        <div className='deleteAccount-button p-5 bg-red-500 rounded-md text-center'>
          <button onClick={deleteUser}>
            Delete Account
          </button>
        </div>
      </div> 
    </section>
  )
}

export default UserDetail;
