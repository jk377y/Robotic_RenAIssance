import styled from "styled-components";

export const NavBarWrapper = styled.nav`
  height: 80px;
  width: 100%;
  padding: 0 20px;
  /* background-color: rgba(0, 0, 0, 0.5); */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: sticky;
  /* z-index: 98; */
  top: 0;
  transition: all 1s ease-in-out;
`;
export const NavItems = styled.div`
  display: flex;
  flex-direction: row;

  a {
    font-size: 2.5rem;
    color: ${({theme}) => theme.colors.black};

    &:hover {
      /* transform: rotate(180deg); */
      animation: spin 1s infinite linear;

      @keyframes spin {
        from {
          transform: scale(1) rotate(0deg);
        }
        to {
          transform: scale(1) rotate(180deg);
        }
      }
    }
  }
`;
