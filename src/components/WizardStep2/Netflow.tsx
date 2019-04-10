import React, { useContext } from 'react'
import { Typography,Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Grid } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Wizard2Context from './Context';

const Netflow = () => {

    const context = useContext(Wizard2Context)!

    return <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle2" style={{fontSize: 20, marginTop: 10}}>
                        Using Netflow
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container>
                        <Grid item>
                            <Typography>
                                Most network devices allow you to export connection data in the Netflow / IPFIX format to a "Netflow collector". 
                                The CyberSift server can easily be setup to act as a Netflow collector, and forward the data to the CyberSift ElasticSearch
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button 
                                style={{marginLeft: "auto"}}
                                variant="text" color="primary" 
                                onClick={()=>context.changeViewHandler("netflow")}
                            >
                                Details >>
                            </Button>
                        </Grid>
                    </Grid>                                
                </ExpansionPanelDetails>
            </ExpansionPanel>

}

export default Netflow