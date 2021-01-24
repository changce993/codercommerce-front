import styled from 'styled-components';
import { Div } from 'react-atomize';
import { Text as TextUI } from '../Text';
import { Card as CardUI } from '../Cards';
import ImageUI from '../Image';

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    padding:1rem;
`

export const Text = styled(TextUI)`
    font-weight:700;
`

export const Image = styled(ImageUI)`
    width:100%;
    height:10rem;
    transition:1s;
`

export const ImageContainer = styled(Div)`
    height:10rem;
    overflow:hidden;
`

export const Card = styled(CardUI)`
    overflow:hidden;
    border-radius:1rem;
    padding:0;
    cursor:pointer;
    margin:.5rem .5rem 2rem;

    :hover{
        ${Image}{
            transform:scale(1.1);
        }
    }
`