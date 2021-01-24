import { Text as TextAtomize } from 'react-atomize';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled(TextAtomize)`
    font-weight:${props => props.textWeight ? props.textWeight : '700'};
    font-size:${props => props.textSize ? props.textSize : props.theme.textSize.size.F80};
`

export const Subtitle = styled(TextAtomize)`
    text-align:${props => props.textAlign ? props.textAlign : 'left'};
    font-weight:${props => props.textWeight ? props.textWeight : '700'};
    font-size:${props => props.textSize ? props.textSize : props.theme.textSize.size.F48};
`

export const Heading = styled(TextAtomize)`
    text-align:${props => props.textAlign ? props.textAlign : 'left'};
    font-weight:${props => props.textWeight ? props.textWeight : '700'};
    font-size:${props => props.textSize ? props.textSize : props.theme.textSize.size.F24};
`

export const Text = styled(TextAtomize)`
`

export const Anchor = styled.a`
    color:${props => props.textColor ? props.textColor : props.theme.colors.info};
`

export const Link = styled(NavLink)`
    padding:.5rem;
    margin:.5rem;
    position:relative;
    text-decoration:none;

    ::after{
        position:absolute;
        bottom:0;
        left:0;
        content:'';
        width:0;
        height:1px;
        transition:.3s;
        background-color: ${props => props.textcolor ? props.textcolor : props.theme.colors.black80};
    }

    :hover::after{
        width:100%;
    }

    &.active-nav-link{
        color: ${props => props.textcolor ? props.textcolor : props.theme.colors.primary100};
        font-weight:600;
        
        ::after{
            width:0;
        }
    }
`

