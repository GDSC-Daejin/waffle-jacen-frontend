import React, { useMemo, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { isSameDay } from '../utils/date';
import {
  ArrowButton,
  Base,
  ButtonContainer,
  DisplayDate,
  Header,
  Table,
  TableBody,
  TableData,
  TableHeader,
  Title,
} from './calendar.styled';

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']; // 요일

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]; // 달

const CalendarLayout: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date()); // 선택한 날짜

  const { year, month, firstDay, lastDay } = useMemo(() => {
    // 선택한 날을 기준으로 첫째 날, 마지막 날, 년, 월 계
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();

    return {
      year,
      month,
      firstDay: new Date(year, month, 1),
      lastDay: new Date(year, month + 1, 0),
    };
  }, [selectedDate]);

  const selectDate = (date: Date) => {
    // 날짜를 선택한다.
    setSelectedDate(date);
    console.log(date);
  };

  const pad = () =>
    [...Array(firstDay.getDay()).keys()].map((p: number) => (
      <TableData key={`pad_${p}`} />
    )); // 해당 월의 첫째 날 전 pad

  const range = () =>
    [...Array(lastDay.getDate()).keys()].map((d: number) => {
      // 1일 부터 마지막 날까지 날짜 표기
      const thisDay = new Date(year, month, d + 1);
      const today = new Date();
      console.log(`asdf ${thisDay}`);
      return (
        <TableData key={d} onClick={() => selectDate(thisDay)}>
          <DisplayDate
            isSelected={isSameDay(selectedDate, thisDay)}
            isToday={isSameDay(today, thisDay)}
          >
            {new Date(year, month, d + 1).getDate()}
          </DisplayDate>
        </TableData>
      );
    });

  const render = () => {
    // table data 를 일주일 단위로 줄바꿈한다.
    const items = [...pad(), ...range()];

    const weeks = Math.ceil(items.length / 7);

    return [...Array(weeks).keys()].map((week: number) => (
      <tr key={`week_${week}`}>{items.slice(week * 7, week * 7 + 7)}</tr>
    ));
  };

  return (
    <Base>
      <Header>
        <ButtonContainer>
          <ArrowButton
            pos="left"
            onClick={() =>
              selectDate(
                new Date(selectedDate.setMonth(selectedDate.getMonth() - 1)),
              )
            }
          >
            <BiChevronLeft />
          </ArrowButton>
          <Title>{`${MONTHS[month]} ${year}`}</Title>
          <ArrowButton
            pos="right"
            onClick={() =>
              selectDate(
                new Date(selectedDate.setMonth(selectedDate.getMonth() + 1)),
              )
            }
          >
            <BiChevronRight />
          </ArrowButton>
        </ButtonContainer>
      </Header>
      <Table>
        <TableHeader>
          <tr>
            {DAYS.map((day, index) => (
              <th key={day} align="center">
                {day}
              </th>
            ))}
          </tr>
        </TableHeader>
        <TableBody>{render()}</TableBody>
      </Table>
    </Base>
  );
};

export default CalendarLayout;
