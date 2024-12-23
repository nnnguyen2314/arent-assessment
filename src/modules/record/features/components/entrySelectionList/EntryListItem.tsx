import React from 'react';
import {Card, Space, Typography} from "antd";
import styled from "styled-components";

const { Title } = Typography;

const StyledRecommendedItemCard = styled(Card)`
  text-align: center;
  background-color: #2E2E2E;
  border-radius: unset;
  padding-top: 24px;
  padding-bottom: 24px;
  width: 216px;
  height: 100%;
  
  .ant-card-head {
    border-bottom: none;
    color: #FFCC21;
    padding: 0 8px;

    .ant-card-head-title {
      white-space: break-spaces;
      text-transform: uppercase;
      font-size: 22px;
      font-weight: 400;
    }
  }
  .ant-card-body {
    color: #ffffff;
    padding-top: 0;
    padding-bottom: 0;
    
    .ant-divider {
      background-color: #ffffff;
      min-width: 50%;
      width: 50%;
      align-self: center;
      justify-self: center;
      margin: 8px 0;
    }
  }
`;

interface RecommendedItemProps {
    title: string;
    description: string;
}

const EntryListItem = (props: RecommendedItemProps) => {
    return (
        <StyledRecommendedItemCard>
            <Space direction="vertical">
                <Title>{props.title}</Title>
                <div>{props.description}</div>
            </Space>
        </StyledRecommendedItemCard>
    )
};

export default EntryListItem;