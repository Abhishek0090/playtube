import React, { useContext, useState } from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';




import youtube from "../img/youtube-logo-png-2067.png";
import { DarkModeContext } from "../content/DarkModeContext";
import { useSelector } from "react-redux";
import Upload from "./Upload";

 
import Box from '@mui/material/Box';
import Avatar_icon from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

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

const User = styled.div`
    display : flex;
    align-items : center;
    gap : 10px;
    font-weight : 500;
    color : ${({ theme }) => theme.text} ;

`;

const Option = styled.div`
  display:flex;
  flex-direction  : column;
  width : 100px;
  height : 100px;   
`;

const list = styled.ul`
  display : flex;
  flex-direction : column;
  align-items : center;
  textDecoration  : none;
  border :  2px solid black;
`;

const listoption = styled.li`
   display : flex;
  flex-direction : column;

 
`;

const Logoutbutton  = styled.button`
  border-radius  :10px;
  background : black;
  color : white;
  cursor : pointer;
  width  : 80px;
  height : 40px;
   
`;
 

const Navbar = () => {


  const navigate = useNavigate()

  const { currentUser } = useSelector(state => state.user)

  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");


  const { darkMode, toggle, hamburger } = useContext(DarkModeContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open_anchor = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
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
            <Input placeholder="Search.." onChange={(e) => setQ(e.target.value)} />

            <SearchOutlinedIcon style={{ cursor: "pointer" }} onClick={() => navigate(`/search?q=${q}`)} />
          </Search>
          {currentUser ? (<>

            <User>
              <VideoCallOutlinedIcon onClick={() => setOpen(true)} />
              <Avatar src={currentUser?.img} alt={currentUser.img} />
              {currentUser.name}
        
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}> 
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open_anchor ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open_anchor ? 'true' : undefined}
          >
            <Avatar_icon sx={{ width: 32, height: 32 }} src={currentUser?.img} alt={currentUser.img}>{currentUser.name}</Avatar_icon>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open_anchor}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar_icon /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar_icon /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
 
            </User>
            
          </>
          ) : <Link to="/signin" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Link>
          }
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen} />}
    </>
  )
}

export default Navbar