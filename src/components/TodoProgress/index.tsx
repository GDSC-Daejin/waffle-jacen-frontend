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
  //const [allCount, setAllCount] = useState(0);

  const allCount = Number(localStorage.getItem('todos-count'));
  const completedCount = Number(localStorage.getItem('completed-todos-count'));
  const todoCount = allCount - completedCount;

  return (
    <WrapperDesign>
      <Title>진행도</Title>
      <TodoCounterWrapper>
        <TodoCounter>
          <SubTitle>전체</SubTitle>
          <Count>{allCount}</Count>
        </TodoCounter>
        <TodoCounter>
          <SubTitle>할 일</SubTitle>
          <Count>{todoCount}</Count>
        </TodoCounter>
        <TodoCounter>
          <SubTitle>완료</SubTitle>
          <Count>{completedCount}</Count>
        </TodoCounter>
      </TodoCounterWrapper>
    </WrapperDesign>
  );
};

export default TodoProgress;
