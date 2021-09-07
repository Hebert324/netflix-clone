import styled from 'styled-components'

export const MovieRow = styled.div`
    margin-bottom: 30px;

    h2 {
        margin-left: 30px;
    }

    .listArea {
        overflow-x: hidden;
        padding-left: 30px;
    }

    .list {
        width: 99999999px;
    }

    .item{
        display: inline-block;
        width: 150px;
        cursor: pointer;
        margin-right: 50px;

        img {
            width: 135%;
            height: 300px;
            transform: scale(0.9);
            transition: all ease .3s;
        }
        
        img:hover {
            transform: scale(1);
        }
    }

`