import styled from 'styled-components';

//보통 웹사이트에서 사용하는 Container 사이즈입니다.

export const LayoutContainer = styled.div`
  position: relative;
  height: 700px;
  max-width: 940px;
  margin: 0 auto;
  min-width: 320px;
  flex: 1;
  background-color: ${(props) => props.theme.colors.grey100};
`;
export const ContainerInner = styled.div`
  width: 100%;
  height: 100%;
  max-width: calc(100% - 48px);
  margin: 0 auto;
  padding: 0 20px;
`;

export const NavigationBlock = styled.div`
  width: 100%;
  height: 50px;
`;
