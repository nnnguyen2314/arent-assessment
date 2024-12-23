import React from 'react';
import styled from "styled-components";
import {Col, Row} from "antd";
import ColumnListItem from "@modules/column/features/components/columnList/ColumnListItem";
import FoodRecordListItem from "@modules/dashboard/features/components/foodRecordList/FoodRecordListItem";

const StyledFoodRecordListWrapper = styled(Row)`
  padding: 8px 157px 20px 157px;
  display: flex;
  justify-content: center;
`;

interface FoodRecordListProps {
    recordList: any[];
}

const FoodRecordList = (props: FoodRecordListProps) => {
    return (
        <StyledFoodRecordListWrapper gutter={[8, 8]}>
            {
                props?.recordList && props?.recordList.map((item, index) => {
                    return (
                        <Col md={6} sm={12} xs={24} key={index}>
                            <FoodRecordListItem
                                id={item?.id}
                                time={item?.time}
                                imageUrl={item?.imageUrl}
                                type={item?.type}
                            />
                        </Col>
                    )
                })
            }
        </StyledFoodRecordListWrapper>
    )
};

export default FoodRecordList;