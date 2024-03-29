// import { Description } from '@mui/icons-material'
import { Send } from '@mui/icons-material'
import styled from 'styled-components'
import React from 'react'
const Container = styled.div`
    height:60vh;
    background-color:#fcf5f5;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
const Title = styled.h1`
    font-size:70px;
    margin-bottom:20px;
    font-weight:900;
    letter-spacing:2px;

`
const Description = styled.div`
    font-size:24px;
    font-weight:300;
    margin-bottom:20px;

`
const InputContainer = styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    border:1px solid lightgray;
    justify-content:space-between;


`
const Input = styled.input`
    border:none;
    outline:none;
    flex:8;
    padding-left:20px;
    font-size:16px;
`
const Button = styled.button`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    border:none;
    cursor:pointer;
    &:hover{
        background-color:lightgray;
    }

`
const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favourite products</Description>
        <InputContainer>
        <Input placeholder='Your email'/>
        <Button>
            <Send/>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter