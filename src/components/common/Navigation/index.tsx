import React from 'react';
import GDSCLogo from '../../../assets/GDSCLogo';
import LogoTitle from '../../../assets/LogoTitle';
import {
  GDSCLogoWrapper,
  LogoTitleWrapper,
  LogoWrapper,
  NavigationDesign,
} from './styled';

const Navigation = () => {
  return (
    <NavigationDesign>
      <LogoWrapper>
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