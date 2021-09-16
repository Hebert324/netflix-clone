import styled from "styled-components";

export const Header = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    background: transparent;
    transition: all ease .5s;

    .logo img{
        width: 90px;
    }

    .user img {
        width: 40px;
        border-radius: 3px;
    }
`

export const Black = styled.div`
    ${Header}.black {
        background: #111;
    }
`