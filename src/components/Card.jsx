 
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';



const Container = styled.div`
    width : 250px;   
    margin-bottom : 45px;
    cursor : pointer;

    gap: 10px;
`;

const Image = styled.img`
    width  : 100%;
    height : 150px;
    background-color : #999; 
    border-radius : 12px;
`;

const Details = styled.div`
  display: flex;
  margin-top:  16px;
  gap: 12px;
  flex: 1;  
`;

const ChannelImage = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
background-color: #999;
display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div`

`;


const Title = styled.h1`
  font-size: 15px;
  font-weight: 500;
  color: ${({theme})=>theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;

  color: ${({ theme }) => theme.textSoft};
    margin: 8px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  
  color: ${({ theme }) => theme.textSoft};
`;


const Card = () => {
    return (
        <Link to="/video"  style={{ textDecoration: "none" }}>
        <Container>
            <Image src="https://images.pexels.com/photos/9170333/pexels-photo-9170333.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
                  
            <Details>
                <ChannelImage src='https://images.pexels.com/photos/9170333/pexels-photo-9170333.jpeg?auto=compress&cs=tinysrgb&w=600' alt="channelimage"/> 
                <Texts>

                <Title>
                    Hi bro
                </Title>
                <ChannelName>
                    Abhishek
                </ChannelName>
                <Info>
                    999 views - 1 day
                </Info>
                </Texts>
            </Details>

        </Container>
        </Link>
    )
}

export default Card