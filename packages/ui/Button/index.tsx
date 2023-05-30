import { css } from "@emotion/react";
import { CustomButton } from "./style";
import LoadingCircle from "../LoadingCircle";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isLoading?: boolean;
  width?: string;
  bgColor?: string;
  fontColor?: string;
  hoverBgColor?: string;
  position?: "absolute" | "relative" | "fixed" | "static" | "sticky";
  bottom?: string;
}

const Button: React.FC<ButtonProps> = ({
  children = "",
  isLoading = false,
  width,
  bgColor,
  fontColor,
  hoverBgColor,
  position,
  bottom,
  ...attributes
}) => {
  return (
    <CustomButton
      css={css`
        width: ${width};
        background: ${bgColor};
        color: ${fontColor};
        position: ${position};
        bottom: ${bottom};
        :hover {
          background: ${hoverBgColor};
        }
        :disabled {
          background: ${isLoading && (bgColor || "#050505")};
        }
      `}
      disabled={isLoading}
      {...attributes}
    >
      {isLoading ? <LoadingCircle bgColor={bgColor} /> : children}
    </CustomButton>
  );
};

export default Button;
