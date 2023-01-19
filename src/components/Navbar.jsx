import React, { useContext, useState } from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';


import youtube from "../img/youtube-logo-png-2067.png";
import { DarkModeContext } from "../content/DarkModeContext";
import { useSelector } from "react-redux";


const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter}  ;
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;  
`;

const Search = styled.div`
    width: 40%; 
    left: 0px;
    right: 0px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
   border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500; 
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
 
const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;

const Hamburgercss = styled.div`
  
    height : 100%; 
    background-color : ${({ theme }) => theme.bgLighter};
    font-size: 14px;
    color : ${({ theme }) => theme.text};
    top: 12px;
    left : 0px;
    display:flex;
    align-items :center;
    justify-content : center;
    flex-direction  :column; 

    
`;


const Logo = styled.div`
    display:flex; 
    align-items: center;
    justfity-content  :center;
    gap:10px;
    margin-left :25px;
    font-weight : bold; 
    color : ${({ theme }) => theme.text};
       
`;

const Img = styled.img`
  
    height:25px; 

`;

const User =  styled.div`
    display : flex;
    align-items : center;
    gap : 10px;
    font-weight : 500;
    color : ${({theme})=>theme.text} ;

`;

 

const Navbar = () => {

  const { currentUser } = useSelector(state => state.user)

  console.log(currentUser.img);

  // const [hamburger, sethamburger] = useState(null);

  const { darkMode, toggle, hamburger } = useContext(DarkModeContext);

  return (

    <Container>
      <Wrapper>
        <Hamburgercss onClick={toggle} style={{ cursor: "pointer" }}>
          <MenuIcon />
        </Hamburgercss>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo>
            <Img src={youtube} alt='youtube' />
            PlayTube
          </Logo>
        </Link>
        <Search>
          <Input placeholder="Search.." />
          <SearchOutlinedIcon style={{ cursor: "pointer" }} />
        </Search>
        {currentUser ? (
          <User>

            <VideoCallOutlinedIcon />
            <Avatar src={currentUser.img}/>
            {currentUser.name}
          </User>
        ) : <Link to="/signin" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>
        }
    </Wrapper>
    </Container >
  )
}

export default Navbar