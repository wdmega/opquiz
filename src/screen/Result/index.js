/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */ // Aprender o react prop type
import { useRouter } from 'next/router';
import React from 'react';
import Button from '../../components/Button';
import Widget from '../../components/Widgets';

export default function ResultWidget({ results }) {
  const router = useRouter(); // utilizado no botão na tela de resultado para voltar pra home
  return (
    <Widget>
      <Widget.Header>
        Resultado:
      </Widget.Header>

      <Widget.Content>
        <div>
          <p>
            Você acertou
            {' '}
            {results.reduce((somatoriaAtual, resultadoAtual) => {
              const isAcerto = resultadoAtual === true;
              if (isAcerto) {
                return somatoriaAtual + 1;
              }
              return somatoriaAtual;
            }, 0)}
            {' '}
            perguntas
          </p>
          <ul>
            {results.map((result, index) => (
              <li key={`result__${result}`}>
                #
                {index + 1}
                {' '}
                Resultado:
                {result === true
                  ? ' Acertou'
                  : ' Errou'}
              </li>
            ))}
          </ul>
          <form onSubmit={(event) => {
            // Evita da pagína ser recarregada após o envio do form
            event.preventDefault();
            router.push('/');
          }}
          >
            <Button type="submit">
              Inicio
            </Button>
          </form>
        </div>
      </Widget.Content>
    </Widget>
  );
}
