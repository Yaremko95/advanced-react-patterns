import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";

export function Toggle({ onToggle, children }) {
  const [on, setOn] = useState(false);
  const toggle = () => {
    setOn((prevState) => !prevState);
  };
  onToggle(on);
  return React.Children.map(children, (child) =>
    React.cloneElement(child, { on, toggle })
  );
}

const On = ({ on, children }) => (on ? children : null);

const Off = ({ on, children }) => (on ? null : children);

const Button = ({ on, toggle, ...props }) => (
  <Switch
    checked={on}
    onChange={toggle}
    {...props}
    inputProps={{ "aria-label": "controlled" }}
  />
);

Toggle.On = On;
Toggle.Off = Off;
Toggle.Button = Button;

export const Usage = ({
  onToggle = (...args) => console.log("onToggle", ...args),
}) => {
  return (
    <Toggle onToggle={onToggle}>
      <Toggle.On>
        <Typography>The button is on</Typography>
      </Toggle.On>
      <Toggle.Off>
        <Typography>The button is off</Typography>
      </Toggle.Off>

      <Toggle.Button />
    </Toggle>
  );
};
