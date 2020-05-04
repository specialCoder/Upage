import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './style.less';

const Content = (props)=> {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" className="list-content">
        <Typography component="div" className="list-content-article">
          {props.children}
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default React.memo(Content);