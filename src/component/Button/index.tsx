interface ButtonTypes {
  onClick: () => {} | void;
  buttonStyle: string;
  buttonLabel: string;
}
const Button = ({ onClick, buttonStyle, buttonLabel }: ButtonTypes) => {
  return (
    <>
      <div onClick={onClick} style={{ backgroundColor: buttonStyle }}>
        {buttonLabel}
      </div>
    </>
  );
};

export default Button;
