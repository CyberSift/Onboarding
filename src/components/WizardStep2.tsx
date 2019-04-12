import React, { useState, Fragment, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import Default from './WizardStep2/Default';
import axios from 'axios';
import { Button, Card, CardContent, CardActions } from '@material-ui/core';
import Wizard2Context from './WizardStep2/Context';

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
              
        default:
            view = <Card style={{margin: 10, background: "white", fontFamily: "'Open Sans', sans-serif"}}>
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
            break;
    }
        

    return <Wizard2Context.Provider value={{
        changeViewHandler: changeViewState
    }}>
        {view}
    </Wizard2Context.Provider>
    
}

export default WizardStep2