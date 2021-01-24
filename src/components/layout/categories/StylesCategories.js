import { Div } from 'react-atomize';
import styled from 'styled-components';

export const CategoryCard = styled(Div)`
    padding:1rem;
    border-radius:1rem;
    margin:.5rem;
    cursor: pointer;
    text-align:center;

    img{
        width:10rem;
        height:10rem;
        object-fit:cover;
        margin:1rem 0;
        transition:.3s;
    }

    p{
        color:white;
        font-weight:700;
    }

    :hover{
        transform:scale(1.05);
        
        img{
            transform:scale(1.3);
        }
    }
`