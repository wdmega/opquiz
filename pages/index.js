/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widgets';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>OP Quiz - Base</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>The Legend of Meme</h1>
          </Widget.Header>

          <Widget.Content>
            <form onSubmit={(event) => {
              // Evita da pagína ser recarregada após o envio do form
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                onChange={
                  (event) => {
                    // Sempre que mudar o estado do input
                    setName(event.target.value);
                  }
                }
                placeholder="Seu nome"
              />
              <button
                type="submit"
                disabled={name.length === 0}
              >
                Jogar
                {/* Adiciona um espaço entre o nome do botão e o usuário */}
                {' '}
                {name}
              </button>
            </form>
          </Widget.Content>

        </Widget>

        <Widget>
          <Widget.Header>

            <h1>The Legend of Meme</h1>

          </Widget.Header>
          <Widget.Content>

            <p>lorem ipsum</p>

          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/wdmega" />
    </QuizBackground>
  );
}
