import styled from 'styled-components';
import { Div } from 'react-atomize';

export const Row = styled(Div)`
    display:grid;
    grid-template-columns:repeat(${props => props.repeat ? props.repeat : '4'}, ${props => props.fr ? props.fr : '1fr' });
    row-gap:1rem;
    column-gap:1rem;
`

export const Card = styled(Div)`
    background-color:${props => props.bg ? props.bg : 'white'};
    padding:${props => props.p ? props.p : '1rem'};
    display:flex;
    flex-direction:${props => props.flexDir ? props.flexDir : 'column'};
`