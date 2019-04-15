import React, { useContext } from 'react';
import { Typography, Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Divider, Grid, Avatar, List, ListItem } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Wizard2Context from './Context';

const Syslog = () => {

    const context = useContext(Wizard2Context)!

    return <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle2" style={{fontSize: 20, marginTop: 10}}>
                        Using Syslog
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container>
                        <Grid item style={{width: "100%"}}>
                            <Typography>
                                <p>
                                    Almost all firewall brands allow you to export connection data via syslog. If you have one of the firewall brands listed below,
                                    we provide you with ready-made NiFi templates that you can easily deploy to start importing your firewall connection data to 
                                    CyberSift
                                </p>
                                <p>
                                    Firewall not on the list? We've got you covered. We provide you with sample NiFi templates that allow you to define
                                    custom <a href="https://qbox.io/blog/logstash-grok-filter-tutorial-patterns">GROK</a> filters to match your data. 
                                    <br />
                                    If you're still stuck, you can always <a href="mailto:info@cybersift.io?Subject=Consulting Request for onboarding" target="_top">contact us for help!</a>
                                </p>
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
                                        onClick={()=>context.changeViewHandler("paloalto")}
                                    >
                                        Details >>
                                    </Button>
                                </ListItem>
                                <Divider variant="inset" />
                                <ListItem>
                                    <Avatar src="./img/sonicwall_logo.svg" style={{marginRight: 10}}/>
                                    SonicWall Firewalls
                                    <Button 
                                        style={{marginLeft: "auto"}}
                                        variant="text" color="primary" 
                                        onClick={()=>context.changeViewHandler("sonicwall")}
                                    >
                                        Details >>
                                    </Button>
                                </ListItem>
                                <Divider variant="inset" />
                                <ListItem>
                                    <Avatar src="./img/pfsense_logo.png" style={{marginRight: 10}}/>
                                    Pfsense Firewalls
                                    <Button 
                                        style={{marginLeft: "auto"}}
                                        variant="text" color="primary" 
                                        onClick={()=>context.changeViewHandler("pfsense")}
                                    >
                                        Details >>
                                    </Button>
                                </ListItem>
                                <Divider variant="inset" />
                                <ListItem>
                                    <Avatar src="./img/mikrotik_logo.jpg" style={{marginRight: 10}}/>
                                    Microtik Firewalls
                                    <Button 
                                        style={{marginLeft: "auto"}}
                                        variant="text" color="primary" 
                                        onClick={()=>context.changeViewHandler("microtik")}
                                    >
                                        Details >>
                                    </Button>
                                </ListItem>
                                <Divider variant="inset" />
                                <ListItem>
                                    <Avatar src="./img/cisco_logo.png" style={{marginRight: 10}}/>
                                    Cisco Firewalls / Routers
                                    <Button 
                                        style={{marginLeft: "auto"}}
                                        variant="text" color="primary" 
                                        onClick={()=>context.changeViewHandler("cisco")}
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
                                        onClick={()=>context.changeViewHandler("other_syslog")}
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

}

export default Syslog