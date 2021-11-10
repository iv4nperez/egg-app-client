import styled from "styled-components";

export const StyledNavbar = styled.header`
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  margin: 0 auto;
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
`


export const StyledNav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 620px) {
    grid-auto-flow: row;
    position: fixed;
    top: 74px;
    right: 0;
    /* width: 100%;
    height: 100vh; */
    background: white;
    padding: 1.5rem;
    grid-template-rows: repeat(auto-fill, minmax(3.5rem, 1fr));
    font-size: 1.5rem;
    justify-items: center;
    & > button {
      font-size: 1.5rem;
    }
  }
`


export const StyledLink = styled.a`
    display: initial;
    width: 100%;
    text-align: center;
    padding: 0.75rem 2rem;
    cursor: pointer;
  
    &:hover {
        color: #d3d3d3;
    }
`

export const ItemOptionTheme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: gray;
  justify-items: center;
  height: 100%;
  cursor: pointer;
  svg {
    margin-left: 1rem;
  }
`