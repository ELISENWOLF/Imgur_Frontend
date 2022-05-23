// import request from "superagent";
import React, { useState } from "react";
import styled from "styled-components";
import { Login } from "./login";
import { Signup } from "./signup";
// import { Profile } from "./profile";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
// import { ImageLogo } from "./image";

// const ImageLogo = styled.img`

// `;

const BoxContainer = styled.div`
    position:absolute;
    width: 280px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    overflow: hidden;
    background-color: rgb(48, 47, 47);
    

&:hover{
    box-shadow: 1px 1px 4px black;
}
`;

 
const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-contenet: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

const Backdrop = styled(motion.div)`
    width: 160%;
    height: 550px;
    position: absolute;
    transform: rotate(60deg);
    bottom: 60%;
    top: -290px;
    left: -70px;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    background: rgb(241, 196, 15);
    background: linear-gradient(
        58deg, 
        rgba(241, 196, 15, 1) 20%, 
        rgba(243, 172, 18, 1) 100%
    );
`;
 
const HeaderContainer = styled.div`
        margin-top: 20%;
        width: 100%;
        display: flex;
        flex-direction: column;
`;

const HeaderText = styled.h2`
        font-size: 25px;
        font-weight: 600;
        line-height: 1.24;
        color: #fff;
        z-index: 10;
        margin: 0;
`;

const SmallText =styled.h5`
    color:#fff;
    font-weight: 500;
    font-size: 11px;
    z-index: 10;
    margin: 0;
    margin-top: 7px;
`;

const InnerContainer = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 1.8em;        
`;

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    },
};

const expandingTransition = {
    type: "string",
    duration: 0.7,
    stiffness: 30,
}

export function AccountBox(props){
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");
    
    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000);
    };

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signup");
        }, 400);
    }

    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signin");
        }, 400);
    }

  
    const contextValue = { switchToSignup, switchToSignin };

    return (
            <AccountContext.Provider value={contextValue}>
                {/* <ImageLogo></ImageLogo> */}
            <BoxContainer>
            <TopContainer>
            <Backdrop 
            initial={false} 
            animate={isExpanded ? "expanded" : "collapsed"} 
            variants={backdropVariants} 
            transition={expandingTransition}
            />
            {active === "signin" && <HeaderContainer>
                <HeaderText>Welcome,</HeaderText>
                <HeaderText>Upload your favourite images</HeaderText>
                <SmallText>Sign in to continue!</SmallText>
            </HeaderContainer>}
            {active === "signup" && <HeaderContainer>
                <HeaderText>Create</HeaderText>
                <HeaderText>Account</HeaderText>
                <SmallText>Sign up to continue!</SmallText>
            </HeaderContainer>}
            </TopContainer>
            <InnerContainer>
               {active === "signin" && <Login />}
               {active === "signup" && <Signup />}
            </InnerContainer>
            </BoxContainer>
            {/* <Profile></Profile> */}
            </AccountContext.Provider>
            );
}