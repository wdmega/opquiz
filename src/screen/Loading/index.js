/* eslint-disable linebreak-style */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import Widget from '../../components/Widgets';

export default function LoadingWidget() {
  const animationOpacity = keyframes`
        0%{
        opacity: 0.5;
        font-size: 10px;
        font-weight: 400;
        filter: blur(10px);
        letter-spacing: 3px;
      }
      50%{
        opacity: 0.9;
        font-size: 15px;
        font-weight: 500;
        filter: blur(1px);
        letter-spacing: 5px;
      }
      100%{
        opacity: 1;
        font-size: 20px;
        font-weight: 600;
        filter: blur(0);
      }
  `;
  const SubTitle = styled.h2`
    text-align: center;
    animation: ${animationOpacity} 2s alternate-reverse infinite ease-in-out;
  `;
  return (
    <Widget
      as={motion.section}
      transition={{ delay: 0.1, duration: 0.5 }}
      variants={{
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 0, y: '100%' },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>
        <h1>Estamos preparando o seu Quiz !!</h1>
      </Widget.Header>

      <Widget.Content>
        <SubTitle>Carregando ...</SubTitle>
      </Widget.Content>
    </Widget>
  );
}
