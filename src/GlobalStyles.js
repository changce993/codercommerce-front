import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    html {
        font-size: 16px;
        box-sizing:border-box;
    }

    *, *::before, *::after {
        padding:0;
        margin:0;
        box-sizing:inherit;
        font-family: 'Montserrat', sans-serif;
        color:${props => props.theme.colors.black90};
    }

    body {
        font-size:1rem;
        line-height:1.5;
    }

    .container{
        max-width:1440px;
        width:90%;
        margin:0 auto;
    }

    img {
        max-width:100%;
    }

    .textGradient{
        color:red;

        @media(min-width: 768px){
            background: -webkit-linear-gradient(-120deg, #EFA3B6 , #AEA1F2, #518CFF);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`;
