import styled from "styled-components";

export const NavBarWrapper = styled.nav`
  background-color: ${({theme}) => theme.colors.darkerGrey};
  box-shadow: 3px 1px 3px 3px black;
  height: 100px;
  width: 100%;
  padding: 10px 10px 5px 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  transition: all 1s ease-in-out;
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  

  &:hover {
    animation-play-state: running;
  }

  a {
    font-size: 2.5rem;
    color: ${({theme}) => theme.colors.black};
     

    svg:hover {
      animation: spin 1s infinite linear;
      filter: invert(0.5) sepia(3) hue-rotate(180deg);

      @keyframes spin {
        from {
          transform: scale(1) rotate(0deg);
        }
        to {
          transform: scale(1) rotate(300deg);
        }
      }
    }
  }
`;
