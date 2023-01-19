import { useContext, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Search from "./pages/Search";
import Hamburger from "./components/Hamburger";
import MenuIcon from '@mui/icons-material/Menu';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import SignIn from "./pages/SignIn";
import { DarkModeContext } from "./content/DarkModeContext";

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

const Wrapper = styled.span`
     
    background-color : ${({ theme }) => theme.bgLighter}; 
    
    flex : 1;
`;

const SubWrapper = styled.div`
     
    background-color : ${({ theme }) => theme.bgLighter}; 
    padding : 30px;
    flex : 6;
    

`;

const Div = styled.div`

display : flex;
flex : 7

`;
function App() {

  const [darkMode, setDarkMode] = useState(false);

  const { toggle, hamburger } = useContext(DarkModeContext)


  const Layout = () => {
    return (
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
          <Main>
            <Navbar />
            <Div>
              {hamburger ? <>
                <Wrapper style={{ display: "none" }}><Menu darkMode={darkMode} setDarkMode={setDarkMode} /></Wrapper>
                <SubWrapper>
                  <Outlet />
                </SubWrapper>
              </> : <>
                <Wrapper><Menu darkMode={darkMode} setDarkMode={setDarkMode} /></Wrapper>
                <SubWrapper>
                  <Outlet />
                </SubWrapper>
              </>
              }

            </Div>
          </Main>
        </Container>
      </ThemeProvider>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <Layout />,
      children: [   // children for deciding paths using outlets
        {
          path: "/",
          index: true,
          element: <Home type="random" />
        },
        {
          path: "/trends",
          element: <Home type="trend" />
        },
        {
          path: "/subcriptions",
          element: <Home type="sub" />
        }, {

          path: "/search",
          element: <Search />

        },
        {
          path: "/video/:id",
          element: <Video />
        },
        {
          path: "/signin",
          element: <SignIn />
        }

      ]
    },

  ]);

  return (
    <RouterProvider router={router} />
    // <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    //   <Container>
    //     <BrowserRouter>
    //       <Hamburgercss onClick={() => sethamburger(!hamburger)} style={{ cursor: "pointer" }}>

    //         <MenuIcon />
    //       </Hamburgercss>

    //       {
    //         hamburger ? '' :
    //           <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
    //       }
    //       <Main>
    //         <Navbar />
    //         <Wrapper>
    //           <Routes>
    //             <Route index path="/" element={<Home />} />
    //             <Route path="/signin" element={<SignIn />} />

    //             <Route path="video">
    //               <Route path=":id" element={<Video />} />
    //             </Route>
    //           </Routes>
    //         </Wrapper>
    //       </Main>
    //     </BrowserRouter>
    //   </Container>
    // </ThemeProvider>
  );
}

export default App;
