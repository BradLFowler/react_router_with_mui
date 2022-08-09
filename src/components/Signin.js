import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Signin = () => {
  return (
    <div>
        <h1>Signin Page</h1>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button component={Link} to="/">App</Button>
          <Button component={Link} to="/home">Home</Button>
          <Button component={Link} to="/signup">Sign up</Button>
        </ButtonGroup>
    </div>

  )
}

export default Signin;