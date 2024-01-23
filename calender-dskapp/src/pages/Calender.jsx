import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styled from 'styled-components';
// import '@fullcalendar/common/main.css';

const Calendar = () => {
  return (
    <CalenderWrapper>
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: 'Event 1', date: '2023-01-01' },
      ]}
    />
    </CalenderWrapper>
  );
};

export default Calendar;

const CalenderWrapper = styled.div`
width : 100%;
hight : 90%;
margin-left : 120px;
margin-right : 20px;
margin-top : 20px;
margin-bottom : 50px;
// z-index: -1;
`;
