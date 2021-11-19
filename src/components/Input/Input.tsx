import React, { HTMLInputTypeAttribute } from "react";

interface Props {
  labelText: string;
  inputId: string;
  inputType: HTMLInputTypeAttribute;
  className?: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
  labelText,
  inputId,
  inputType,
  className,
  onChangeHandler,
}) => {
  return (
    <div>
      <label htmlFor={inputId}>{labelText}</label>
      <input
        onChange={onChangeHandler}
        type={inputType}
        id={inputId}
        className={`w-280 h-50 border-2 rounded-md overflow-hidden border-gradient-t-metalLight shadow-input ${className}`}
      />
    </div>
  );
};

export default Input;
