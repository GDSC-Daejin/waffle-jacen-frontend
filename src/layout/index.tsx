import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import MyPage from '../pages/MyPage';
import Calendar from '../pages/Calendar';
import Trash from '../pages/Trash';
import TodoDetail from '../pages/TodoDetail';
import {
  ContainerInner,
  LayoutContainer,
  NavigationBlock,
} from '../styles/layouts';

const Layout = () => {
  return (
    <LayoutContainer>
      <ContainerInner>
        <NavigationBlock />
        <Routes>
          <Route path={'/*'} element={<Home />} />
          <Route path={'/:user_name/*'} element={<MyPage />} />
          <Route path={'/calendar'} element={<Calendar />} />
          <Route path={'/trash'} element={<Trash />} />
          <Route path={'/todo/:id'} element={<TodoDetail />} />
        </Routes>
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Layout;
