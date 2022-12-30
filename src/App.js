import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Hamburger from "./components/Hamburger";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SignIn from "./pages/SignIn";

const Container = styled.div`
display : flex;
background-color : ${({ theme }) => theme.bgLighter};
 `;

const Hamburgercss = styled.div`
  
    height : 100%; 
    background-color : ${({ theme }) => theme.bg};
    font-size: 14px;
    color : ${({ theme }) => theme.text};
    top: 12px;
    left : 5px;
    display:flex;
    align-items :center;
    justify-content : center;
    flex-direction  :column;
    position : sticky;
`;


const Main = styled.div`
  flex:7 ;
  background-color : ${({ theme }) => theme.bg};
 `;

const Wrapper = styled.div`
    padding :30px 30px;
    background-color : ${({ theme }) => theme.bgLighter};
`;

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const [hamburger, sethamburger] = useState(null);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Hamburgercss onClick={() => sethamburger(!hamburger)} style={{ cursor: "pointer" }}>

            <MenuIcon />
          </Hamburgercss>

          {
            hamburger ? '' :
              <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          }
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn/>} />

                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
