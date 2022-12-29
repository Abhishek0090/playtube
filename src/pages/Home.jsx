
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Card from "../components/Card";


const Container = styled.div`
    
`;


const Home = () => {
    const [videos, setVideos] = useState([]);
    return (
        <Container>
           <Card/>
        </Container>
    )
}

export default Home