import "./Button.css";

type props = {
  onClick?: () => void;
  label?: string;
  iconButton?: string;
};

const Button = (props: props) => {
  return (
    <button
      onClick={props.onClick}
      className={`button ${props.iconButton && "icon-button"}`}
    >
      {props.iconButton && (
        <img src={props.iconButton} alt={props.iconButton} />
      )}
      {props.label || "I'm just a regular button"}
    </button>
  );
};

export default Button;
