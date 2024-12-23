import React from 'react';
import styled from "styled-components";
import RecommendedListItem from "@modules/column/features/components/recommendedList/RecommendedListItem";
import {Col, Row} from "antd";

const StyledRecommendedList = styled(Row)`
  
`;

interface RecommendedListProps {
    recommendedList: any[];
}

const EntrySelectionList = (props: RecommendedListProps) => {
    return (
        <StyledRecommendedList gutter={24}>
            {
                props.recommendedList && props.recommendedList.map((item, index) => {
                    return (
                        <Col md={6} sm={12} xs={24}>
                            <RecommendedListItem title={item?.title} description={item?.description}/>
                        </Col>
                    )
                })
            }
        </StyledRecommendedList>
    )
};

export default EntrySelectionList;