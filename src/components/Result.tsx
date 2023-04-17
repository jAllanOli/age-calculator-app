interface ResultsProps {
  result: string;
  resultDescription: string;
}

const Result = ({ result, resultDescription }: ResultsProps) => {
  return (
    <div className="result">
      <span className="result__value">{result}</span>
      <h2 className="result__description">{resultDescription}</h2>
    </div>
  );
};

export default Result;
