import React from 'react';
import styled from "styled-components";
import {Col, Row} from "antd";
import EntryListItem from "@modules/record/features/components/entrySelectionList/EntryListItem";

const StyledEntrySelectionList = styled(Row)`
  
`;

interface EntrySelectionListProps {
    entrySelectionList: any[];
}

const EntrySelectionList = (props: EntrySelectionListProps) => {
    return (
        <StyledEntrySelectionList gutter={24}>
            <Col md={8} sm={12} xs={24}>
                <EntryListItem title="Body Record" description="自分のカラダの記録" className="body-record"/>
            </Col>
            <Col md={8} sm={12} xs={24}>
                <EntryListItem title="My Excercise" description="自分の運動の記録" className="my-excercise"/>
            </Col>
            <Col md={8} sm={12} xs={24}>
                <EntryListItem title="My Diary" description="自分の日記" className="my-diary"/>
            </Col>
        </StyledEntrySelectionList>
    )
};

export default EntrySelectionList;