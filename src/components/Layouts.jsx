import styled from 'styled-components'

const Layout = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: 2fr 12fr;
  grid-template-rows: 1fr 12fr;
  grid-template-areas: 
    "Header Header"
    "SideBar Content"
    ;
`

export const Header = styled.div`
  grid-area: Header;
  border: 1px solid #6B5B95;
  height: 50px;
`
  
export const SideBar = styled.div`
  grid-area: SideBar;
  border: 1px solid #6B5B95;
`

export const Content = styled.div`
  grid-area: Content;
  border: 1px solid #6B5B95;
`

export default Layout