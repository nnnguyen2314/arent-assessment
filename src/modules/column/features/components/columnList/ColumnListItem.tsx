import React from 'react';
import {Card, Divider, Space} from "antd";
import styled from "styled-components";

const { Meta } = Card;

const StyledColumnListItemCard = styled(Card)`
  background-color: #ffffff;
  border-radius: unset;
  height: 222px;
  box-shadow: none;
  
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
  .ant-card-cover >* {
    border-radius: unset;
  }
  .ant-card-body {
    color: #ffffff;
    padding: 0;
    margin: 10px 0;
    
    .column-hashtags {
      color: #FF963C;
    }
    
    .ant-card-meta-title {
      position: absolute;
      background-color: #FFCC21;
      color: #ffffff;
      left: 0;
      top: 124px;
      margin: 0;
      text-align: center;
      padding: 0 5px;
      font-weight: normal;
    }
  }
`;

interface ColumnListItemProps {
    title: string;
    hashtags: string[];
    imageUrl: string;
    dateTime: string;
}

const ColumnListItem = (props: ColumnListItemProps) => {
    return (
        <StyledColumnListItemCard
            bordered={false}
            cover={
                <img
                    alt="example"
                    src={props.imageUrl}
                />
            }
        >
            <Meta
                title={props.dateTime}
                description={(
                    <Space direction="vertical" size="small">
                        <div>
                            {props.title}
                        </div>
                        <div className="column-hashtags">
                            {props.hashtags && props.hashtags.length > 0 ? props.hashtags.join(' ') : ''}
                        </div>
                    </Space>
                )}
            />
        </StyledColumnListItemCard>
    )
};

export default ColumnListItem;