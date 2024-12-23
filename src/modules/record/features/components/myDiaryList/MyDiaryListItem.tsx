import React from 'react';
import {Card, Divider, Space} from "antd";
import styled from "styled-components";

const { Meta } = Card;

const StyledMyDiaryListItemCard = styled(Card)`
  background-color: #ffffff;
  border-radius: unset;
  width: 231px;
  height: 231px;
  box-shadow: none;
  border: 2px rgba(112, 112, 112, 1) solid;
  padding: 10px;
  
  .ant-card-head {
    border-bottom: none;
    color: #414141;
    padding: 0;
    min-height: unset;
    margin: 0;
    font-size: 16px;

    .ant-card-head-title {
      white-space: break-spaces;
      text-transform: uppercase;
      font-weight: 400;
    }
  }
  .ant-card-body {
    color: #414141;
    padding: 0;
    
    .column-hashtags {
      color: #FF963C;
    }
  }
`;

interface MyDiaryListItemProps {
    content: string;
    dateTime: string;
}

const MyDiaryListItem = (props: MyDiaryListItemProps) => {
    return (
        <StyledMyDiaryListItemCard
            title={props.dateTime}
        >
            <p>{props.content}</p>
        </StyledMyDiaryListItemCard>
    )
};

export default MyDiaryListItem;