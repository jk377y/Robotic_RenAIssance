import styled from "styled-components";

export const GradientContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100vh;
    width: 100%;
    background: linear-gradient(100deg, #6a6583, #898989, #807f7f,#6a6583, #585858);
    background-size: 300% 300%;
    animation: color 12s ease-in-out infinite;

    @keyframes color {
    0%{
        background-position: 0% 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0% 50%;
    }
} 
@media (max-width: ${({theme}) => theme.mobile}) {
        height: 100vh;
        width: 100%;
    }
`