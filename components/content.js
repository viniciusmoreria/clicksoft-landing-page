import React from 'react';
import styled from 'styled-components';
import { FaPlay, FaAngleDown } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

const StyledVideo = styled.div`
  max-width: 140rem;
  height: fit-content;
  margin: auto;
  position: relative;

  video {
    width: 100%;
  }

  svg {
    position: absolute;
    top: 47%;
    right: 48%;
    font-size: 5rem;
    color: #fff;
    cursor: pointer;
  }
`;

const Services = styled.div`
  ${({ theme }) => theme.grid};
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  max-width: ${({ theme }) => theme.maxWidth};
  width: 90%;
  margin: 15rem auto;

  h2 {
    font-size: 3rem;
    color: ${({ theme }) => theme.accent};
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 25rem;
    font-size: 3.2rem;
    font-weight: normal;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: all 200ms ease-in;

      :hover {
        color: ${({ theme }) => theme.primary};
      }

      svg {
        font-size: 2rem;
        color: ${({ theme }) => theme.accent};
        margin-left: 1rem;
      }
    }
  }
`;

const Clients = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 90%;
  margin: 15rem auto;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5rem 0;
    width: 100%;
  }

  img {
    filter: grayscale(100%);
    width: 15rem;
    height: 15rem;
    object-fit: contain;
    transition: all 200ms ease-in;

    :hover {
      filter: grayscale(0);
    }
  }
`;

function content() {
  return (
    <>
      <Fade delay='200' direction='top' triggerOnce='true'>
        <StyledVideo>
          <video
            autoPlay
            loop
            muted
            playsInline
            src='https://s3.amazonaws.com/clay.global/static/img/reel/reel-min.mp4'
          />
          <FaPlay />
        </StyledVideo>
      </Fade>

      <Fade cascade direction='top' damping='0.3' triggerOnce='true'>
        <Services>
          <h2>Somos experts em:</h2>
          <ul>
            <li>
              Marketing Digital <FaAngleDown />
            </li>
            <li>
              Sistemas e Aplicativos <FaAngleDown />
            </li>
            <li>
              Sites e Lojas Virtuais <FaAngleDown />
            </li>
            <li>
              Design <FaAngleDown />
            </li>
          </ul>
        </Services>
      </Fade>

      <Clients>
        <div>
          <Fade cascade direction='top' damping='0.3' triggerOnce='true'>
            <img src='/static/facebook.png' alt='' />
            <img src='/static/google.png' alt='' />
            <img src='/static/loreal.png' alt='' />
            <img src='/static/coca.png' alt='' />
          </Fade>
        </div>

        <div>
          <Fade cascade direction='top' damping='0.3' triggerOnce='true'>
            <img src='/static/globo.png' alt='' />
            <img src='/static/merck.png' alt='' />
            <img src='/static/moneylion.png' alt='' />
            <img src='/static/petrobras.png' alt='' />
          </Fade>
        </div>
      </Clients>
    </>
  );
}

export default content;
