/** @format */

import React, { useState } from 'react';
import { Link } from 'gatsby';
import Logoz from '../../images/Logo/logoz.png';
import facebook from '../../images/Logo/facebook.svg';
import instagram from '../../images/Logo/instagram.svg';
import {
  OutWrapper,
  Wrapper,
  LogoContainer,
  UnorderList,
  ListItem,
  SocialMedia,
  Hamb,
} from './Navigation.style';

const Navigation = isSmall => {
  const [open, isOpen] = useState(false);

  return (
    <>
      <OutWrapper isMobilie>
        <LogoContainer isSmall open={open}>
          <img src={Logoz} alt='' />
        </LogoContainer>
        <Wrapper open={open}>
          <LogoContainer isMobileOpen open={!open}>
            <img src={Logoz} alt='' />
          </LogoContainer>
          <UnorderList>
            <ListItem>
              <Link to='/'>Home</Link>
            </ListItem>
            <ListItem>
              <Link to='/'>About</Link>
            </ListItem>
            <ListItem>
              <Link to='/'>Production</Link>
            </ListItem>
            <ListItem>
              <Link to='/'>Tools</Link>
            </ListItem>
            <ListItem>
              <Link to='/'>Contact</Link>
            </ListItem>
          </UnorderList>
          <SocialMedia>
            <Link to='/'>
              <img src={facebook} alt='' />
            </Link>
            <Link to='/'>
              <img src={instagram} alt='' />
            </Link>
          </SocialMedia>
        </Wrapper>
        <Hamb open={open} onClick={() => isOpen(!open)}>
          <div></div>
          <div></div>
          <div></div>
        </Hamb>
      </OutWrapper>
    </>
  );
};

export default Navigation;
