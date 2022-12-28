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

const Container = styled.div`
    flex:1;
    background-color  : #202020;
    height : 100vh; 
    color : white;
    
`;

const Wrapper = styled.div`
    padding : 18px 26px;
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
    padding:12px;
`;


const Menu = () => {

    return (
        <Container>
            <Wrapper>
                <Logo>
                    <Img src={youtube} alt='youtube' />
                    PlayTube
                </Logo>
                <Item>
                    <lord-icon
                        src="https://cdn.lordicon.com/slduhdil.json"
                        trigger="hover"
                        colors="primary:#ffffff"
                        style={{ width: "25px", height: "25px", color: "white" }}>
                    </lord-icon>  Home
                </Item>
                <Item>
                    <ExploreIcon />  Explore
                </Item>
                <Item>
                    <SubscriptionsIcon />  Subscriptions
                </Item>
                <Item>
                    <VideoLibraryIcon />
                </Item>
                <Item>
                    <HistoryIcon />
                </Item>
                <Item>
                    <LibraryMusicIcon />
                </Item>
                <Item>
                    <SportsBaseballIcon />
                </Item>
                <Item>
                    <SportsEsportsIcon />
                </Item>
                <Item>
                    <MovieCreationIcon />
                </Item>
                <Item>
                    <NewspaperIcon />
                </Item>
                <Item>
                    <LiveTvIcon />
                </Item>
                <Item>
                    <SettingsIcon />
                </Item>
                <Item>
                    <FlagIcon />
                </Item>
                <Item>
                    <HelpIcon />
                </Item>
                <Item>
                    <SettingsBrightnessIcon />
                </Item>
            </Wrapper>
        </Container>
    )
}

export default Menu