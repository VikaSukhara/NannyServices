import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as User } from '../../img/user.svg';
import { ReactComponent as Burger } from '../../img/burger.svg';

export const BurgerIcon = styled(Burger)`
  width: 20px;
  height: 20px;
  fill: var(--text-color--);
  background: var(--main-color--);
  @media (min-width: 768px) {
    display: none;
  }
`;

export const BurgerButton = styled.button`
  display: block;
  position: relative;
  background-color: transparent;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const BurgerMenu = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 49px;
  right: 0;
  display: none;
  background: #fbfbfb;
  flex-direction: column;
  width: 136px;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
  padding: 50px 14px;
  border-radius: 4px;
  flex-direction: column;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Wrap = styled.nav`
  margin-right: auto;
  margin-left: auto;
  width: 320px;
`;

export const Container = styled.div`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  background: var(--main-color--);
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 300px;
  margin: 0 auto;
  height: auto;

  @media (min-width: 768px) {
    width: 748px;
  }
  @media (min-width: 1440px) {
    width: 1420px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LogInWrap = styled.nav`
  padding: 14px 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LinkLogo = styled(NavLink)`
  display: none;
  color: var(--text-color--);
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -2%;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 24px;
    display: block;
  }
  @media (min-width: 1440px) {
    font-weight: 500;
    line-height: 28px;
  }
`;
export const WrapLogInLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  margin-left: 0;
  margin-right: 30px;

  @media (min-width: 768px) {
    margin-left: 85px;
    margin-right: 60px;
  }
  @media (min-width: 1440px) {
    margin-left: 305px;
    margin-right: 217px;
  }
`;

export const WrapLogInLinkBurg = styled.div`
  border: 4px solid red;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (min-width: 768px) {
    margin-left: 85px;
    margin-right: 60px;
  }
  @media (min-width: 1440px) {
    margin-left: 305px;
    margin-right: 217px;
  }
`;

export const Links = styled(NavLink)`
  text-decoration: none;
  position: relative;

  color: var(--text-color--);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -1%;

  &.active::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    left: 50%;
    right: -50%;
    top: 24px;
    bottom: -24px;
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
  }
`;

export const WrapButtonUser = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: 0;
`;

export const UserWrap = styled.div`
  display: none;
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background: var(--text-color--);

  @media (min-width: 768px) {
    width: 25px;
    height: 25px;
    border-radius: 8px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1440px) {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    margin-right: 14px;
  }
`;

export const UserIcon = styled(User)`
  width: 12px;
  height: 12px;

  @media (min-width: 768px) {
    width: 22px;
    height: 22px;
  }

  @media (min-width: 1440px) {
    width: 24px;
    height: 24px;
  }
`;
export const UserName = styled.h3`
  display: none;
  color: var(--text-color--);
  margin-right: 18px;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const ButtonInBurger = styled.button`
  color: var(--text-color--);
  width: 100px;
  padding: 8px 14px;
  box-sizing: border-box;
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: 30px;
  color: var(--text-color--);
  background: var(--main-color--);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -1%;
  text-align: center;
`;

export const Button = styled.button`
  color: var(--text-color--);
  box-sizing: border-box;
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: 30px;
  background: transparent;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -1%;
  text-align: center;
  display: none;

  &:hover {
    background-color: var(--main-color--);
  }

  @media (min-width: 768px) {
    display: block;
    /* width: 112px; */
    padding: 12px 20px;
  }
  @media (min-width: 1440px) {
    padding: 14px 39px 14px 39px;
  }
`;

export const LoginWrap = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-left: auto;
  margin-right: 0;
`;

export const NotLoginWrap = styled.nav`
  padding: 14px 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const WrapLink = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-right: 48px;
  margin-left: 66px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    margin-left: 487px;
    margin-right: 92px;
  }
`;

export const WrapButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: auto;
  margin-right: 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
