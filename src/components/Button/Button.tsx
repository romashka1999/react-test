import React, { MouseEventHandler } from "react";

interface Props {
  buttonText: string;
  onCLickHandler: MouseEventHandler<any> | undefined;
  className?: string;
}

const Button: React.FC<Props> = ({ buttonText, onCLickHandler, className }) => {
  return (
    <button
      className={`bg-gradient-to-r rounded-30 px-9 py-5 from-redFrom to-redTo text-white font-bold text-btnText ${className}`}
      onClick={onCLickHandler}
    >
      {buttonText}
    </button>
  );
};

export default Button;
