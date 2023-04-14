import styled from "styled-components";

export const NavBarWrapper = styled.nav`
  height: 80px;
  width: 100%;
  padding: 0 20px;
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
