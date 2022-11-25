import styled from 'styled-components';
import { css } from 'styled-components';

export const SidebarWrapper = styled.div`
  display: flex;
  width: 300px;
  height: 700px;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const SidebarInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 50px 0;
`;
export const ProfileImageWrapper = styled.div`
  display: flex;
`;
export const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: aqua;
`;
export const ProfileInformation = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 50px;
`;
export const ProfileName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.textXl};
  color: ${({ theme }) => theme.colors.tossBlue500};
`;
export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;
export const MenuWrapper = styled.div<{
  isSelected?: boolean;
  checkLocation?: boolean;
}>`
  display: flex;
  gap: 10px;
  padding: 15px 0 15px 45px;
  position: relative;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.grey100};
    color: ${({ theme }) => theme.colors.tossBlue500};
    & svg path {
      stroke: ${({ theme }) => theme.colors.tossBlue500};
    }
  }
  ${(props) =>
    props.isSelected &&
    css`
      color: ${({ theme }) => theme.colors.tossBlue500};
      & svg path {
        stroke: ${({ theme }) => theme.colors.tossBlue500};
      }
      & .menu_stick {
        display: flex;
      }
    `}
  ${(props) =>
    props.checkLocation &&
    css`
      color: ${({ theme }) => theme.colors.tossBlue500};
      & svg path {
        stroke: ${({ theme }) => theme.colors.tossBlue500};
      }
      & .menu_stick {
        display: flex;
      }
    `}
`;
export const MenuName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.textL};
`;
export const MenuStick = styled.div`
  display: none;
  width: 30px;
  height: 19px;
  border-radius: 10px 0px 0px 10px;
  background-color: ${({ theme }) => theme.colors.tossBlue};
  position: absolute;
  right: 0;
`;
