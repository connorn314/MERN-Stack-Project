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
import GameShowPage from './components/GameShowPage/GameShowPage';
import { Route } from 'react-router-dom';

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
        <Route exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginForm} />
        <AuthRoute exact path="/signup" component={SignupForm} />
        <Route exact path="/games" component={GameIndex} />
        <Route exact path="/games/:gameId" component={GameShowPage}/>

        <Route path="/test" component={XboxController}/>
        <ProtectedRoute path="/profile" component={ProfilePage} />
        <ProtectedRoute path="/profile/:game_id" component={ProfilePage} />

      </Switch>
    </>
  );
}

export default App;