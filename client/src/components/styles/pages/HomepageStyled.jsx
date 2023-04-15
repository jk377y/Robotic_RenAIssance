import styled from "styled-components";

export const HomepageSection = styled.div`
    /* height: 100vh; */
    width: 100%;
    padding-bottom: 2.5rem;
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
        font-size: 1.7rem;
    }
`

export const HeadingContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
    
    img {
        width: 40vw;
        height: 70vh;
        border-radius: 30px;
        box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.75);

        @media (max-width: ${({theme}) => theme.mobile}) {
            width: 70vw;
            height: 50vh;
            margin-bottom: 2rem;
        }
    }
    p {
        width: 40%;
        font-size: 1.4rem;
        font-family: 'Roboto', sans-serif;
        text-align: justify;
        margin: auto 0;

        @media (max-width: ${({theme}) => theme.mobile}) {
            font-size: 1rem;
            width: fit-content;
            margin-left: 1.5rem;
            margin-right: 1.5rem;
        }
    }

    @media (max-width: ${({theme}) => theme.mobile}) {
        display: flex;
        /* flex-wrap: wrap; */
        flex-direction: column;
        align-items: center;
        
    }
`

