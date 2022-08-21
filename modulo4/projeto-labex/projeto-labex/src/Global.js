import { createGlobalStyle } from "styled-components";
import imgBackground from './img/espaço.png';
export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        width:100%;
    }

    body {
        font-family: 'Ubuntu', sans-serif;
        background: url(${imgBackground});
        color: #ffff;
        button{
            padding: .6em;
            font-family: 'Ubuntu', sans-serif;
            font-weight: 600;
            font-size: 1em;
            border: none;
            border-radius: 0.5em;
            background-color: #FFFAFA;
        }
        
    }
`