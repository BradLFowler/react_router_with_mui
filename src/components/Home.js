import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Home = () => {
  return (
    <div>
        <h1>Home Page</h1>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button component={Link} to="/">App</Button>
          <Button component={Link} to="/signup">Sign up</Button>
          <Button component={Link} to="/signin">Sign in</Button>
        </ButtonGroup>
    </div>
  )
}

export default Home;