/** @format */

import styled from 'styled-components';
export const OutWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  padding: 0;
  z-index: 1;
  @media (min-width: 768px) {
    display: inline-block;
    top: 20px;
  }
`;

export const Wrapper = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  transition: display 0.4s linear;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  @media (min-width: 768px) {
    width: 100vw;
    position: static;
    z-index: 999;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.div`
  opacity: ${({ isSmall, open }) => (open && isSmall ? 0 : 1)};
  width: 250px;
  position: relative;
  left: 0px;
  top: ${({ open }) => (open ? '-15px' : '15px')};
  @media (min-width: 768px) {
    position: relative;
    left: 0px;
    top: -15px;
  }

  img {
    transform: ${({ isSmall, open }) =>
      isSmall && !open ? 'translateX(0px)' : 'translateX(20px)'};
    width: 100%;
    @media (min-width: 768px) {
      position: relative;
      display: ${({ isSmall }) => (isSmall ? 'none' : 'block')};
      left: 10px;
      top: 0px;
    }
    @media (min-width: 1440px) {
      width: 300px;
    }
  }
`;
export const UnorderList = styled.ul`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 60px 0 60px 0;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  @media (min-width: 768px) {
    position: static;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
export const ListItem = styled.li`
  font-family: ${({ theme }) => theme.font.family.Montserrat};
  list-style: none;
  text-decoration: none;
  padding: 60px 0px 0 0;
  @media (min-width: 768px) {
    padding: 25px 10px 0 0;
    display: flex;
    position: relative;
    align-items: center;
    top: 5px;
    left: 0px;
  }
  @media (min-width: 1024px) {
    position: relative;
    padding: 25px 0px 0 0;
    left: 50px;
    top: 5px;
  }
  @media (min-width: 1440px) {
    position: relative;
    padding: 25px 0px 0 0;
    left: 100px;
    top: -5px;
  }
  a {
    font-size: ${({ theme }) => theme.font.size.s};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    align-self: center;
    justify-items: center;
    @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.font.size.xs};
    }
    @media (min-width: 1024px) {
      font-size: ${({ theme }) => theme.font.size.s};
      padding: 0px 30px 0 0;
      position: relative;
      left: 0px;
    }
    @media (min-width: 1440px) {
      padding: 25px 40px 10px 20px;
      font-size: ${({ theme }) => theme.font.size.m};
    }
  }
`;

export const SocialMedia = styled.div`
  padding: 100px 0 0 0;
  display: flex;
  justify-content: space-around;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    right: 40px;
    justify-content: space-around;
    padding: 0px 0 0 0;
  }
  a {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    padding: 10px;
    margin: 10px;
    @media (min-width: 1024px) {
      margin: 15px;
    }
    img {
      @media (min-width: 768px) {
        position: relative;
        margin: 20px;
        margin-right: 60px;
        padding: 0px;
        top: -15px;
        height: 25px;
        width: 25px;
      }
      @media (min-width: 1024px) {
        position: relative;
        margin: 20px;
        margin-right: 60px;
        padding: 0px;
        top: -15px;
        height: 30px;
        width: 30px;
      }
      @media (min-width: 1440px) {
        position: relative;
        margin-right: 60px;
        padding: 0px;
        top: 4px;
        width: 35px;
        height: 35px;
      }

      width: 30px;
      height: 30px;
    }
  }
`;

export const Hamb = styled.div`
  width: 3rem;
  height: 2rem;
  position: absolute;
  right: 0;
  @media (min-width: 768px) {
    display: none;
  }
  div {
    left: -20px;
    top: 0;
    width: 3rem;
    height: 0.1rem;
    /* position: relative; */
    position: absolute;
    transition: 0.4s linear;
    :first-child {
      display: inline-block;

      background-color: ${({ open }) => (open ? 'transparent' : 'black')};
      height: 0.3rem;
      width: 2.5rem;
      top: 10px;
    }
    :nth-child(2) {
      background: black;
      display: inline-block;
      height: 0.3rem;
      width: 2.5rem;
      transform: ${({ open }) =>
        open
          ? 'translateY(1rem) rotate(45deg)'
          : 'translateY(0rem) rotate(0deg)'};
    }
    :nth-child(3) {
      display: inline-block;
      top: 20px;
      background: black;
      height: 0.3rem;
      width: 2.5rem;
      transform: ${({ open }) =>
        open
          ? 'translateY(-1rem) rotate(-45deg)'
          : 'translateY(-0rem) rotate(0deg)'};
    }
  }
`;
