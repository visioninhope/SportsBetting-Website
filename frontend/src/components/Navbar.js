// React 
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// MUI
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logout from './Logout';
import { initializeUser } from '../slices/userSlice';
import '../css/Navbar.css';

// Custom styled button for the login
const LoginButton = styled(Button)(({ theme }) => ({
    marginRight: theme.spacing(2),
    backgroundColor: '#007BFF',
    '&:hover': {
      backgroundColor: '#0056b3', // a bit darker on hover
    }
  }));
  
// Custom styled button for the signup/join
const SignupButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#28A745',
    '&:hover': {
    backgroundColor: '#1f7a33', // a bit darker on hover
    }
}));

const LogoutButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#dc2839',
    '&:hover': {
    backgroundColor: '#b02a37', // a bit darker on hover
    }
}));


const Navbar = () => {
    var authLoggedIn = useSelector((state) => state.auth.loggedIn);

    const username = useSelector((state) => state.user.username)

    return (
        <AppBar position="static" >
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon/>
            </IconButton>

            <Link to='/' style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
                <Typography variant="h6">
                Sports Betting
                </Typography>
            </Link>

            {
                    authLoggedIn ?
                    (
                        // When logged in
                        <>
                            <Button color="inherit" component={Link} to='/bets'>Bets</Button>
                            <div style={{ flexGrow: 1 }}></div>
                            <p className='welcome_user'>Welcome: {username}</p>
                            <Logout />
                            <Button color="inherit" component={Link} to='/account'><AccountCircleIcon fontSize="large"></AccountCircleIcon></Button>
                        </>
                    ) : 
                    (
                        // When logged out
                        <>
                            <LoginButton color="inherit" component={Link} to='/login'>Login</LoginButton>
                            <SignupButton color="inherit" component={Link} to='/signup'>Signup</SignupButton>
                        </>
                    )
                }
        </Toolbar>
        </AppBar>
    );
}

export default Navbar;
