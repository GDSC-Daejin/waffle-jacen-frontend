import React from 'react';
import {
  Count,
  SubTitle,
  Title,
  TodoCounter,
  TodoCounterWrapper,
  WrapperDesign,
} from './styled';

const TodoProgress = () => {
  return (
    <WrapperDesign>
      <Title>진행도</Title>
      <TodoCounterWrapper>
        <TodoCounter>
          <SubTitle>전체</SubTitle>
          <Count>50</Count>
        </TodoCounter>
        <TodoCounter>
          <SubTitle>할 일</SubTitle>
          <Count>33</Count>
        </TodoCounter>
        <TodoCounter>
          <SubTitle>완료</SubTitle>
          <Count>17</Count>
        </TodoCounter>
      </TodoCounterWrapper>
    </WrapperDesign>
  );
};

export default TodoProgress;
