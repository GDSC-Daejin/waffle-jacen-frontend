import styled from 'styled-components';

export const NavigationDesign = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 80px;
  width: 1240px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100;
`;
export const LogoWrapper = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;
export const GDSCLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
