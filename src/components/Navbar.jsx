import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Container = styled.div`
height:60px;
`
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
`
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`
const Center = styled.div`
flex:1;
text-align:center;
`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`
const Language = styled.span`
font-size:16px;
cursor:pointer;
`
const SearchContainer = styled.div`
border:0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`
const Input = styled.input`
border:none;
outline:none;

`
const Logo = styled.h1`
font-weight:bold;
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;

`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon style={{color:"gray",fontSize:"16px"}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>LAMA</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>LOGIN</MenuItem>
                    <MenuItem> <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar