import React from "react";

interface IPlaygroundProps {
  customClass?: string;
}
function Playground({ customClass = "" }: IPlaygroundProps) {
  return <div className={customClass}>Playground</div>;
}

export default Playground;
