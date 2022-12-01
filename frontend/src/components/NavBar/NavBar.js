import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import './NavBar.css'

function NavBar() {
  const loggedIn = useSelector(state => !!state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutUser = e => {
    e.preventDefault();
    dispatch(logout());
  }

 

  const getLinks = () => {
    if (loggedIn) {
      return (
        <div className="links-auth">
          <Link className='signup-link' to={'/games'}>Games</Link>
          <Link className='signup-link' to={'/profile'}>Profile</Link>
          <div onClick={logoutUser} className='signup-link' >Logout</div>
        </div>
      );
    } else {
      return (
        <div className="links-auth">
          <Link className='signup-link' to={'/games'}>Games</Link>
          <Link className='signup-link' to={'/signup'}>Signup</Link>
          <Link className='signup-link' to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  return (
    <>
    <header className='main_header_container'>
      <div id='left-nav-container' onClick={() => history.push('/')}>
        <Link to='/' className='logo-title'>KeyWi</Link>
      </div>
      {getLinks()}
    </header>
    </>
  );
}

export default NavBar;