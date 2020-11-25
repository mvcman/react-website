import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./sidebarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={() => toggle()}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink tp="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink tp="discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink tp="services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink tp="signup" onClick={toggle}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
