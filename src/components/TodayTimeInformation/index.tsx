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
  /*const [currentDate, setCurrnetDate] = useState('')
  const getStringDate = (currentDate: {
    toISOString: () => string | any[];
  }) => {
    return currentDate.toISOString().slice(0, 10);
  };
  getStringDate();*/

  /*const currentDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;*/

  const [currentTime, setCurrentTime] = useState('00:00:00');
  const [currentDate, setCurrentDate] = useState('');

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

  const getCurrentDate = () => {
    const date = new Date();
    let day: string;
    switch (date.getDay()) {
      case 1:
        day = 'Mon';
        break;
      case 2:
        day = 'Tue';
        break;
      case 3:
        day = 'Tue';
        break;
      case 4:
        day = 'Tue';
        break;
      case 5:
        day = 'Tue';
        break;
      case 6:
        day = 'Tue';
        break;
      default:
        day = 'Tue';
    }

    setCurrentDate(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${day}`,
    );
  };

  /*const getCurrentDate = () => {
    let day: string;
    switch (date.getDay()) {
      case 1:
        day = 'Mon';
      case 2:
        day = 'Tue';
      case 3:
        return 'Wed';
      case 4:
        return 'Thu';
      case 5:
        return 'Fri';
      case 6:
        return 'Sat';
      default:
        return 'Sun';
    }

    setCurrentDate(`${date.getFullYear()}-${
        date.getMonth() + 1
    }-${date.getDate()} ${date.getDay()}`)
  };*/

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
