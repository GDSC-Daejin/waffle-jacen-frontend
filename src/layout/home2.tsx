import React from 'react';
import TodoProgress from '../components/TodoProgress';
import TodayTimeInformation from '../components/TodayTimeInformation';
import TodayQuote from '../components/TodayQuote';
import HomeLayout from './home';
import { HomeDesign, HomeLeftInner, HomeRightInner } from './home.styled';

const HomeLayout2 = () => {
  return (
    <>
      <HomeDesign>
        <HomeLeftInner>
          <TodayTimeInformation />
          <TodoProgress />
          <TodayQuote />
        </HomeLeftInner>
        <HomeRightInner>
          <HomeLayout />
        </HomeRightInner>
      </HomeDesign>
    </>
  );
};

export default HomeLayout2;
