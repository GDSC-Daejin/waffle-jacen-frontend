import React, { useEffect, useState } from 'react';
import { SubTitle, Title, WrapperDesign } from '../TodoProgress/styled';
import {
  ClockTimeWrapper,
  Time,
  TimeWrapper,
  TodayInformation,
} from './styled';
import Clock from '../../assets/Clock';
import CalenderIcon from '../../assets/CalenderIcon';

const TodayTimeInformation = () => {
  const [currentTime, setCurrentTime] = useState('00:00:00');
  const [currentDate, setCurrentDate] = useState('');
  const dayList = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const getCurrentTime = () => {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');
    setCurrentTime(`${hour}:${minute}:${second}`);
  };
  const getCurrentDate = () => {
    const date = new Date();
    const day = dayList[date.getDay() - 1];
    const tempDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()} ${day}`;
    setCurrentDate(tempDate);
    localStorage.setItem('currentDate', tempDate);
  };
  const showCurrentTime = () => {
    setInterval(getCurrentTime, 1000);
  };
  const showCurrentDate = () => {
    setInterval(getCurrentDate, 60000);
  };

  showCurrentTime();
  showCurrentDate();

  useEffect(() => {
    getCurrentTime();
    getCurrentDate();
  }, []);

  return (
    <WrapperDesign>
      <Title>현재 시간</Title>
      <TodayInformation>
        <TimeWrapper>
          <SubTitle>시간</SubTitle>
          <ClockTimeWrapper>
            <Clock />
            <Time>{currentTime}</Time>
          </ClockTimeWrapper>
        </TimeWrapper>
        <TimeWrapper>
          <SubTitle>날짜</SubTitle>
          <ClockTimeWrapper>
            <CalenderIcon />
            <Time>{currentDate}</Time>
          </ClockTimeWrapper>
        </TimeWrapper>
      </TodayInformation>
    </WrapperDesign>
  );
};

export default TodayTimeInformation;
