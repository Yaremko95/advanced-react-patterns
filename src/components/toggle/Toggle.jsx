import React, { useState } from "react";
import Switch from "@mui/material/Switch";

export function Toggle({ onToggle }) {
  const [on, setOn] = useState(false);
  const toggle = () => {
    setOn((prevState) => !prevState);
  };
  onToggle(on);

  return (
    <Switch
      checked={on}
      onChange={toggle}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}

export const Usage = ({
  onToggle = (...args) => console.log("onToggle", ...args),
}) => {
  return <Toggle onToggle={onToggle} />;
};
