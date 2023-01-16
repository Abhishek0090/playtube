import React from 'react'
import styled from 'styled-components'
import youtube from "../img/youtube-logo-png-2067.png";

import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Container = styled.div`
    width:10px
    background-color  :  ${({ theme }) => theme.bgLighter}; 
    height: calc(100vh - 56px); 
    font-size: 14px;
    color : ${({ theme }) => theme.text};
    top: 56px;
    overflow-y : auto;
    position  : sticky;
    `;

const Wrapper = styled.div`
    padding : 10px 20px; 
   
    
    
    
`;

const Logo = styled.div`
    display:flex; 
    align-items: center;
    gap:5px;
    font-weight : bold;
    margin-bottom : 25px;
`;

const Img = styled.img`
  
    height:25px; 

`;

const Item = styled.div`
    display : flex;
    align-items : center;
    gap : 20px; 
    cursor : pointer;
    padding:7.5px 0px;

    &:hover{
        background-color  : ${({ theme }) => theme.soft};
    }
`;

const Hr = styled.hr`
     margin: 15px 0px;
     border: 0.5px solid $({theme})=>theme.soft;
`;

const Login = styled.div`

`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
     font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {

    const { currentUser } = useSelector(state => state.user)


    return (
        <Container>
            <Wrapper>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <HomeIcon />  Home
                    </Item>
                    <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
                        <Item>
                            <ExploreIcon />  Explore
                        </Item>
                    </Link>
                    <Link to="subscriptions" style={{ textDecoration: "none", color: "inherit" }}>

                        <Item>
                            <SubscriptionsIcon />  Subscriptions
                        </Item>

                    </Link>
                    <Hr />
                    <Item>
                        <VideoLibraryIcon /> Library
                    </Item>
                    <Item>
                        <HistoryIcon /> History
                    </Item>
                    <Hr />
                    {!currentUser &&
                        <>
                            <Login>
                                Sign in to like videos, comment, and subscribe.
                                <Link to="signin" style={{ textDecoration: "none" }}>
                                    <Button>
                                        <AccountCircleOutlinedIcon />
                                        SIGN IN
                                    </Button>
                                </Link>
                            </Login>
                            <Hr />
                        </>
                    }

                    <Title>
                        Best of PlayTube
                    </Title>
                    <Item>
                        <LibraryMusicIcon /> Music
                    </Item>
                    <Item>
                        <SportsBaseballIcon /> Sports
                    </Item>
                    <Item>
                        <SportsEsportsIcon /> Games
                    </Item>
                    <Item>
                        <MovieCreationIcon /> Movies
                    </Item>
                    <Item>
                        <NewspaperIcon />  News
                    </Item>
                    <Item>
                        <LiveTvIcon />  Live
                    </Item>
                    <Hr />
                    <Item>
                        <SettingsIcon />   Settings
                    </Item>
                    <Item>
                        <FlagIcon />    Report
                    </Item>
                    <Item>
                        <HelpIcon />    Help
                    </Item>
                    <Item onClick={() => { setDarkMode(!darkMode) }} >
                        <SettingsBrightnessIcon />   {darkMode ? "Light" : "Dark"} Mode
                    </Item>
                </Link>
            </Wrapper>
        </Container>
    )
}

export default Menu