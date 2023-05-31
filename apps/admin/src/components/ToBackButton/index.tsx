import { ToBackIcon } from "admin/assets";
import React from "react";
import { Button } from "./style";

interface ToBackButtonProps {
  onClick?: () => void;
}

const ToBackButton: React.FC<ToBackButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <ToBackIcon />
    </Button>
  );
};

export default ToBackButton;
