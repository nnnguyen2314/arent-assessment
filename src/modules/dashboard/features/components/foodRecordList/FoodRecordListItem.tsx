import React from 'react';
import {Card, Divider, Space} from "antd";
import styled from "styled-components";

const { Meta } = Card;

const FoodRecordListItemCard = styled(Card)`
  background-color: #ffffff;
  border-radius: unset;
  box-shadow: none;
  
  .ant-card-head {
    border-bottom: none;
    position: absolute;
    background-color: #FFCC21;
    color: #ffffff;
    left: 0;
    bottom: 0;
    margin: 0;
    text-align: center;
    padding: 0 5px;
    font-weight: normal;
    border-radius: unset;
    min-height: unset;
  }
  .ant-card-cover >* {
    border-radius: unset;
  }
  .ant-card-cover {
    height: 234px;
    
    img {
      object-fit: cover;
      height: 100%;
    }
  }
  .ant-card-body {
    display: none;
  }
`;

interface FoodRecordListItemProps {
    id: string;
    time: string;
    type: string;
    imageUrl: string;
}

const FoodRecordListItem = (props: FoodRecordListItemProps) => {
    return (
        <FoodRecordListItemCard
            bordered={false}
            cover={
                <img
                    alt={props?.type}
                    src={props?.imageUrl}
                />
            }
            title={
                <Space>
                    <span>{props?.time}</span>
                    <span>{props?.type}</span>
                </Space>
            }
        />
    )
};

export default FoodRecordListItem;