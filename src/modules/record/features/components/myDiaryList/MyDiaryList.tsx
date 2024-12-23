import React from 'react';
import styled from "styled-components";
import {Col, Row, Space, Typography} from "antd";
import MyDiaryListItem from "@modules/record/features/components/myDiaryList/MyDiaryListItem";

const { Title } = Typography;

const StyledMyDiaryList = styled(Row)`
  
`;

interface MyDiaryListProps {
    myDiaryList: any[];
}

const MyDiaryList = (props: MyDiaryListProps) => {
    return (
        <Space direction="vertical">
            <Title level={3}>My Diary</Title>
            <StyledMyDiaryList gutter={[8, 8]}>
                {
                    props.myDiaryList && props.myDiaryList.map((item, index) => {
                        return (
                            <Col md={6} sm={12} xs={24} key={index}>
                                <MyDiaryListItem
                                    content={item?.content}
                                    dateTime={item?.dateTime}
                                />
                            </Col>
                        )
                    })
                }
            </StyledMyDiaryList>
        </Space>
    )
};

export default MyDiaryList;