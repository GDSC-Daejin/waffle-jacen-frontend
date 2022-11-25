import React from 'react';
import GDSCLogo from '../../../assets/GDSCLogo';
import LogoTitle from '../../../assets/LogoTitle';
import {
  GDSCLogoWrapper,
  LogoTitleWrapper,
  LogoWrapper,
  NavigationDesign,
} from './styled';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <NavigationDesign>
      <LogoWrapper
        onClick={() => {
          navigate('/');
        }}
      >
        <GDSCLogoWrapper>
          <GDSCLogo />
        </GDSCLogoWrapper>
        <LogoTitleWrapper>
          <LogoTitle />
        </LogoTitleWrapper>
      </LogoWrapper>
    </NavigationDesign>
  );
};

export default Navigation;