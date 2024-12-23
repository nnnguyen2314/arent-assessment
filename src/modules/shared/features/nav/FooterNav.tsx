import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import styled from "styled-components";
import {MenuOutlined} from "@ant-design/icons";
import { Menu } from 'antd';
import type { MenuProps } from 'antd';

const StyledFooterNav = styled(Menu)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 0;
  list-style: none;

  .ant-menu-item, .ant-menu-submenu {
    display: flex;
    align-items: center;
    margin: 0 10px;

    a {
      padding: 26px 5px;
      font-weight: normal;
      color: #fff;
    }
  }
  .ant-menu-item-icon svg {
    color: #F9963C;
    font-size: 20px;
  }
`;

type MenuItem = Required<MenuProps>['items'][number];

const menuItems: MenuItem[] = [
    {
        label: (
            <a rel="noopener noreferrer" href="/">
                会員登録
            </a>),
        key: 'footer-menu-1',
    },
    {
        label: (
            <a rel="noopener noreferrer" href="/">
                運営会社
            </a>),
        key: 'footer-menu-2'
    },
    {
        label: (
            <a rel="noopener noreferrer" href="/">
                利用規約
            </a>),
        key: 'footer-menu-3'
    },
    {
        label: (
            <a rel="noopener noreferrer" href="/">
                個人情報の取扱について
            </a>),
        key: 'footer-menu-4'
    },
    {
        label: (
            <a rel="noopener noreferrer" href="/">
                特定商取引法に基づく表記
            </a>),
        key: 'footer-menu-5'
    },
    {
        label: (
            <a rel="noopener noreferrer" href="/">
                お問い合わせ
            </a>),
        key: 'footer-menu-6'
    }
];

interface FooterNavProps {
    displayMode: 'horizontal';
}

const FooterNav = (props: FooterNavProps) => {
    return <StyledFooterNav mode="horizontal" items={menuItems} />;
};

export default FooterNav;