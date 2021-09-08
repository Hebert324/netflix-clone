import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

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
`