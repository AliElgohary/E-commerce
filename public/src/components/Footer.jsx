import React from 'react';
import { Typography, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

export default function Footer() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/register');
  };

  return (
    <footer style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <div style={{ padding: '20px' }}>
        <Typography variant="body1" align="center" color="textPrimary">
          Register for free
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={handleClick}
          sx={{ marginLeft: '10px' }}
        >
          Sign up!
        </Button>
      </div>
      <div style={{ padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
        <Typography variant="body2" align="center" color="textSecondary">
          © 2024 Copyright:
          <a href="https://www.linkedin.com/in/alielgohary/" style={{ color: 'inherit', marginLeft: '5px' }}>
            AliElgohary
          </a>
        </Typography>
      </div>
    </footer>
  );
}
