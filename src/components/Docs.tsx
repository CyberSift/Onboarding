import React, { useEffect, useState, Fragment } from 'react';
import Axios from 'axios';
import Markdown from 'markdown-to-jsx';
import { Paper } from '@material-ui/core';

interface DocsProps {
    doc: string
}

const Docs = (props : DocsProps) => {

    const [content, changeContent] = useState("")

    useEffect(()=>{
        Axios.get(`https://raw.githubusercontent.com/CyberSift/Onboarding/master${props.doc}`)
            .then(resp=>changeContent(resp.data))
    },[props.doc])

    return <Paper style={{padding: 10, margin: 20}}>
        <Markdown>
            {content}
        </Markdown>
    </Paper>

}

export default Docs