import { Outlet, useNavigate } from 'react-router-dom';
import {
  BurgerButton,
  BurgerIcon,
  BurgerMenu,
  Button,
  ButtonInBurger,
  Container,
  LinkLogo,
  Links,
  LogInWrap,
  LoginWrap,
  Menu,
  Nav,
  NotLoginWrap,
  UserIcon,
  UserName,
  UserWrap,
  WrapButton,
  WrapButtonUser,
  WrapLink,
  WrapLogInLink,
  Wrapper,
} from './Layout.styled';

import { useEffect, useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { Login } from 'components/LogIn/LogIn';
import { Registration } from 'components/Registration/Registration';
import { useDispatch, useSelector } from 'react-redux';
import {
  logOut,
  refreshUser,
  selectIsLogin,
  selectIsRefreshing,
  selectName,
} from '../../redux/UserSlice';
import { getAuth, signOut } from 'firebase/auth';
import toast from 'react-hot-toast';

export const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);
  const isRefreshing = useSelector(selectIsRefreshing);
  const userName = useSelector(selectName);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRegistration, setIsOpenRegistration] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShown, setIsShown] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(refreshUser());
    }
  }, [dispatch]);


  useEffect(() => {
    if (isOpen || isOpenRegistration) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, isOpenRegistration]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const toggleModalRegistration = () => {
    setIsOpenRegistration(!isOpenRegistration);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsShown(() => {
        return {};
      });
    } else {
      setIsShown(() => {
        return { display: 'flex' };
      });
    }
  };

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(logOut());
        navigate('/', { replace: true });
        toast.success(`You are logged out`);
      })
      .catch(error => {
        toast.error('Something went wrong. Try again', error.message);
      });
  };

  return (
    <div style={{ padding: '10px 10px' }}>
      <Wrapper>
        <Container>
          <Nav>
            {isLogin || isRefreshing ? (
              <LogInWrap>
                <LinkLogo to="/">Nanny.Services</LinkLogo>
                <LoginWrap>
                  <WrapLogInLink>
                    <Links to="/">Home</Links>
                    <Links to="/nannies">Nannies</Links>
                    <Links to="/favorites">Favorite</Links>
                  </WrapLogInLink>

                  <WrapButtonUser>
                    <UserWrap>
                      <UserIcon />
                    </UserWrap>
                    <UserName>{userName}</UserName>

                    <BurgerMenu>
                      <BurgerButton onClick={toggleMenu}>
                        <BurgerIcon />
                      </BurgerButton>
                      <Menu style={isShown}>
                        <ButtonInBurger type="button" onClick={handleLogOut}>
                          Log out
                        </ButtonInBurger>
                      </Menu>
                    </BurgerMenu>

                    <Button type="button" onClick={handleLogOut}>
                      Log out
                    </Button>
                  </WrapButtonUser>
                </LoginWrap>
              </LogInWrap>
            ) : (
              <NotLoginWrap>
                <LinkLogo to="/">Nanny.Services</LinkLogo>
                <WrapLink>
                  <Links to="/">Home</Links>
                  <Links to="/nannies">Nannies</Links>
                </WrapLink>

                <BurgerMenu>
                  <BurgerButton onClick={toggleMenu}>
                    <BurgerIcon />
                  </BurgerButton>
                  <Menu style={isShown}>
                    <WrapButton>
                      <ButtonInBurger
                        type="button"
                        onClick={() => setIsOpen(true)}
                      >
                        Log In
                      </ButtonInBurger>

                      <ButtonInBurger
                        type="button"
                        onClick={() => setIsOpenRegistration(true)}
                      >
                        Registration
                      </ButtonInBurger>
                    </WrapButton>
                  </Menu>
                </BurgerMenu>

                <WrapButton>
                  <Button type="button" onClick={() => setIsOpen(true)}>
                    Log In
                  </Button>

                  {isOpen && (
                    <Modal toggleModal={toggleModal}>
                      <Login toggleModal={toggleModal} />
                    </Modal>
                  )}

                  <Button
                    type="button"
                    onClick={() => setIsOpenRegistration(true)}
                  >
                    Registration
                  </Button>
                  {isOpenRegistration && (
                    <Modal toggleModal={toggleModalRegistration}>
                      <Registration toggleModal={toggleModalRegistration} />
                    </Modal>
                  )}
                </WrapButton>
              </NotLoginWrap>
            )}
          </Nav>
        </Container>

        <Outlet />
      </Wrapper>
    </div>
  );
};
