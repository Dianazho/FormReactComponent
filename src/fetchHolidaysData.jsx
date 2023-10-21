export default function fetchHolidaysData(holidayType, setState, setError) {
  const country = "PL";
  const year = 2023;
  const key = "leR2NVnXvUpZ8gvFweAKVGJcZ6L0IoejYeM7aT6O";
  const headers = { "X-Api-Key": key };
  fetch(
    `https://api.api-ninjas.com/v1/holidays?country=${country}&year=${year}&type=${holidayType}`,
    { headers }
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network failure");
      }
      return res;
    })
    .then((data) => data.json())
    .then((data) => {
      setState(data);
    })
    .catch((err) => {
      setError(err);
      console.log(err);
    });
}
