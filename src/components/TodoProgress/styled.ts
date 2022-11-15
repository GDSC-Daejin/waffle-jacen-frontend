import styled from 'styled-components';

export const WrapperDesign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  
  width: 340px;
  height: 130px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const Title = styled.div`
  display: flex;
`;
export const TodoCounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  
  width: 100%;
`;
export const TodoCounter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 33.3%;
  height: 100%;
`;
export const SubTitle = styled.div`
`;
export const Count = styled.div`
  box-sizing: border-box;
  border: 1px solid #29a19c;
  border-radius: 20px;
  padding: 20px;
  
  font-size: ${({ theme }) => theme.fontSize.titleS};
`;

