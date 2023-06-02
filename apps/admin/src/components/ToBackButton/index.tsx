import React from 'react';

import { ToBackIcon } from 'admin/assets';

import { Button } from './style';

interface ToBackButtonProps {
  onClick?: () => void;
}

const ToBackButton: React.FC<ToBackButtonProps> = ({ onClick }) => (
    <Button onClick={onClick}>
      <ToBackIcon />
    </Button>
  );

export default ToBackButton;
