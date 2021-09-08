import styled from "styled-components";

export const Feature = styled.div`
    height: 100vh;

    .vertical {
        width: inherit;
        height: inherit;
        background: linear-gradient(to top, #111 10%, transparent 90%);
    }

    .horizontal {
        width: inherit;
        height: inherit;
        background: linear-gradient(to right, #111 30%, transparent 70%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 30px;
        padding-bottom: 100px;
    }

    .name {
        font-size: 60px;
        font-weight: bold;
    }

    .infos {
        font-size: 18px;
        font-weight: bold;
        margin-top: 15px;

        .points {
            color: #46d369;
        }

        .points, .year, .seasons {
        display: inline-block;
        margin-right: 15px;
        }   
    }

    .description {
        margin-top: 15px;
        font-size: 20px;
        color: #999;
        max-width: 40%;
    }

    .buttons {
        margin-top: 15px;
        font-size: 20px;
        font-weight: bold;

        .assistir, .minhaLista {
            display: inline-block;
            padding: 12px 25px;
            margin-right: 10px;
            text-decoration: none;
            border-radius: 5px;
            opacity: 1;
            transition: .2s;
        }

        .assistir:hover, .minhaLista:hover {
            opacity: .7;
        }

        .assistir {
            color: #000;
            background-color: #fff;
        }

        .minhaLista {
            color: #FFF;
            background-color: #333;
        }
    }

    .genres {
        margin-top: 15px;
        font-size: 18px;
        color: #999;
        
        span {
            color: #fff;
        }
    }
`    