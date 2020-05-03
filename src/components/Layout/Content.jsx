import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Content = (props)=> {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography component="div" style={{ backgroundColor: '#fff', height: '100vh' }}>
          {props.children}
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default React.memo(Content);