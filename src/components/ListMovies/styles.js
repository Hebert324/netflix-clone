import styled from 'styled-components'

export const MovieRow = styled.div`
    margin-bottom: 30px;

    h2 {
        margin-left: 30px;
        margin-bottom: 15px;
    }

    .listArea {
        overflow-x: hidden;
        padding-left: 30px;
    }

    .item{
        display: inline-block;
        width: 150px;
        cursor: pointer;
        margin-right: 70px;
        margin-left: 10px;

        img {
            width: 135%;
            height: 300px;
            margin-right: 10px;
            transition: all ease .3s;
        }
    }

    .left-arrow, 
    .right-arrow {
        position: absolute;
        width: 40px;
        height: 300px;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        cursor: pointer;
        opacity: 0;
        transition: all ease .4s;
    }

    .left-arrow {
        left: 0;
    }

    .right-arrow {
        right: 0;
    }

    &:hover .right-arrow{
        opacity: 1;
    }
`