import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css';
import { logout } from '../../store/session';

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
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  return (
    <>
      <h1>KeyWi</h1>
      {getLinks()}
    </>
  );
}

export default NavBar;