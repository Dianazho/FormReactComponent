export default function SelectTime({ selectedTime, onSetSelectedTime }) {
  const time = ["12:00", "14:00", "16:30", "18:30", "20:00"];
  function handleSelectTime(time) {
    onSetSelectedTime(time);
  }

  return (
    <>
      <h1 className="mb-2">Time</h1>
      <ul className=" grid grid-cols-4 md:flex gap-2 md:flex-col justify-between">
        {time.map((time, i) => (
          <li
            key={i}
            onClick={() => handleSelectTime(time)}
            className={`bg-white py-2 px-3 rounded flex justify-center items-center ${
              selectedTime === time
                ? "border-2 border-darkPurple"
                : "border-2 border-white"
            }`}
          >
            {time}
          </li>
        ))}
      </ul>
    </>
  );
}
