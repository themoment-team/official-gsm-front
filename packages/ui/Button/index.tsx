import { css } from "@emotion/react";
import { CustomButton } from "./style";
import LoadingCircle from "../LoadingCircle";

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  widthREM?: number;
}

const Button: React.FC<ButtonProps> = ({
  children = "",
  disabled = false,
  isLoading = false,
  widthREM,
}) => {
  return (
    <CustomButton
      css={css`
        pointer-events: ${isLoading && "none"};
        width: ${widthREM && `${widthREM}rem`};
      `}
      disabled={disabled}
    >
      {isLoading ? <LoadingCircle /> : children}
    </CustomButton>
  );
};

export default Button;
