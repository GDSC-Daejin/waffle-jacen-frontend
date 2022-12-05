import React from 'react';
import {
  MenuList,
  MenuName,
  MenuStick,
  MenuWrapper,
  ProfileImage,
  ProfileImageWrapper,
  ProfileInformation,
  ProfileName,
  SidebarInner,
  SidebarWrapper,
} from './styled';
import SettingIcon from '../../../assets/SettingIcon';
import HomeIcon from '../../../assets/HomeIcon';
import CalenderIcon from '../../../assets/CalenderIcon';
import LogoutIcon from '../../../assets/LogoutIcon';
import TrashIcon from '../../../assets/TrashIcon';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const checkLocation = location.pathname == '/';
  const isMenuSelected = (menu?: string) => {
    let result = false;
    if (location.pathname.includes(menu as string)) result = true;
    return result;
  };

  return (
    <>
      <SidebarWrapper>
        <SidebarInner>
          <ProfileImageWrapper>
            <ProfileImage />
          </ProfileImageWrapper>
          <ProfileInformation>
            <ProfileName>Jade</ProfileName>
            <div
              onClick={() => {
                navigate('/user_name');
              }}
              style={{ cursor: 'pointer' }}
            >
              <SettingIcon />
            </div>
          </ProfileInformation>
          <MenuList>
            <MenuWrapper
              onClick={() => {
                navigate('/');
              }}
              checkLocation={checkLocation}
            >
              <HomeIcon />
              <MenuName>Home</MenuName>
              <MenuStick className="menu_stick" />
            </MenuWrapper>
            <MenuWrapper
              onClick={() => {
                navigate('/calendar');
              }}
              isSelected={isMenuSelected('calendar')}
            >
              <CalenderIcon />
              <MenuName>Calender</MenuName>
              <MenuStick className="menu_stick" />
            </MenuWrapper>
            <MenuWrapper
              onClick={() => {
                navigate('/trash');
              }}
              isSelected={isMenuSelected('trash')}
            >
              <TrashIcon />
              <MenuName>Trash</MenuName>
              <MenuStick className="menu_stick" />
            </MenuWrapper>
            <MenuWrapper style={{ marginTop: '100px' }}>
              <LogoutIcon />
              <MenuName>Logout</MenuName>
            </MenuWrapper>
          </MenuList>
        </SidebarInner>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
