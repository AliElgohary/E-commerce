import './App.css';
import {Route , BrowserRouter} from 'react-router-dom'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import AddUser from './pages/AddUser';
import AppFunctionComponent from './pages/AppFunctionComponent';
import Home from './pages/Home';
import Navbar from './components/NavBar';
import NotFound from './pages/NotFound';
import UsersList from './pages/UsersList';
import LoginForm from './components/LoginForm';
import Products from './pages/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div  className={ 'text-light bg-dark' } >
      <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
      <Route exact path={'/'}  component={Home}/>
      <Route exact path={'/users'}  component={UsersList}/>
      <Route exact path={'/add'}  component={AddUser}/>
      <Route exact path={'/fun'} component={AppFunctionComponent}/>
      <Route exact path={'/products'} component={Products}/>
      <Route exact path={'/login'} component={LoginForm}/>
      <Route path={'**'} component={NotFound}></Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
