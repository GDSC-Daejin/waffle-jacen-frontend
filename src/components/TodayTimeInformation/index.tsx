import React, {useEffect, useState} from 'react';
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
  /*const [currentDate, setCurrnetDate] = useState('')
  const getStringDate = (currentDate: {
    toISOString: () => string | any[];
  }) => {
    return currentDate.toISOString().slice(0, 10);
  };
  getStringDate();*/
  const [date, setDate] = useState(new Date());

  const currentDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  const [currentTime, setCurrentTime] = useState('00:00:00');

  const getCurrentTime = () => {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');
    setCurrentTime(`${hour}:${minute}:${second}`);
  };

  const showCurrentTime = () => {
    setInterval(getCurrentTime, 1000);
  };

  showCurrentTime();

  useEffect(()=> {
    showCurrentTime();
  },[])

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