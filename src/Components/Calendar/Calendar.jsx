import moment from 'moment';
import { CalendarTable, DayWrapper } from './Calendar.styled';
moment.updateLocale('en', { week: { dow: 1 } });
const startDay = moment().startOf('months').startOf('week');
const thisDay = moment().format('LL');



const day = startDay.clone().subtract(1, 'day');
const daysArray = [...Array(31)].map(() => day.add(1, 'day').clone());

export const Calendar = () => {
  return (
    <CalendarTable>
      {daysArray.map(dayItem => (
        <DayWrapper
          key={dayItem.format('MMM Do YY')}
          isweekend={dayItem.day() === 6 || dayItem.day() === 0}
          today = {thisDay===dayItem.format('LL')}
        >
          <div>{dayItem.format('LL')}</div>
          <div>Tasks</div>
        </DayWrapper>
      ))}
    </CalendarTable>
  );
};