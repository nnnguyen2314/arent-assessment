import React from 'react';
import styled from 'styled-components';
import {Button, Space} from 'antd';

const StyledLoadMoreDataWrapper = styled.div`
    &.load-more-data-wrapper {
      width: 100%;
      
      .load-more-data {
        justify-self: center;
        padding: 10px;
        width: 536px;
        display: flex;
        align-items: flex-start;
        background: linear-gradient(0deg, rgba(217, 217, 217, 0.1), rgba(217, 217, 217, 0.1)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
        
        .ant-btn {
          width: 296px;
          height: 56px;
          margin-left: 20px;
        }
      }
    }
`;

interface LoadMoreDataProps {
    label: string;
    buttonIcon?: any;
    buttonText?: string;
    loadingHandler?: any;
}


const LoadMoreData = (props: LoadMoreDataProps) => {
    return (
        <StyledLoadMoreDataWrapper className="load-more-data-wrapper">
            <div className="load-more-data">
                <span>{props?.label}</span>
                <Button icon={props?.buttonIcon}>
                    {!props?.buttonIcon && !props?.buttonText ? 'Click to load more' : props?.buttonText}
                </Button>
            </div>
        </StyledLoadMoreDataWrapper>
    );
};

export default LoadMoreData;
