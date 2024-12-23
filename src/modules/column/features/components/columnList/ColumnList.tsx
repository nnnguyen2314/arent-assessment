import React from 'react';
import styled from "styled-components";
import {Col, Row} from "antd";
import ColumnListItem from "@modules/column/features/components/columnList/ColumnListItem";

const StyledColumnList = styled(Row)`
  
`;

interface ColumnListProps {
    columnList: any[];
}

const ColumnList = (props: ColumnListProps) => {
    return (
        <StyledColumnList gutter={[16, 16]}>
            {
                props.columnList && props.columnList.map((item, index) => {
                    return (
                        <Col md={6} sm={12} xs={24} key={index}>
                            <ColumnListItem
                                title={item?.title}
                                imageUrl={item?.imageUrl}
                                hashtags={item?.hashtags}
                                dateTime={item?.dateTime}
                            />
                        </Col>
                    )
                })
            }
        </StyledColumnList>
    )
};

export default ColumnList;