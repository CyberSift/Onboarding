import { Typography, Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Grid } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useContext } from "react";
import Wizard2Context from "./Context";

const WindowsAgent = () => {

    const context = useContext(Wizard2Context)!

    return <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle2" style={{fontSize: 20, marginTop: 10}}>
                        Using a Windows Agent (QuickStart)
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container>

                        <Grid item>
                            <Typography>
                                <p>
                                    If syslog and netflow aren't a good option for you, or you'd simply like to get some network connection data into CyberSift as quickly as possible,
                                    we provide a lightweight Windows agent that you can download directly onto your Windows servers and PCs to start sending data to CyberSift.
                                </p>
                                <p>
                                    Read on for technical information on how to download and install the CyberSift Windows Agent
                                </p>
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Button 
                                style={{marginLeft: "auto"}}
                                variant="text" color="primary" 
                                onClick={()=> context.changeViewHandler("windows_agent")}
                            >
                                Details >>
                            </Button>
                        </Grid>

                    </Grid>
                    
                </ExpansionPanelDetails>
            </ExpansionPanel>

}

export default WindowsAgent;