import SelectTime from "./SelectTime";
//React icons
import { AiFillExclamationCircle } from "react-icons/ai";

import Calendar from "react-calendar";
import "./../App.css";

export default function WorkoutCalendar({
  holidays,
  holidaysObs,
  selectedTime,
  onSetSelectedTime,
  date,
  onSetDate,
}) {
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  const year = date.getFullYear();
  const fullDate = year + "-" + month + "-" + day;

  const holidaysContainsDate = holidays.some((h) => h.date === fullDate);

  const holidaysObsContainsDate = holidaysObs.find(
    ({ date }) => date === fullDate
  );

  function handleChangeDate(e) {
    onSetSelectedTime(null);
    onSetDate(e);
  }

  return (
    <div>
      <h1 className="flex mb-3 text-2xl font-bold">Your workout</h1>
      <div
        className=" flex flex-col gap-2 md:gap-4 mb-5
      md:flex-row"
      >
        <div>
          <h1 className="mb-2">Date</h1>
          <Calendar
            onChange={(e) => handleChangeDate(e)}
            value={date}
            minDate={new Date()}
            minDetail="month"
            className="md:mb-2 mb-1 rounded border-2 border-lightPurple "
          />
          {holidaysObsContainsDate === undefined ? (
            <></>
          ) : (
            <div className="flex text-center gap-2">
              <AiFillExclamationCircle
                size="1rem"
                color="#ccb4e4"
                className="flex self-center"
              />
              <h1>It is {holidaysObsContainsDate.name}.</h1>
            </div>
          )}
        </div>

        <div>
          {date.getDay() === 0 ||
          holidaysContainsDate ||
          date === new Date() ? (
            ""
          ) : (
            <SelectTime
              selectedTime={selectedTime}
              onSetSelectedTime={onSetSelectedTime}
            />
          )}
        </div>
      </div>
    </div>
  );
}
