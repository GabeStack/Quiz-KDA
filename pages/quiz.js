import React from 'react';
import db from '../db.json';

import { QuizContainer } from '.';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import Button from '../src/components/Button';

export default function QuizKda() {
  return (
    <QuizBackground>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            {/* <BackLinkArrow href="/" /> */}
            <h3>
              Pergunta
              1
              {`${db.questions.length}`}
            </h3>
          </Widget.Header>
          <img
            alt="Descrição"
            style={{
              width: '100%',
              height: '250px',
              objectFit: 'cover',
            }}
            src="https://i.pinimg.com/474x/d4/f0/08/d4f008d98655b73e116230663d098806.jpg"
          />
          <Widget.Content>
            <h2>
              Titulo
            </h2>
            <p>
              Descrição
            </p>
            <Button>
              Confirmar
            </Button>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
}
