import React from 'react';
import {Card} from "antd";
import {PieChart, Pie, Cell} from "recharts";
import styled from "styled-components";

const { Meta } = Card;

const AchievementRateGraphWrapper = styled.div`
  background-image: url('/assets/images/dashboard/d01.jpg');
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 300px;
  background-size: cover;;
  
  .VictoryContainer {
    background-color: transparent;
  }
`;

interface AchievementRateGraphProps {
    data: any;
}

const AchievementRateGraph = (props: AchievementRateGraphProps) => {
    return (
        <AchievementRateGraphWrapper>
            <PieChart width={200} height={200}>
                <text x={80} y={100} textAnchor="middle" dominantBaseline="middle" fill="#ffffff">
                    15/21
                </text>
                <text x={120} y={100} textAnchor="middle" dominantBaseline="middle" fill="#ffffff" style={{fontSize: '20px'}}>
                    70%
                </text>
                <Pie
                    data={props?.data}
                    cx={100}
                    cy={100}
                    innerRadius={78}
                    outerRadius={80}
                    paddingAngle={5}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                >
                    {props?.data.map((entry: any, index: number) => (
                        <Cell key={`cell-${index}`} fill="#ffffff" />
                    ))}
                </Pie>
            </PieChart>
        </AchievementRateGraphWrapper>
    )
};

export default AchievementRateGraph;