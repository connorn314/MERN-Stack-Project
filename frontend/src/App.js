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
import XboxControllerTest from './components/XboxControllerTesting';
import Footer from './components/Footer';
import UserShow from './components/UserShow';

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
        <Route exact path="/xboxTest" component={XboxControllerTest} />
        <AuthRoute exact path="/login" component={LoginForm} />
        <AuthRoute exact path="/signup" component={SignupForm} />
        <Route exact path="/games" component={GameIndex} />
        <Route exact path="/games/:gameId" component={GameShowPage}/>
        <ProtectedRoute path="/profile" component={ProfilePage} />
        <ProtectedRoute path="/profile/:game_id" component={ProfilePage} />
        <Route exact path="/users/:userId" component={UserShow} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;