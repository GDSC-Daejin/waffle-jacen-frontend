import React from 'react';
import TodoProgress from '../components/TodoProgress';
import TodayTimeInformation from '../components/TodayTimeInformation';
import TodayQuote from '../components/TodayQuote';
import { HomeDesign, HomeLeftInner, HomeRightInner } from './home.styled';
import HomeTodoList from './homeTodoList';

const HomeLayout = () => {
  return (
    <>
      <HomeDesign>
        <HomeLeftInner>
          <TodayTimeInformation />
          <TodoProgress />
          <TodayQuote />
        </HomeLeftInner>
        <HomeRightInner>
          <HomeTodoList />
        </HomeRightInner>
      </HomeDesign>
    </>
  );
};

export default HomeLayout;
