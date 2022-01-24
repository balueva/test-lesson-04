import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import { Home, Profile, Chats } from './routes';
//import { Link } from '@mui/material';

function App() {

  return (
    <div className='App'>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/chats'>Chats</Link>
      </nav>
      <Switch>
        <Route exact path='/'><Home></Home></Route>
        <Route exact path='/profile'><Profile></Profile></Route>
        <Route exact path='/chats'><Chats></Chats></Route>
        <Route><h3>Page not found</h3></Route>
      </Switch>
    </div>
  );
}

export default App;

/*
<Switch>
        <Route exact path='/'><Home></Home></Route>
        <Route exact path='/profile'><Profile></Profile></Route>
        <Route exact path='/chats'><Chats></Chats></Route>
        <Route><h3>Page not found</h3></Route>
      </Switch>
 */


/**
 *<div className='App'>
<nav>
  <Link to='/' underline='none'>Home</Link>
  <Link to='/profile' underline='none'>Profile</Link>
  <Link to='/chats' underline='none'>Chats</Link>
</nav>
<Route exact path={'/'} component={Home}></Route>
</div>
 */