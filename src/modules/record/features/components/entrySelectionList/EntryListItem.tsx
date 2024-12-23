import React from 'react';
import {Card, Space, Typography} from "antd";
import styled from "styled-components";

const { Title } = Typography;

const StyledEntryListItemWrapper = styled.div`
  //background-color: #FFCC21;
  border-radius: unset;
  //padding: 15px;
  width: 288px;
  height: 288px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 15px #FFCC21 solid;

  &.body-record {
    background: url('/assets/images/records/MyRecommend-1.jpg') no-repeat;
    background-size: cover;
  }
  &.my-excercise {
    background: url('/assets/images/records/MyRecommend-2.jpg') no-repeat;
    background-size: cover;
  }
  &.my-diary {
    background: url('/assets/images/records/MyRecommend-3.jpg') no-repeat;
    background-size: cover;
  }
  
  .entry-list-item-content {
    width: 100%;
    height: 100%;
    z-index: 10;
    position: absolute;
    top: 15px;
    bottom: 15px;
    left: 15px;
    right: 15px;
    opacity: 0.6;
  }
`;

interface EntryListItemProps {
    title: string;
    description: string;
    className: string;
}

const EntryListItem = (props: EntryListItemProps) => {
    return (
        <StyledEntryListItemWrapper className={props.className}>
            <Space direction="vertical">
                <Title>{props.title}</Title>
                <div>{props.description}</div>
            </Space>
            <div className="entry-list-item-content"></div>
        </StyledEntryListItemWrapper>
    )
};

export default EntryListItem;