import { Div } from 'react-atomize';
import styled from 'styled-components';

export const Button = styled.button`
    outline:none;
    border:none;
    background-color: ${props => props.bg ? props.bg : props.theme.colors.primary100};
    color: ${props => props.textColor ? props.textColor : 'white'};
    box-shadow:${props => props.shadow ? props.shadow : 'transparent'};
    font-weight:600;
    width:${props => props.w ? props.w : '15rem'};
    max-width:100%;
    margin:${props => props.m ? props.m : '0'};
    padding:.75rem 1rem;
    border-radius:1rem;
    cursor:pointer;
    transition:.3s;

    :hover{
        background-color:${props => props.hoverBg ? props.hoverBg : props.theme.colors.primaryDark};
        box-shadow:${props => props.hoverShadow ? props.hoverShadow : '4px 4px 16px ' + props.theme.colors.primaryDark};
    }
`

export const Form = styled.form`
    max-width:100%;
    padding:${props => props.p ? props.p : '2rem'};
`

export const Input = styled(Div)`
    width: ${props => props.w ? props.w : '20rem'};
    max-width:100%;
    display:flex;
    align-items:center;
    padding-right:.5rem;
    background-color: ${props => props.bg ? props.bg : 'transparent'};
    border:1px solid ${props => props.borderColor ? props.borderColor : props.theme.colors.black10};
    border-radius:${props => props.rounded ? props.rounded : '.75rem'};

    input{
        background-color: transparent;
        width:100%;
        outline:none;
        border:none;
        padding:.75rem .5rem .75rem .75rem;
    }
`

export const Label = styled.label`
    font-size:${props => props.theme.textSize.size.F12};
    font-weight:500;
    color:${props => props.textColor ? props.textColor : 'black' };
    padding:${props => props.p ? props.p : '.25rem' };
`