import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 8px 24px;
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  color: ${({ theme }) => theme.colors.grey900};
`;

export const ArrowButton = styled.button<{ pos: 'left' | 'right' }>`
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: transparent;
  font-size: 18px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grey900};
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  height: 100%;
  border-spacing: 0;
`;

export const TableHeader = styled.thead`
  padding-block: 12px;
  > tr {
    > th {
      font-size: ${({ theme }) => theme.fontSize.textM};
      padding-block: 12px;
      font-weight: normal;
      color: ${({ theme }) => theme.colors.grey900};
    }
  }
`;

export const TableBody = styled.tbody``;

export const TableData = styled.td`
  text-align: center;
  color: ${({ theme }) => theme.colors.grey900};
  padding: 8px;
  position: relative;
  width: 14.3%;
`;

export const DisplayDate = styled.div<{
  isToday?: boolean;
  isSelected?: boolean;
}>`
  color: ${({ isToday }) => isToday && '#F8F7FA'};
  background-color: ${({ isToday, isSelected }) =>
    isSelected ? '#42a5f5' : isToday ? '#FBBC04' : ''};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  align-self: flex-end;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.textS};
`;

export const Base = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  ${Header} + ${Table} {
    margin-top: 36px;
  }
`;
