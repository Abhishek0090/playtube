import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'




const Container = styled.div`

`;

const Card = () => {
    return (
        <Container>
            <video>
                <source src="https://www.youtube.com/watch?v=_3PeIhkgZ98"  type="video/mp4"/>
            </video>

        </Container>
    )
}

export default Card