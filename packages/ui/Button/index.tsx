import { css } from "@emotion/react";
import { CustomButton } from "./style";
import LoadingCircle from "../LoadingCircle";

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  widthREM?: number;
  bgColor?: string;
  fontColor?: string;
  hoverBgColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  children = "",
  disabled = false,
  isLoading = false,
  widthREM,
  bgColor,
  fontColor,
  hoverBgColor,
}) => {
  return (
    <CustomButton
      css={css`
        pointer-events: ${isLoading && "none"};
        width: ${widthREM && `${widthREM}rem`};
        background: ${bgColor && bgColor};
        color: ${fontColor && fontColor};
        :hover {
          background: ${hoverBgColor && hoverBgColor};
        }
      `}
      disabled={disabled}
    >
      {isLoading ? <LoadingCircle /> : children}
    </CustomButton>
  );
};

export default Button;
