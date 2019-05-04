import { UncontrolledTooltip } from "reactstrap";
import React from "react";
export const Tooltip = ({
  message,
  placement,
  keyname,
  data: Data,
  ...props
}) => {
  return (
    <>
      <UncontrolledTooltip placement={placement} target={keyname}>
        {message}
      </UncontrolledTooltip>
      <Data id={keyname} {...props} />
    </>
  );
};
