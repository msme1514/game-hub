import React from "react";

interface Props {
  className: string;
  children: string;
  onClick: () => void;
}

const Button = ({ className, children, onClick }: Props) => {
  return (
    <>
      <button type="button" className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
