import React from "react";
import "./styles.less";
import Input from "./components/Input";
import Button from "./components/Button";
import Result from "./components/Result";

interface ResultCounter {
  years: number;
  months: number;
  days: number;
}

const App = () => {
  const [day, setDay] = React.useState<string>("");
  const [month, setMonth] = React.useState<string>("");
  const [year, setYear] = React.useState<string>("");
  const [result, setResult] = React.useState<ResultCounter>({
    years: 0,
    months: 0,
    days: 0,
  });

  function calculateAge(startDate: Date, endDate: Date): ResultCounter {
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();

    // Check if current date day is earlier than birthdate day
    if (days < 0) {
      const lastMonthEndDate = new Date(
        endDate.getFullYear(),
        endDate.getMonth(),
        0
      );
      days =
        lastMonthEndDate.getDate() - startDate.getDate() + endDate.getDate();
      months--;
    }

    // Check if current date month is earlier than birthdate month
    if (months < 0) {
      months = 12 - startDate.getMonth() + endDate.getMonth();
      years--;
    }

    return { years, months, days };
  }

  const handleClick = () => {
    const currentDate = new Date();
    const birthDate = new Date(`${month}/${day}/${year}`);

    setResult(calculateAge(birthDate, currentDate));
  };

  return (
    <main className="main-container">
      <div className="inputs-container">
        <Input
          label="day"
          placeholder="DD"
          value={day}
          maxValue={31}
          handleChange={(event: React.FormEvent<HTMLInputElement>) =>
            setDay(event.currentTarget.value)
          }
        />
        <Input
          maxValue={12}
          label="month"
          placeholder="MM"
          value={month}
          handleChange={(event: React.FormEvent<HTMLInputElement>) =>
            setMonth(event.currentTarget.value)
          }
        />
        <Input
          maxValue={2023}
          label="year"
          placeholder="YYYY"
          value={year}
          handleChange={(event: React.FormEvent<HTMLInputElement>) =>
            setYear(event.currentTarget.value)
          }
        />
      </div>
      <Button handleClick={handleClick} />
      <div className="results-container">
        <Result
          result={`${!result.years ? "--" : result.years}`}
          resultDescription="years"
        />
        <Result
          result={`${!result.months ? "--" : result.months}`}
          resultDescription="months"
        />
        <Result
          result={`${!result.days ? "--" : result.days}`}
          resultDescription="days"
        />
      </div>
    </main>
  );
};

export default App;
