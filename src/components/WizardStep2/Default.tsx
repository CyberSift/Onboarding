import React, { useContext } from 'react'
import { Card, CardContent, Typography, CardActions, Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Divider, Grid, Avatar } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WindowsAgent from './WindowsAgent';
import Syslog from './Syslog';
import Netflow from './Netflow';
import Wizard2Context from './Context';


interface Props {
    nextStepHandler: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
    changeViewHandler: (newView: string) => void
}

const Default = (props: Props) => {

    const context = useContext(Wizard2Context)

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
                                        One of CyberSift's primary functions is to act as network connections auditing database. 
                                        CyberSift Cerebrum® will add security relevant context information, such as if a connection was going to a known
                                        malware host or Tor exit node. CyberSift Rangefinder® can then use machine learning
                                        algorithms to help you pinpoint which of these connections are anomalous and perform more effective intrucion detection
                                        and threat hunting
                                        <br />
                                        <br />
                                        Several methods exist to ship network data to CyberSift:
                                        <br />
                                        <br />
                                    </Typography>
                                </Grid>
                                <Grid item style={{width: "100%"}}>

                                    {Syslog()}

                                    {WindowsAgent()}

                                    {Netflow()}

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
                                        CyberSift can act as a repository for Windows Event Logs, including <a href="https://www.rsaconference.com/writable/presentations/file_upload/hta-t09-how-to-go-from-responding-to-hunting-with-sysinternals-sysmon.pdf">Sysmon</a> output
                                        CyberSift Rangefinder® includes several machine learning algorithms to help you identify anomalous sequences of events within your data.
                                        <br />
                                        <br />
                                        Read on for technical details on how to collect Windows Event Logs
                                    </Typography>
                                    <br />
                                    <Button 
                                        style={{marginLeft: "auto"}}
                                        variant="text" color="primary" 
                                        onClick={()=>context.changeViewHandler("windows_events")}
                                    >
                                        Details >>
                                    </Button>
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
                                        Check back for more information!
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