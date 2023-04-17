import React from "react";
import "./styles.less";
import Input from "./components/Input";
import Button from "./components/Button";
import Result from "./components/Result";

const App = () => {
  const [day, setDay] = React.useState<string>("");
  const [month, setMonth] = React.useState<string>("");
  const [year, setYear] = React.useState<string>("");

  return (
    <main className="main-container">
      <div className="inputs-container">
        <Input
          label="day"
          placeholder="DD"
          value={day}
          handleChange={(event: React.FormEvent<HTMLInputElement>) =>
            setDay(event.currentTarget.value)
          }
        />
        <Input
          label="month"
          placeholder="MM"
          value={month}
          handleChange={(event: React.FormEvent<HTMLInputElement>) =>
            setMonth(event.currentTarget.value)
          }
        />
        <Input
          label="year"
          placeholder="YYYY"
          value={year}
          handleChange={(event: React.FormEvent<HTMLInputElement>) =>
            setYear(event.currentTarget.value)
          }
        />
      </div>
      <Button />
      <div className="results-container">
        <Result result={"--"} resultDescription="years" />
        <Result result={"--"} resultDescription="months" />
        <Result result={"--"} resultDescription="days" />
      </div>
    </main>
  );
};

export default App;
