import React from 'react';
import HomeLayout from '../../layout/home';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import Navigation from '../../components/common/Navigation';
import HomeLayout2 from '../../layout/home2';
import Sidebar from '../../components/Sidebar';

const Home = () => {
  //페이지를 만들고 내부 element는 HomeLayout에서 만듭니다.
  return (
    <>
      <Navigation />
      <LayoutContainer>
        <ContainerInner>
          <HomeLayout2 />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default Home;
