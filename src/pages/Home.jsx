
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Card from "../components/Card";


const Container = styled.div`
    display : flex;
    justify-content  : space-between;
    cursor: pointer;
    flex-wrap : wrap; 
`;


const Home = ({type}) => {

    const [videos, setVideos] = useState([]);


    useEffect(() => {
        const fetchVideos = async ()=>{
            const res = await axios.get(`/videos/random`);
            setVideos(res.data)
        };
        fetchVideos();
    }, []);

    return (
        <Container>
        {
            videos.map(video=>{ 
            return <Card /> 
            }
            )
        }
        </Container>
    )
}

export default Home