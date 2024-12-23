import React from 'react';
import {Card} from "antd";
import { LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend } from "recharts";
import styled from "styled-components";

const { Meta } = Card;

const BodyWeightFatGraphWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  background-color: rgba(46, 46, 46, 1);
`;

interface BodyWeightFatGraphProps {
    data: any[];
}

const BodyWeightFatGraph = (props: BodyWeightFatGraphProps) => {
    return (
        <BodyWeightFatGraphWrapper>
            <LineChart width={800} height={290} data={props?.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" padding={{ left: 30, right: 30 }} />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="weight"
                    stroke="rgba(255, 204, 33, 1)"
                    strokeWidth={3}
                    activeDot={{ r: 2 }}
                />
                <Line type="monotone" dataKey="fat" stroke="rgba(143, 233, 208, 1)" strokeWidth={3} />
            </LineChart>
        </BodyWeightFatGraphWrapper>
    )
};

export default BodyWeightFatGraph;