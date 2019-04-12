import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CardActions, Button, Divider, ExpansionPanel, ExpansionPanelSummary, Avatar, ExpansionPanelDetails, Grid } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Markdown from 'markdown-to-jsx';
import Axios from 'axios';

interface wizardProps {
    nextStepHandler: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const WizardStep1 = (props : wizardProps) => {

    const [onsite, changeOnsite] = useState("")
    const [azure, changeAzure] = useState("")

    useEffect(()=>{
        Axios.get("https://raw.githubusercontent.com/CyberSift/Onboarding/master/docs/onpremises.md").then(resp => changeOnsite(resp.data))
    },[changeOnsite])

    useEffect(()=>{
        Axios.get("https://raw.githubusercontent.com/CyberSift/Onboarding/master/docs/azure_deployment.md").then(resp => changeAzure(resp.data))
    },[changeAzure])

    const view = 
        <Card>
            <CardContent>
                <Typography variant="display1">
                    Install the CyberSift server
                </Typography>

                <Divider />

                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar src="./img/onsite.svg" />
                        <Typography variant="subtitle1" style={{marginLeft:10, fontSize: 20, marginTop: 10}}>
                            On premises
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container>
                            <Grid item style={{width: "100%"}}>
                                <Typography style={{fontFamily: "'Open Sans', sans-serif"}}>
                                    <Markdown>
                                        {onsite}
                                    </Markdown>
                                </Typography>
                            </Grid>
                        </Grid>                      
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar src="./img/azure_logo.png" />
                        <Typography variant="subtitle1" style={{marginLeft:10, fontSize: 20, marginTop: 10}}>
                            Azure Cloud
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container>
                            <Grid item style={{width: "100%", fontFamily: "'Open Sans', sans-serif"}}>
                                <Markdown>
                                    {azure}
                                </Markdown>
                            </Grid>
                        </Grid>                      
                    </ExpansionPanelDetails>
                </ExpansionPanel>

            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" style={{marginLeft: "auto"}} onClick={props.nextStepHandler}>
                    Next >>
                </Button>
            </CardActions>
        </Card>

    return view
}

export default WizardStep1