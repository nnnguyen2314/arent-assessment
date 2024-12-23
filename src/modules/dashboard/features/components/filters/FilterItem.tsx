import React from 'react';
import styled from "styled-components";
import {Button, Space} from "antd";

const StyledFilterItemWrapper = styled.div`
  width: 116px;
  height: 134px;
  background: url('/assets/images/hexagon-btn.png') no-repeat;
  background-size: contain;
  
  .ant-btn {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    color: #ffffff;
    font-size: 16px;
    
    &:hover {
      background: none;
    }
  }
`;

interface FilterItemProps {
    label: string;
    icon?: any;
}

const FilterItem = (props: FilterItemProps) => {
    return (
        <StyledFilterItemWrapper>
            <Button type="link">
                <Space direction="vertical" size={1}>
                    {props?.icon}
                    <label>{props?.label}</label>
                </Space>
            </Button>
        </StyledFilterItemWrapper>
    );
};

export default FilterItem;