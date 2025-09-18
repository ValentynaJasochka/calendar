import { CalendarTable, DayWrapper } from "./Calendar.styled";

// Функція для форматування дати у стилі "Month Day, Year"
const formatDateLong = (date) =>
  date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

// Отримуємо сьогоднішню дату (без часу)
const today = new Date();
today.setHours(0, 0, 0, 0);

// Перший день поточного місяця
const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
// 🔹 кількість днів у місяці
const daysInMonth = new Date(
  today.getFullYear(),
  today.getMonth() + 1,
  0
).getDate();

// 🔹 генеруємо точний масив днів
const daysArray = [...Array(daysInMonth)].map((_, i) => {
  const d = new Date(firstDayOfMonth);
  d.setDate(firstDayOfMonth.getDate() + i);
  return d;
});

export const Calendar = () => {
  return (
    <CalendarTable>
      {daysArray.map((dayItem) => {
        const isWeekend = dayItem.getDay() === 0 || dayItem.getDay() === 6; // неділя або субота
        const isToday = dayItem.getTime() === today.getTime();

        return (
          <DayWrapper
            key={dayItem.toISOString()}
            isWeekend={isWeekend}
            today={isToday}
          >
            <div>{formatDateLong(dayItem)}</div>
            <div>Tasks</div>
          </DayWrapper>
        );
      })}
    </CalendarTable>
  );
};
