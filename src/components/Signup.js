import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Signup = () => {
  return (
    <div>
        <h1>Signup Page</h1>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button component={Link} to="/">App</Button>
          <Button component={Link} to="/home">Home</Button>
          <Button component={Link} to="/signin">Sign in</Button>
        </ButtonGroup>
    </div>
  )
}

export default Signup;