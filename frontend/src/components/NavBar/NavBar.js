import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import './NavBar.css'

function NavBar() {
  const loggedIn = useSelector(state => !!state.session.user);
  const dispatch = useDispatch();

  const logoutUser = e => {
    e.preventDefault();
    dispatch(logout());
  }

  const getLinks = () => {
    if (loggedIn) {
      return (
        <div className="links-nav">
          <Link className='signup-link' to={'/games'}>Games</Link>
          <Link className='signup-link' to={'/profile'}>Profile</Link>
          <button onClick={logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="links-auth">
          <Link className='signup-link' to={'/signup'}>Signup</Link>
          <Link className='signup-link' to={'/login'}>Login</Link>
          <Link className='signup-link' to={'/games'}>Games</Link>
        </div>
      );
    }
  }

  return (
    <>
    <header className='main_header_container'>
      <Link to='/' className='logo-title'>KeyWi</Link>
      {getLinks()}
    </header>
    </>
  );
}

export default NavBar;