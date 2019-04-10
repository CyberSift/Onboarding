import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from "@material-ui/core";


const WizardStep3 = () => {

    const view = 
        <Card>
            <CardContent>
                <Typography variant="display1">
                    Add AI smarts to CyberSift
                </Typography>
                
                <Typography variant="subtitle1" style={{fontSize: 20, marginTop: 10}}>
                    TODO
                </Typography>

            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" style={{marginLeft: "auto"}}>
                    All Done!
                </Button>
            </CardActions>
        </Card>

    return view
}

export default WizardStep3