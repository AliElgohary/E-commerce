import React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { logout } from '../store/action/authActions'; 

function Navbar() {
  const isAuthenticated = useSelector(state => state.auth.token !== null);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch(logout());
    history.push('/');
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/products">
            Products
          </Button>
          <Button color="inherit" component={RouterLink} to="/cart">
            Cart
          </Button>
          <Button color="inherit" component={RouterLink} to="/orders">
            Orders
          </Button>
        </div>
        <div>
          {isAuthenticated ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" component={RouterLink} to="/login">
              Login
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
