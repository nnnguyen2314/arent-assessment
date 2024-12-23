import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import {Layout, Typography} from 'antd';
import styled from 'styled-components';
import AuthContainer from "@modules/user/features/auth/containers/AuthContainer";
import UserContainer from "@modules/user/features/containers/UserContainer";
import useUserService from "@modules/user/hooks/useUserService";
import FooterNav from "@modules/shared/features/nav/FooterNav";
import MainNav from "@modules/shared/features/nav/MainNav";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const StyledLayout = styled(Layout)`
  background: none;
  margin: auto;
  height: auto;
`;

const StyledLayoutHeader = styled(Header)`
  color: #fff;
  background: #414141;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  .branding {
    display: flex;
    align-items: center;
    
    .branding-logo {
      display: flex;
      font-size: 50px;
      height: 70px;
      padding: 15px 15px;
      align-items: center;
      img {
        height: 100%;
        display: block;
      }
    }
  }
  .nav-bar {
    display: flex;
    .dropdown-menu {
      display: flex;
      align-items: center;
    }
  }
  .ant-menu-light {
    background: transparent;
    border: none;
  }

  .ant-menu-item-active {
    font-weight: 600;

    &&::after {
      border: none;
    }
  }
`;

const StyledContent = styled(Content)`
  display: flex;
  flex-flow: row;
  height: auto;
  padding: 0;
  justify-content: center;
  margin: auto;
  width: 100%;
  background: none;
`;

const StyledFooter = styled(Footer)`
  background: #414141;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  .nav-bar {
    display: flex;
    .dropdown-menu {
      display: flex;
      align-items: center;
    }
  }
  .ant-menu-light {
    background: transparent;
    border: none;
  }

  .ant-menu-item-active {
    font-weight: 600;

    &&::after {
      border: none;
    }
  }
`;

const RootLayout = ({children}: { children: React.ReactNode }) => {
    const router = useRouter();

    const { selector, handleFetchProfile } = useUserService();
    useEffect(() => {
        if(!selector.userState.isAuthenticated) {
            handleFetchProfile();
        }
    }, [handleFetchProfile, selector.userState.isAuthenticated]);

    return (
        <StyledLayout>
            <StyledLayoutHeader>
                <div className="branding">
                    <div className="branding-logo">
                        <Link href="/">
                            <svg width="144" height="64" viewBox="0 0 144 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.01" width="144" height="64" fill="#FF963C"/>
                                <g clip-path="url(#clip0_56556_818)">
                                    <path d="M31.8646 27.5166H41.3419V35.3131H44.9509V16.0281H41.3419V24.1553H31.8646V16.0281H28.228V35.3131H31.8646V27.5166Z" fill="#FF963C"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M53.6932 35.6437C55.7594 35.6437 58.1012 34.9274 59.5338 33.4396L57.3848 31.3182C56.6134 32.1173 54.988 32.5856 53.7483 32.5856C51.3789 32.5856 49.9188 31.3735 49.6984 29.6929H60.3052C60.8286 24.1002 57.991 21.29 53.4452 21.29C49.0372 21.29 46.2271 24.2655 46.2271 28.3979C46.2271 32.7509 49.0096 35.6437 53.6932 35.6437ZM53.5553 24.2655C55.4839 24.2655 56.8615 25.1471 57.0817 26.9103H49.7536C50.2494 25.1471 51.7372 24.2655 53.5553 24.2655H53.5553Z" fill="#FF963C"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M68.8958 35.6984C70.411 35.6709 72.5324 34.8993 73.3038 33.3015L73.4691 35.2852H76.6373V21.7029H73.4139L73.3038 23.5763C72.5324 22.2263 70.7968 21.3723 68.9785 21.3723C65.0112 21.3447 61.8979 23.7967 61.8979 28.4802C61.8979 33.2462 64.8735 35.7259 68.8957 35.6984L68.8958 35.6984ZM69.2814 24.3752C74.5711 24.3752 74.5711 32.6125 69.2814 32.6125C67.0498 32.6125 65.2592 31.0699 65.2592 28.4802C65.2592 25.8905 67.0498 24.3752 69.2814 24.3752Z" fill="#FF963C"/>
                                    <rect x="79.0323" y="16.0276" width="3.33355" height="19.2575" fill="#FF963C"/>
                                    <path d="M98.6182 28.3424C98.6182 26.3037 99.9955 24.6232 101.979 24.6232C103.77 24.6232 105.065 25.6702 105.065 28.1495V35.285H108.426V28.1221C108.426 24.1273 106.718 21.5101 102.861 21.5101C101.318 21.5101 99.8303 21.9784 98.6182 23.5487V16H95.257V35.285H98.6182V28.3424Z" fill="#FF963C"/>
                                    <path d="M86.8417 30.4909C86.8417 33.8797 88.7702 35.5602 91.7179 35.4501C92.7374 35.4225 93.5363 35.2572 94.5006 34.8714L93.5638 32.0062C93.068 32.2543 92.4618 32.4195 91.9384 32.4195C90.8915 32.4195 90.1752 31.7859 90.1752 30.491V24.6228H93.9496V21.7301H90.2028V18.418H86.8417V21.7301H84.307V24.6228H86.8417L86.8417 30.4909Z" fill="#FF963C"/>
                                    <path d="M121.449 21.3721L117.771 29.6346L114.108 21.3721H110.56L115.993 33.6289L108.36 50.7745L95.0009 39.4341L16 39.4408V42.5778L93.775 42.5792L109.533 56L125 21.3721H121.449Z" fill="#FF963C"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_56556_818">
                                        <rect width="109" height="39.9999" fill="white" transform="translate(16 16)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="nav-bar">
                    <MainNav displayMode="horizontal" />
                </div>
            </StyledLayoutHeader>
            <StyledContent>
                {children}
            </StyledContent>
            <StyledFooter>
                <div className="nav-bar">
                    <FooterNav displayMode="horizontal" />
                </div>
            </StyledFooter>
        </StyledLayout>
    );
};

export default RootLayout;