import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import errorPage from '../images/243513-P3UBDT-353.jpg'

function Error404() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000); // Redirect after 3 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigate]);

  return(
    <section className='error-404-page w-screen h-screen'>
      <img className='' src={errorPage} alt='error-page' />
    </section>
  );
}

export default Error404;
