import styled from 'styled-components';

export const TodayInformation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  height: 100%;
`;
export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
`;
export const ClockTimeWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
export const Time = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.textL};
`;
