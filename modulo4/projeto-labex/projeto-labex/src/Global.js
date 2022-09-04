import { createGlobalStyle } from "styled-components";
import imgBackground from './img/espaço.png';
export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        width:100%;
    }

    body {
        font-family: 'Silkscreen', cursive;
        background: url(${imgBackground});
        color: #ffff;
        button{
            padding: .6em;
            font-family: 'Silkscreen', cursive;
            font-weight: 600;
            font-size: 1em;
            border: none;
            border-radius: 0.5em;
            background-color: rgba(255, 250, 250);
        }
        
    }
`