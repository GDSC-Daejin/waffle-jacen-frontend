import styled from 'styled-components';

export const NavigationDesign = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 80px;
  max-width: 1440px;
  margin: 0 auto;
  min-width: 320px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100;
`;
export const LogoWrapper = styled.div`
  display: flex;
`;
export const GDSCLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
