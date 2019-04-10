import React, { useState, Fragment, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import Default from './WizardStep2/Default';
import axios from 'axios';
import { Button, Card, CardContent, CardActions } from '@material-ui/core';

interface Props {
    nextStepHandler: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const WizardStep2 = (props : Props) => {

    const [viewState, changeViewState] = useState("default")
    const [markdownContent, changeMarkdownContent] = useState("")

    useEffect(()=>{

        if (viewState != "default"){
            axios.get(`https://raw.githubusercontent.com/CyberSift/Onboarding/master/docs/${viewState}.md`).then(resp => {
                changeMarkdownContent(resp.data)
            })
        }
        
    }, [viewState])

    let view = <Fragment />

    switch (viewState) {
        case "default":
            view = <Default nextStepHandler={props.nextStepHandler} changeViewHandler={(newView: string)=>changeViewState(newView)}/>
            break;
    
        case "paloalto":
        case "other_syslog":
        case "fortinet":
            view = <Card style={{margin: 10}}>
                <CardContent>
                    <Markdown>{markdownContent}</Markdown>
                </CardContent>
                <CardActions>
                <Button variant="contained" onClick={()=>changeViewState('default')} style={{marginLeft: "auto"}}>
                        {'<< Back'}
                </Button>
                    <Button variant="contained" color="primary" onClick={props.nextStepHandler}>
                        Next >>
                    </Button>
                </CardActions>                
            </Card>
        default:
            break;
    }
        

    return view
}

export default WizardStep2