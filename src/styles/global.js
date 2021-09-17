import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #111;
        color: #FFF;
        font-family: 'Roboto', sans-serif;
    }

    .lists {
        margin-top: -150px;
    }

    footer {
        margin: 50px 0;
        text-align: center;
        font-weight: bold;

        a {
            text-decoration: none;
            color: #fff;
            transition: color ease .4s;
        }

        a:hover {
            color: #E50914;
        }
    }

    .loading{
        position: fixed;
        z-index: 99;
        background-color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        justify-content: center;
    }

    
`