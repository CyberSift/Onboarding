import React, { Component } from 'react';
import {Grid, Fab, Avatar, Typography} from '@material-ui/core';
import './App.css';
import Wizard from './components/Wizard';

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

          <Grid item xs={8} style={{background: 'white'}}>

            <Wizard />

          </Grid>
        </Grid>
        
        <div>
          <Fab style={{
            position: 'absolute',
            top: "3vh",
            left: "2vw"
          }}>
            <Avatar src="./img/logo.png" style={{width:60, height: 60}}/>
          </Fab>
        </div>
        
      </div>
    );
  }
}

export default App;
