import React from 'react';
import { SubTitle, Title, WrapperDesign } from '../TodoProgress/styled';
import {
  ClockTimeWrapper,
  Time,
  TimeWrapper,
  TodayInformation,
} from './styled';
import Clock from '../../assets/Clock';
import Calender from '../../assets/Calender';

const TodayTimeInformation = () => {
  return (
    <WrapperDesign>
      <Title>현재 시간</Title>
      <TodayInformation>
        <TimeWrapper>
          <SubTitle>시간</SubTitle>
          <ClockTimeWrapper>
            <Clock />
            <Time>12:30:43</Time>
          </ClockTimeWrapper>
        </TimeWrapper>
        <TimeWrapper>
          <SubTitle>날짜</SubTitle>
          <ClockTimeWrapper>
            <Calender />
            <Time>2000-01-24</Time>
          </ClockTimeWrapper>
        </TimeWrapper>
      </TodayInformation>
    </WrapperDesign>
  );
};

export default TodayTimeInformation;