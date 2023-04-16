import styled from "styled-components";

export const HomepageSection = styled.div`
  width: 100%;
  padding-bottom: 2.5rem;
`;
export const HomepageHeading = styled.div`
  font-size: 4rem;
  font-family: "Orbitron", sans-serif;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.mayaBlue};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 1rem;

  span {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 800;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 1.7rem;
  }

  @media (min-width: ${({ theme }) => theme.mobileTabletMin}) and (max-width: ${({ theme }) => theme.mobileTablet}) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 2.8rem;
  }

  @media (min-width: ${({ theme }) => theme.mobileSmall}) {
    font-size: 3.4rem;
  }
`;

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

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 72vw;
      height: 36vh;
      margin-bottom: 2rem;
    }

    @media (min-width: ${({ theme }) => theme.mobileTabletMin}) and (max-width: ${({ theme }) => theme.mobileTablet}) {
      width: 72vw;
      height: 60vh;
      margin-bottom: 2rem;
    }

    @media (min-width: ${({ theme }) => theme.mobileSmall}) {
      width: 43vw;
      height: 60vh;
    }
  }
  p {
    width: 40%;
    font-size: 1.4rem;
    font-family: "Roboto", sans-serif;
    text-align: justify;
    margin: auto 0;
    color: ${({ theme }) => theme.colors.black};

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1rem;
      width: 85%;
    }

    @media (min-width: ${({ theme }) => theme.mobileTabletMin}) and (max-width: ${({ theme }) => theme.mobileTablet}) {
      font-size: 1.6rem;
      width: 85%;
    }

    @media (max-width: ${({ theme }) => theme.mobileSmall}) {
      font-size: 1rem;
    }
    span {
      color: #C0C0C0;
      text-decoration: none;
      display: inline-block;
      position: relative;
      -webkit-mask-image: linear-gradient(
        -75deg,
        rgba(0, 0, 0, 0.6) 30%,
        #000 50%,
        rgba(0, 0, 0, 0.6) 70%
      );
      mask-image: linear-gradient(
        -75deg,
        rgba(0, 0, 0, 0.6) 30%,
        #000 50%,
        rgba(0, 0, 0, 0.6) 70%
      );
      
      -webkit-mask-size: 200%;
      mask-size: 200%;
      animation: shine 2s linear infinite;

      @keyframes shine {
        from {
          -webkit-mask-position: 150%;
        }
        to {
          -webkit-mask-position: -50%;
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.mobileTabletMin}) and (max-width: ${({ theme }) => theme.mobileTablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
