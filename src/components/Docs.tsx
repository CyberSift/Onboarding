import React, { useEffect, useState, Fragment } from 'react';
import Axios from 'axios';
import Markdown from 'markdown-to-jsx';
import { Paper } from '@material-ui/core';

interface DocsProps {
    doc: string
}

const Docs = (props : DocsProps) => {

    const [content, changeContent] = useState("")
    const docLoadedEvent = new Event('docLoaded');

    useEffect(()=>{
        Axios.get(`https://raw.githubusercontent.com/CyberSift/Onboarding/master${props.doc}`)
            .then(resp=>{
                changeContent(resp.data);
                window.dispatchEvent(docLoadedEvent);
            })
    },[props.doc])

    return <Paper style={{padding: 10, margin: 20, fontFamily: "'Open Sans', sans-serif"}} >
        <Markdown>
            {content}
        </Markdown>
    </Paper>

}

export default Docs