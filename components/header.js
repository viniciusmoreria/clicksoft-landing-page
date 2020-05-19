import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { bool, func } from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';

const Nav = styled.div`
  width: 100%;
  margin-top: 5rem;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.maxWidth};
  width: 90%;
  margin: auto;
  position: relative;
`;

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0;
  z-index: 999;

  div {
    width: 2.5rem;
    height: 2px;
    background: ${({ open }) => (open ? '#fff' : '#5BBFB4')};
    border-radius: 4px;
    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const StyledMenu = styled.menu`
  width: 40rem;
  height: fit-content;
  position: absolute;
  right: -5%;
  top: -35%;
  padding: 5%;
  background: ${({ theme }) => theme.accent};
  opacity: ${({ open }) => (open ? '1' : '0')};
  visibility: ${({ open }) => (open ? 'show' : 'hidden')};
  transition: all 0.3s ease-in;
  z-index: 10;

  /* ${between('ss', 'sm')} {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 10%;
  } */

  .links {
    display: flex;
    flex-direction: column;

    :hover > *:not(:hover) {
      color: ${({ theme }) => theme.primaryLight};
    }

    a {
      color: ${({ theme }) => theme.primary};
      font-size: 2.5rem;
      text-decoration: none;
      padding: 1rem 0;
      transition: color 0.3s linear;
      cursor: pointer;

      /* ${between('ss', 'sm')} {
        font-size: 3rem;
      } */
    }
  }
`;

const Title = styled.h1`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 90%;
  margin: 25rem auto 15rem;
  font-size: 6rem;
  font-weight: normal;

  span {
    text-decoration-line: underline;
    text-decoration-style: wavy;
    text-decoration-color: ${({ theme }) => theme.accent};
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger
      open={open}
      onClick={() => {
        setOpen(!open);
      }}
      aria-label='Menu hamburguer'
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

const Menu = ({ open, setOpen }) => {
  return (
    <>
      <StyledMenu open={open}>
        <div className='links'>
          <Link
            to='about'
            smooth
            open={open}
            onClick={() => {
              setOpen(!open);
            }}
          >
            Home
          </Link>
          <Link
            to='projects'
            smooth
            open={open}
            onClick={() => {
              setOpen(!open);
            }}
          >
            Quem somos
          </Link>
          <Link
            to='form'
            smooth
            open={open}
            onClick={() => {
              setOpen(!open);
            }}
          >
            O que fazemos
          </Link>
          <Link
            to='form'
            smooth
            open={open}
            onClick={() => {
              setOpen(!open);
            }}
          >
            Portfólio
          </Link>
          <Link
            to='form'
            smooth
            open={open}
            onClick={() => {
              setOpen(!open);
            }}
          >
            Blog
          </Link>
          <Link
            to='form'
            smooth
            open={open}
            onClick={() => {
              setOpen(!open);
            }}
          >
            Contato
          </Link>
        </div>
      </StyledMenu>
    </>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

function header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav>
        <Navbar>
          <a href='/'>
            <img src='/logo.png' alt='' />
          </a>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </Navbar>
      </Nav>

      <Fade delay='200' direction='top' triggerOnce='true'>
        <Title>
          A <span>Clicksoft</span> é uma agência com foco em desenvolvimento de
          aplicativos, sites, sistemas e marketing digital.
        </Title>
      </Fade>
    </>
  );
}

export default header;
