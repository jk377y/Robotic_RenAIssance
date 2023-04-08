import styled from "styled-components";

export const HomepageSection = styled.div`
    height: 100vh;
    width: 100%;
`
export const HomepageHeading = styled.div`
    font-size: 4rem;
    font-family: 'Orbitron', sans-serif;
    font-weight: 500;
    color: ${({theme}) => theme.colors.mayaBlue};
    display: flex;
    justify-content: center;
    text-align: center;
    

    span {
        color: ${({theme}) => theme.colors.black};
        font-weight: 800;
    }

    @media (max-width: ${({theme}) => theme.mobile}) {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        font-size: 2rem;
    }
`

