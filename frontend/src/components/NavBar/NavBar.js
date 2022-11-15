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
          <Link to={'/'}>Builds</Link>
          <Link to={'/'}>Friends</Link>
          <Link to={'/'}>Profile</Link>
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
      <h1 className='logo-title'>KeyWi</h1>
      {getLinks()}
    </header>
    </>
  );
}

export default NavBar;