import React, { Component } from 'react';
import {Grid, Fab, Avatar, Typography} from '@material-ui/core';
import './App.css';
import Wizard from './components/Wizard';
import Docs from './components/Docs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container className="cs-container" justify="center" alignItems="center">
          <Grid item xs={8} style={{ marginTop: "15vh", marginBottom: 5}}>
            <Typography style={{color: "white", fontFamily:"Courier New"}} variant="display1">
                CyberSift Onboarding
              </Typography>
            </Grid>

          <Grid item xs={9} style={{background: 'white'}}>

            {window.location.pathname.startsWith("/docs/") ? <Docs doc={window.location.pathname} /> : <Wizard />}
            

          </Grid>
        </Grid>
        
        <div>
          <Fab style={{
            position: 'absolute',
            top: "3vh",
            left: "2vw"
          }}>
            <Avatar src="/img/logo.png" style={{width:60, height: 60}}/>
          </Fab>
        </div>
        
      </div>
    );
  }
}

export default App;
