
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "320px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
  border-radius : 10px;

  -webkit-box-shadow: 10px 10px 15px 0px rgba(112 139 187);
-moz-box-shadow: 10px 10px 15px 0px rgba(112 139 187);
box-shadow: 10px 10px 15px 0px rgba(112 139 187);


`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
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

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src="https://images.pexels.com/photos/9170333/pexels-photo-9170333.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />

        <Details type={type}>
          <ChannelImage type={type} src='https://images.pexels.com/photos/9170333/pexels-photo-9170333.jpeg?auto=compress&cs=tinysrgb&w=600' alt="channelimage" />
          <Texts>
            <Title>
              Hi bro
            </Title>
            <ChannelName>
              Abhishek
            </ChannelName>
            <Info>
              999 views • 1 day
            </Info>
          </Texts>
        </Details>

      </Container>
    </Link>
  )
}

export default Card