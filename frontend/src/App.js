import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import NavBar from './components/NavBar/NavBar';
import ProfilePage from './components/ProfilePage';
import MainPage from './components/MainPage/MainPage';
import LoginForm from './components/SessionForms/LoginForm';
import SignupForm from './components/SessionForms/SignupForm';
import GameIndex from './components/GamesIndex/GamesIndex';
import Keyboard from './components/Keyboard'
import { getCurrentUser } from './store/session';
import XboxController from './components/XboxController';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  return loaded && (
    <>
      <NavBar />
      <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginForm} />
        <AuthRoute exact path="/signup" component={SignupForm} />
        <AuthRoute exact path="/games" component={GameIndex} />
        <AuthRoute path="/profile" component={ProfilePage} />
        <AuthRoute path="/test" component={XboxController}/>
      </Switch>
    </>
  );
}

export default App;