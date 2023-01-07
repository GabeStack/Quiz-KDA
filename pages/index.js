 /* eslint-disable rule-name */
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import FooterWrapper from '../src/components/Footer';
import GitHubCorner from '../src/components/GithubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export const QuizContainer = styled.div`
width: 100% ;
max-width: 350px;
padding-top: 45px;
margin: auto 10%;
@media screen and (max-width:500px){
  margin: auto ;
  padding: 15px ;
}
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('returno do useState', name, setName);
  return (
    <QuizBackground backgroundImage={db.bg}>

      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>
              Quiz
            </h1>
          </Widget.Header>
          <Widget.Header>
            <h2>
              Sobre as K/DA

            </h2>
          </Widget.Header>
          <Widget.Content>
            <p>
              Teste os seus conhecimentos sobre o universo das K/DA, qual será seu resultado!
            </p>
          </Widget.Content>

          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();

              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Coloque seu nome..."
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar

              </Button>
            </form>
          </Widget.Content>

        </Widget>
        <FooterWrapper />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Cyacer" />
    </QuizBackground>
  );
}
