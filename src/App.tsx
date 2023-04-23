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

  const [isValid, setIsValid] = React.useState<boolean>(false);

  function setFormValidity(state: boolean) {
    setIsValid(state);
  }

  function calculateAge(): ResultCounter {
    const currentDate = new Date();
    const birthDate = new Date(`${month}/${day}/${year}`);
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    // Check if current date day is earlier than birthdate day
    if (days < 0) {
      const lastMonthEndDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      );
      days =
        lastMonthEndDate.getDate() -
        birthDate.getDate() +
        currentDate.getDate();
      months--;
    }

    // Check if current date month is earlier than birthdate month
    if (months < 0) {
      months = 12 - birthDate.getMonth() + currentDate.getMonth();
      years--;
    }

    return { years, months, days };
  }

  function validateForm(event: React.MouseEvent<HTMLButtonElement>) {
    if (!isValid || !day || !month || !year) {
      event.preventDefault();
      console.log("não submitou");
    } else {
      console.log("submitou");
    }
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    validateForm(event);
    setResult(calculateAge());
  };

  return (
    <main className="main-container">
      <form noValidate className="inputs-container">
        <Input
          label="day"
          placeholder="DD"
          value={day}
          handleChange={(event: React.FormEvent<HTMLInputElement>) =>
            setDay(event.currentTarget.value)
          }
          setFormValidity={setFormValidity}
        />
        <Input
          label="month"
          placeholder="MM"
          value={month}
          handleChange={(event: React.FormEvent<HTMLInputElement>) =>
            setMonth(event.currentTarget.value)
          }
          setFormValidity={setFormValidity}
        />
        <Input
          label="year"
          placeholder="YYYY"
          value={year}
          handleChange={(event: React.FormEvent<HTMLInputElement>) =>
            setYear(event.currentTarget.value)
          }
          setFormValidity={setFormValidity}
        />
      </form>
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
