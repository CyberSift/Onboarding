import React from 'react'
import { Card, CardContent, Typography, CardActions, Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Divider, Grid, Avatar, List, ListItem } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


interface Props {
    nextStepHandler: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
    changeViewHandler: (newView: string) => void
}

const Default = (props: Props) => {

    return <Card>
                <CardContent>
                    <Typography variant="display1">
                        Ship data to CyberSift
                    </Typography>
                    <Divider />
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Avatar src="./img/network.svg" />
                            <Typography variant="subtitle1" style={{marginLeft:10, fontSize: 20, marginTop: 10}}>
                                Monitor Network Traffic
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
                                <Grid item style={{width: "100%"}}>

                                    <ExpansionPanel>
                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography variant="subtitle2" style={{fontSize: 20, marginTop: 10}}>
                                                Using Syslog
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
                                                <Grid item style={{width: "100%"}}>
                                                    <List>
                                                        <ListItem>
                                                            <Avatar src="./img/paloalto_logo.jpg" style={{marginRight: 10}}/>
                                                            Palo Alto Firewalls
                                                            <Button 
                                                                style={{marginLeft: "auto"}}
                                                                variant="text" color="primary" 
                                                                onClick={()=>props.changeViewHandler("paloalto")}
                                                            >
                                                                Details >>
                                                            </Button>
                                                        </ListItem>
                                                        <Divider variant="inset" />
                                                        <ListItem>
                                                            <Avatar src="./img/fortinet_logo.png" style={{marginRight: 10}}/>
                                                            Fortinet Firewalls
                                                            <Button 
                                                                style={{marginLeft: "auto"}}
                                                                variant="text" color="primary" 
                                                                onClick={()=>props.changeViewHandler("fortinet")}
                                                            >
                                                                Details >>
                                                            </Button>
                                                        </ListItem>
                                                        <Divider variant="inset" />
                                                        <ListItem>
                                                            <Avatar src="./img/other.svg" style={{marginRight: 10}}/>
                                                            Other...
                                                            <Button 
                                                                style={{marginLeft: "auto"}}
                                                                variant="text" color="primary" 
                                                                onClick={()=>props.changeViewHandler("other_syslog")}
                                                            >
                                                                Details >>
                                                            </Button>
                                                        </ListItem>
                                                        <Divider variant="inset" />
                                                    </List>
                                                </Grid>
                                            </Grid>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>

                                    <ExpansionPanel>
                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography variant="subtitle2" style={{fontSize: 20, marginTop: 10}}>
                                                Using Netflow
                                            </Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.
                                        </Typography>
                                        <Button 
                                            style={{marginLeft: "auto"}}
                                            variant="text" color="primary" 
                                            onClick={()=>props.changeViewHandler("other_syslog")}
                                        >
                                            Details >>
                                        </Button>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>

                                </Grid>
                            </Grid>                      
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Avatar src="./img/windows.svg" />
                            <Typography variant="subtitle1" style={{marginLeft:10, fontSize: 20, marginTop: 10}}>
                                Monitor Windows Events
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
                            <Avatar src="./img/mysql.svg" />
                            <Typography variant="subtitle1" style={{marginLeft:10, fontSize: 20, marginTop: 10}}>
                                Monitor MySQL (coming soon...)
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

}

export default Default