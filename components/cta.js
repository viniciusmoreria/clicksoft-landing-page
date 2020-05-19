import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  background: url('https://i.imgur.com/uz1hPtv.png') no-repeat center center /
    cover;
  position: relative;
  margin-top: 10rem;
`;

const Title = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin-top: 10rem;

  h1 {
    color: ${({ theme }) => theme.primaryLight};
    font-size: 6rem;
  }

  a {
    text-decoration: none;

    h2 {
      color: ${({ theme }) => theme.primaryLight};
      font-size: 3rem;
      font-weight: normal;
      margin: 3rem 0;
    }
  }

  img {
    filter: brightness(0) invert(1);
    justify-self: flex-end;
    cursor: pointer;
  }
`;

const Address = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin-top: 10rem;

  h5 {
    color: ${({ theme }) => theme.primaryLight};
    font-size: 2rem;
    font-weight: normal;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    width: 100%;

    ul {
      justify-self: flex-end;
      width: fit-content;
      list-style: none;
      color: ${({ theme }) => theme.primaryLight};

      li {
        font-size: 2rem;
        font-weight: normal;
        text-decoration: underline;
        text-decoration-style: wavy;
        text-decoration-color: ${({ theme }) => theme.accent};
        margin: 1.5rem 0;
        cursor: pointer;
      }
    }
  }
`;

function cta() {
  return (
    <Wrapper>
      <Title>
        <div>
          <h1>Vamos conversar.</h1>
          <a href='mailto:comercial@clicksoft.com.br'>
            <h2>comercial@clicksoft.com.br</h2>
          </a>
        </div>

        <img src='/logo.png' alt='' />
      </Title>

      <Address>
        <h5>
          Shopping Downtown. Avenida das Américas, 500, Bloco 22, sala 215.
          Barra da Tijuca, Rio de Janeiro{' '}
        </h5>

        <div>
          <ul>
            <li>Clientes</li>
            <li>Projetos</li>
            <li>Sobre nós</li>
          </ul>

          <ul>
            <li>WhatsApp</li>
            <li>Instagram</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </Address>
    </Wrapper>
  );
}

export default cta;
