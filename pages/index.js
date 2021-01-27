/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
// import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widgets';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

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
              <Input
                // Sempre que mudar o estado do input
                name="nomeDoUsuario"
                onChange={(event) => { setName(event.target.value); }}
                placeholder="Seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {/* Adiciona um espaço entre o nome do botão e o usuário */}
                {`Jogar ${name}`}
              </Button>
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
