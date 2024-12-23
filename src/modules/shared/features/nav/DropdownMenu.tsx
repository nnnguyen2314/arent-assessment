import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import {
    MenuOutlined,
} from '@ant-design/icons';
import { Button, Menu, Dropdown, Space } from 'antd';
import UserContainer from "@modules/user/features/containers/UserContainer";
import styled from "styled-components";

const StyledDropdownMenu  = styled(Dropdown)`
  background: none;
  border: none;
  color: #F9963C;
  font-size: 20px;
  background-color: #777777;

  .ant-dropdown-menu {
    
  }
`

type DropdownMenuItem = Required<MenuProps>['items'][number];

const items: DropdownMenuItem[] = [
    { key: '1', label: (
            <a rel="noopener noreferrer" href="/">
                自分の記録
            </a>)
    },
    { key: '2', label: (
            <a rel="noopener noreferrer" href="/">
                自分の記録
            </a>)
    },
    { key: '3', label: (
            <a rel="noopener noreferrer" href="/">
                体重グラフ
            </a>)
    },
    {
        key: 'sub1',
        label: (
            <a rel="noopener noreferrer" href="/">
                目標
            </a>),
    },
    {
        key: 'sub2',
        label: (
            <a rel="noopener noreferrer" href="/">
                選択中のコース
            </a>),
    },
    {
        key: 'sub2',
        label: (
            <a rel="noopener noreferrer" href="/">
                コラム一覧
            </a>),
    },
    {
        key: 'sub2',
        label: (
            <a rel="noopener noreferrer" href="/">
                設定
            </a>),
    }
];

const DropdownMenu= (props: any) => {
    return (
        <StyledDropdownMenu className="custom-dropdown" menu={{ items }} placement="bottomLeft" trigger={['click']}>
            <Button>
                <MenuOutlined />
            </Button>
            {/*<UserContainer />*/}
        </StyledDropdownMenu>
    );
};

export default DropdownMenu;