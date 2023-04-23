import arrowIcon from "../assets/images/icon-arrow.svg";

interface ButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ handleClick }: ButtonProps) => {
  return (
    <button className="button" onClick={handleClick}>
      <img src={arrowIcon} alt="Arrow" />
    </button>
  );
};

export default Button;
