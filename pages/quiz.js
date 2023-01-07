/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-multi-spaces */
import React from 'react';
import db from '../db.json';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import Button from '../src/components/Button';



function QuestionWidget({
  questions, totalQuestions, questionIndex, onSubmit,addResult,
}) {
  const [selectAlternative, setSelectAlternative] = React.useState(undefined);
  const [isQuestionsSubmited, setIsQuestionsSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectAlternative === questions.answer;
  const hasAlternativeSelected = selectAlternative !== undefined;
  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" /> */}
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}

        </h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '250px',
          objectFit: 'cover',
        }}
        src={questions.image}
      />
      <Widget.Content>
        <h2>
          {questions.title}
        </h2>
        <p>
          {questions.description}
        </p>
        <form
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsQuestionsSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionsSubmited(false);
              setSelectAlternative(undefined);
            }, 3 * 1000);
          }}
        >
          {questions.alternatives.map((alternatives, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex};`;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
              >

                <input

                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternatives}
              </Widget.Topic>
            );
          })}

          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
          {isQuestionsSubmited && isCorrect && <p>Você acertou!</p>}
          {isQuestionsSubmited && !isCorrect && <p>Você errou!</p>}
        </form>
      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header
        style={{ 'border-bottom': '1px dotted #FE43FD' }}
      >
        carregando...
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  RESULT: 'RESULT',
  LOADING: 'LOADING',
};
export default function QuizKda() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const questions = db.questions[questionIndex];
  const [results, setResults] = React.useState([]);
  
  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }
  
  React.useState(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);
  function ResultWidget({ results }){
    return (
      <Widget>
        <Widget.Header
          style={{ 'border-bottom': '1px dotted #FE43FD' }}
        >
          Tela de Resultados
        </Widget.Header>
  
        <Widget.Content>
          <p>Você acertou {' '} {results.reduce((somatoriaAtual, resultAtual)=>  {
          const isAcerto = resultAtual === true;
          if(isAcerto){
            return somatoriaAtual + 1;
          }
          return somatoriaAtual;
          }, 0)} perguntos</p>
          <ul>
            {results.map((result, index) => (
                        <li key={`result ${index}`}>
                        #0{index + 1} Resultado: {result === true ? 'Acertou' : 'Errou'}
                      </li>
            ))}
          </ul>
        </Widget.Content>
      </Widget>
    );
  }
  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        {screenState === screenStates.QUIZ && (
        <QuestionWidget
          questions={questions}
          questionIndex={questionIndex}
          totalQuestions={totalQuestions}
          onSubmit={handleSubmitQuiz}
          addResult={addResult}
        />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.RESULT && <ResultWidget results ={results} /> } 
      </QuizContainer>
    </QuizBackground>
  );
}
