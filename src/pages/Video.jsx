import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import Comments from "../components/Comments";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    gap: 24px; 
`;

const Content = styled.div`
 flex: 5;

`;


const VideoWrapper = styled.div``;

const Title = styled.h2`
  font-size :18px;
  font-weight  :400;
  margin-top : 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled.span`
    color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  
  border-radius: 50%;
  object-fit: cover;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`;

const Recommendation = styled.div`
  flex :2;
  color: ${({ theme }) => theme.textSoft};
`;

const Video = () => {

  const [like, setLike] = useState(null);
  const [subcribe, setSub] = useState(null);
  const [dislike, setdislike] = useState(null);

  const handleLike = () => {
    setLike(!like);
  }

  const handleDislike = () => {
    setdislike(!dislike);
  }

  const handleSub = () => {
    setSub(!subcribe);
  }

  return (
    <Container>
      <Content>
        <VideoWrapper>
          {/* <VideoFrame src="https://youtu.be/f8UNcMCbhk0" controls /> */}
          <iframe width="100%" height="501" src="https://www.youtube.com/embed/f8UNcMCbhk0" title="How to Host a Website for Free? What are the best Free Web Hosting options?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </VideoWrapper>
        <Title>How Are You?</Title>
        <Details>
          <Info>1,00,12,000 views • Dec 30,2022</Info>
          <Buttons>
            <Button onClick={handleLike}>
              {like ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}{" "} 123
            </Button>
            <Button onClick={handleDislike}>
              {dislike ? <ThumbDownIcon /> : <ThumbDownOutlinedIcon />} Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon style={{ transform: "scaleX(-1)" }} /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>

        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://i.kym-cdn.com/entries/icons/original/000/026/152/gigachad.jpg" />
            <ChannelDetail>
              <ChannelName>Abhishek</ChannelName>
              <ChannelCounter>100k subscribers</ChannelCounter>
              <Description>hi bro whatsup how you doing</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe onClick={handleSub}>
            {subcribe
              ? "SUBSCRIBED"
              : "SUBSCRIBE"}
          </Subscribe>
        </Channel>
        <Hr />

        <Comments />
      </Content>

      <Recommendation>

        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />

      </Recommendation>
    </Container>
  )
}

export default Video