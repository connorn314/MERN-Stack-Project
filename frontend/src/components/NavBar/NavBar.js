import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { removeAllFollows } from '../../store/follows';
import { removeAllLikes } from '../../store/likes';
import { removeAllBindings } from '../../store/bindings';
import './NavBar.css'

function NavBar() {
  const loggedIn = useSelector(state => !!state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleProfileRedirect = e => {
    dispatch(removeAllBindings());
    history.push('/profile')
  }

  const handleGamesRedirect = e => {
    dispatch(removeAllBindings());
    history.push('/games')
  }

  const logoutUser = e => {
    e.preventDefault();
    dispatch(logout());
    dispatch(removeAllFollows());
    dispatch(removeAllLikes());
    history.push('/');
  }



  const getLinks = () => {
    if (loggedIn) {
      return (
        <div className="links-auth">
          <div className='signup-link' onClick={handleGamesRedirect}>Games</div>
          <div className='signup-link' onClick={handleProfileRedirect}>Profile</div>
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