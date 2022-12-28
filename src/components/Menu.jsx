import React from 'react'
import styled from 'styled-components'
import youtube from "../img/youtube-logo-png-2067.png";

import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

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
                <hr />
                <Item>
                    {/* <SubscriptionsIcon />  Subscriptions */}


                </Item>
            </Wrapper>
        </Container>
    )
}

export default Menu