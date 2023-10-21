import { useState, useEffect } from "react";
import Button from "../components/Button";
import MainInfo from "../components/MainInfo";
import Age from "../components/Age";
import DropImage from "../components/DropImage";
import WorkoutCalendar from "../components/WorkoutCalendar";
import Info from "../components/Info";
import fetchHolidaysData from "../fetchHolidaysData";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [age, setAge] = useState(30);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [holidays, setHolidays] = useState([]);
  const [holidaysObs, setHolidaysObs] = useState([]);
  const [selectedTime, setSelectedTime] = useState();
  const [date, setDate] = useState(new Date());
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  // To fetch holidays
  useEffect(() => {
    fetchHolidaysData("national_holiday", setHolidays, setError);
    fetchHolidaysData("observance", setHolidaysObs, setError);
  }, []);

  const buttonShouldBeDisabled =
    !firstName ||
    !lastName ||
    !email ||
    !age ||
    selectedFiles.length === 0 ||
    !selectedTime;

  async function handleFormSubmit(e) {
    e.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      age: age,
      selectedFile: selectedFiles,
      selectedTime: selectedTime,
    };
    try {
      const response = await fetch("http://letsworkout.pl/submit", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    } finally {
      setSent(true);
    }
  }

  function backToInitialState() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setValidEmail(true);
    setAge(30);
    setSelectedFiles([]);
    setHolidays([]);
    setHolidaysObs([]);
    setSelectedTime();
    setDate(new Date());
    setError("");
    setSent(false);
  }

  return (
    <>
      {sent ? (
        <Info onSetSent={setSent} onBackToInitialState={backToInitialState} />
      ) : (
        <form
          onSubmit={(e) => handleFormSubmit(e)}
          className="flex flex-col gap-1 justify-center items-center bg-background text-text p-10"
        >
          <MainInfo
            onSetFirstName={setFirstName}
            onSetLastName={setLastName}
            validEmail={validEmail}
            onSetValidEmail={setValidEmail}
            onSetEmail={setEmail}
          />
          <Age onSetAge={setAge} />
          <DropImage
            selectedFiles={selectedFiles}
            onSetSelectedFiles={setSelectedFiles}
          />
          <WorkoutCalendar
            holidays={holidays}
            holidaysObs={holidaysObs}
            selectedTime={selectedTime}
            onSetSelectedTime={setSelectedTime}
            date={date}
            onSetDate={setDate}
          />
          <Button
            onHandleFormSubmit={handleFormSubmit}
            buttonShouldBeDisabled={buttonShouldBeDisabled}
          />
        </form>
      )}
    </>
  );
}
