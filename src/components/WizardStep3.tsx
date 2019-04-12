import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button, Divider } from "@material-ui/core";
import Markdown from 'markdown-to-jsx';
import Axios from 'axios';


const WizardStep3 = () => {

    const [markdownContent, changeMarkdownContent] = useState("")
    useEffect(()=>{
        Axios.get("https://raw.githubusercontent.com/CyberSift/Onboarding/master/docs/TOC.md")
            .then(resp => changeMarkdownContent(resp.data))
    }, [changeMarkdownContent])

    const view = 
        <Card>
            <CardContent>
                <Typography variant="display1">
                    Add AI smarts to CyberSift
                </Typography>
                
                <Typography variant="subtitle1" style={{fontSize: 20, marginTop: 10}}>
                    Please contact us for more information: <strong>info (at) cybersift.io</strong>
                </Typography>

                <Divider />

                <Typography variant="overline" style={{fontSize: 20, marginTop: 10}}>
                    Additional CyberSift Documentation:
                </Typography>
                <Markdown>
                    {markdownContent}
                </Markdown>

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