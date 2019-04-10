import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Divider, ExpansionPanel, ExpansionPanelSummary, Avatar, ExpansionPanelDetails, Grid } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface wizardProps {
    nextStepHandler: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const WizardStep1 = (props : wizardProps) => {

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
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
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
                            <Grid item style={{width: "100%"}}>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
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