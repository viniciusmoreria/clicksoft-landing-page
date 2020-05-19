import React from 'react';
import { Fade } from 'react-awesome-reveal';

import styled from 'styled-components';

const ProjectsHolder = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 90%;
  height: fit-content;
  margin: 15rem auto;

  div {
    ${({ theme }) => theme.grid};
    grid-template-columns: 1fr 1fr;
    gap: 5rem;

    video {
      width: 100%;
      padding: 5rem 0;
    }
  }
`;

const VideoHolder = styled.object`
  width: 100%;

  h4 {
    font-size: 3rem;
    color: ${({ theme }) => theme.primary};
  }

  p {
    margin: 0.5rem 0;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.accent};
  }
`;

const Title = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin: auto;

  h1 {
    font-size: 6rem;
    font-weight: normal;
  }
`;

const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin: auto;

  h1 {
    font-size: 4rem;
    font-weight: normal;
    cursor: pointer;
  }

  img {
    width: fit-content;
  }
`;

const About = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: flex-end;
  align-items: center;
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin: 20rem auto;
  height: 40rem;

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;

    h3 {
      font-size: 7rem;
    }

    span {
      font-size: 2rem;
      font-weight: normal;
    }
  }

  h4 {
    font-size: 3rem;
    font-weight: normal;
  }
`;

class projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Title>
          <Fade cascade direction='top' damping='0.3' triggerOnce='true'>
            <h1>Últimos projetos</h1>
            <img
              src='https://static.wixstatic.com/media/46a015_e550480c35cb4e9db59825631951eb9d~mv2.png/v1/fill/w_119,h_20,al_c,q_85,usm_0.66_1.00_0.01/float.webp'
              alt=''
            />
          </Fade>
        </Title>

        <Fade direction='top' damping='0.3' triggerOnce='true'>
          <ProjectsHolder>
            <div>
              <VideoHolder>
                <video
                  onMouseOver={(e) => e.target.play()}
                  onMouseOut={(e) => e.target.pause()}
                  loop
                  muted
                  playsInline
                  src='https://s3.amazonaws.com/clay.global/static/img/projects/google.mp4'
                />
                <h4>Google</h4>
                <p>UI/UX, Mobile, Startup</p>
              </VideoHolder>

              <VideoHolder>
                <video
                  onMouseOver={(e) => e.target.play()}
                  onMouseOut={(e) => e.target.pause()}
                  loop
                  muted
                  playsInline
                  src='https://s3.amazonaws.com/clay.global/static/img/projects/facebook.mp4'
                />
                <h4>Facebook</h4>
                <p>Website, Marketing, B2B</p>
              </VideoHolder>
            </div>

            <div>
              <VideoHolder>
                <video
                  onMouseOver={(e) => e.target.play()}
                  onMouseOut={(e) => e.target.pause()}
                  loop
                  muted
                  playsInline
                  src='https://s3.amazonaws.com/clay.global/static/img/projects/moneylion.mp4'
                />
                <h4>Moneylion</h4>
                <p>Website, Branding, Development</p>
              </VideoHolder>

              <VideoHolder>
                <video
                  onMouseOver={(e) => e.target.play()}
                  onMouseOut={(e) => e.target.pause()}
                  loop
                  muted
                  playsInline
                  src='https://s3.amazonaws.com/clay.global/static/img/projects/coca-cola.mp4'
                />
                <h4>Coca-Cola</h4>
                <p>UI/UX, Mobile</p>
              </VideoHolder>
            </div>
          </ProjectsHolder>
        </Fade>

        <Subtitle>
          <Fade cascade direction='top' damping='0.3' triggerOnce='true'>
            <h1>Ver mais</h1>
            <img
              src='https://static.wixstatic.com/media/46a015_9f29f2a34d5b4c57b1361e765ad9516c~mv2.png/v1/fill/w_120,h_20,al_c,q_85,usm_0.66_1.00_0.01/float.webp'
              alt=''
            />
          </Fade>
        </Subtitle>

        <Fade cascade direction='top' damping='0.3' triggerOnce='true'>
          <About>
            <h4>
              Como uma agência digital de ponta, trabalhamos o mais próximo
              possível de nossos clientes, para definir, projetar e desenvolver
              transformadoras experiências em todas as plataformas.
            </h4>
            <div className='right'>
              <div>
                <h3>12</h3>
                <span>
                  designers <br />e desenvolvedores.
                </span>
              </div>
              <div>
                <h3>19</h3>
                <span>
                  anos <br />
                  no mercado.
                </span>
              </div>
            </div>
          </About>
        </Fade>
      </>
    );
  }
}

export default projects;
