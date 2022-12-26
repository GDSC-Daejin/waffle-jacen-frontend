import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: auto;
`;

export const Date = styled.small`
  display: block;
  color: #c9c8cc;
  font-size: ${({ theme }) => theme.fontSize.textXl};
`;

export const InputTodo = styled.input`
  display: flex;
  padding: 16px 24px;
  border: none;
  width: 100%;
  margin: 20px 0;
  box-sizing: border-box;
  background-color: transparent;
  color: #c9c8cc;
  caret-color: #c9c8cc;
  flex-wrap: nowrap;
  font-size: ${({ theme }) => theme.fontSize.textM};
`;

export const Card = styled.div`
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  padding: 24px;
  box-sizing: border-box;
  background-color: #19181a;
  position: relative;
`;
export const SubmitButton = styled.button`
  display: flex;
  box-sizing: border-box;
  text-align: center;
  padding: 8px 20px;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  background-color: ${({ theme }) => theme.colors.tossBlue500};
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  bottom: 5px;
  right: 5px;
  cursor: pointer;
`;
