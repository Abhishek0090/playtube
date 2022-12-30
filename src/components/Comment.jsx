import React, { useEffect, useState } from "react";
import styled from 'styled-components'



const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = ({ name, desc }) => {
    return (
        <Container>
            <Avatar src="https://i.kym-cdn.com/entries/icons/original/000/026/152/gigachad.jpg" />
            <Details>
                <Name>
                    Abhi <Date>1 day ago</Date>
                </Name>
                <Text>Chad 🗿🗿🗿</Text>
            </Details>
        </Container>
    )
}

export default Comment