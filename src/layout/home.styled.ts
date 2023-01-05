import styled, { keyframes } from 'styled-components';

export const StackWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 30px;
  width: 100%;
`;

export const StackButton = styled.button`
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.grey600};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.grey600};
  font-size: ${({ theme }) => theme.fontSize.textM};
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-color: ${({ theme }) => theme.colors.googleBlue};
  }
`;
export const StackInput = styled.input`
  padding: 10px 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey600};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.grey600};
  font-size: ${({ theme }) => theme.fontSize.textM};
  background: transparent;
  flex: 1;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-color: ${({ theme }) => theme.colors.googleYellow};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey300};
  }
`;
export const StackInputButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
`;
//Todo Card 가 반복되므로 section을 사용해야합니다.
export const TodoSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
`;
export const TodoWrapper = styled.div`
  width: 100%;
`;

export const HomeDesign = styled.div`
  display: flex;
  justify-content: space-between;
  height: 600px;
`;
export const HomeLeftInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 30%;
`;
export const HomeRightInner = styled.div`
  display: flex;
  width: 63%;
`;
